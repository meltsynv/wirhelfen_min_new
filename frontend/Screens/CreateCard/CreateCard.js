import React, { useEffect, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { connect, useDispatch } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Snackbar } from 'react-native-paper';
import axios from 'axios';

// styles
import globalStyle from '../../Styles/globalStyles';
import { COLORS } from '../../Styles/colors';



import {  LOGIN_URI } from '../../db_data';
import { useSelector } from 'react-redux';


const CreateCard = () => {
  const [selectCardType, setSelectedCardType] = useState();
  const [selectCategory, setSelectedCategry] = useState();
  const [descriptionText, setDescriptionText] = useState('');
  const [visible, setVisible] = useState(false);
  const [snackbarText, setSnackBarText] = useState('');
  const [categoryData, setCategoryData] = useState([]);
  const navigation = useNavigation();
  const act_user = useSelector(state => state.login.userData)

  //log
  console.log('act_user',act_user)

  const renderCategoryList = () => {
    return categoryData.map((category) => {
      return <Picker.Item key={category.name} label={category.name} value={category.name} />
    })
  }
  useEffect( async () => {
    axios(LOGIN_URI + "categories")
    .then((response) => setCategoryData(response.data))
    .catch((error) => console.error(error))
  }, [])

  const onDismissSnackBar = () => setVisible(false);

  const handleCreateCard = async (event) => {
    
    

    if (selectCardType == undefined || selectCategory == undefined || descriptionText == undefined) {
      // console.log('Auswahl:', selectCardType, selectCategory, descriptionText)
      setVisible(true);
      setSnackBarText('bitte überprüfe deine Eingabe nochmal');
    } else {
      try {
        const response = await axios.post( LOGIN_URI + 'cards', {
          description: descriptionText,
          cardType: selectCardType,
          category: selectCategory,
          sender: act_user,
        });
        console.log(response.data);
      } catch (error) {
        console.log(error)
      }

      navigation.goBack();
    }
  }
   

  
  return (
    <>
      <ScrollView style={globalStyle.container}>
        <View>
          <Snackbar
              visible={visible}
              onDismiss={onDismissSnackBar}
              duration={2000}
              style={{ backgroundColor: COLORS.needHelpColor }}
            >{snackbarText}</Snackbar> 
          {/* TODO: CardType --> dropdown */}
          <Picker
            selectedValue={selectCardType}
            onValueChange={(itemValue, itemIndex) => setSelectedCardType(itemValue)}
          >
            <Picker.Item label="Type wählen" value="" />
            <Picker.Item label="Hilfe suchen" value="Hilfsgesuche" />
            <Picker.Item label="Hilfe anbieten" value="Hilfsangebot" />
          </Picker>
          {/* TODO: categorien --> dropdown */}
          <Picker
            selectedValue={selectCategory}
            onValueChange={(itemValue, itemIndex) => setSelectedCategry(itemValue)}>
            <Picker.Item label="Kategorie wählen" value="" />
            {/**DB_categories.map(data => (
              <Picker.Item key={data._id} label={data.name} value={data.name} />
            ))*/}
            {renderCategoryList()}
          </Picker>
          {/* TODO: description --> textfield */}
          <TextInput
            multiline={true}
            numberOfLines={10}
            onChangeText={setDescriptionText}
            placeholder='bitte geben Sie hier eine Beschreibung ein'
            value={descriptionText}
          />
          <Button title='absenden' onPress={() => handleCreateCard()} />
        </View>
        <View style={{ marginTop: 100 }}>
          <Snackbar
            visible={visible}
            onDismiss={onDismissSnackBar}
            duration={2000}
            style={{ backgroundColor: COLORS.needHelpColor }}
          >{snackbarText}</Snackbar>
        </View>
      </ScrollView>
    </>
  )
}



export default CreateCard;