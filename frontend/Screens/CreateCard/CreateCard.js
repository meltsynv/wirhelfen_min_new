import React, { useEffect, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

// styles
import globalStyle from '../../Styles/globalStyles';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Snackbar } from 'react-native-paper';
import { COLORS } from '../../Styles/colors';

const CreateCard = ({ CategoriesData, CardsData, updateCardsData, ...props }) => {
  const navigation = useNavigation();
  const [selectCardType, setSelectedCardType] = useState();
  const [selectCategory, setSelectedCategry] = useState();
  const [descriptionText, setDescriptionText] = useState('');
  const [visible, setVisible] = useState(false);
  const [snackbarText, setSnackBarText] = useState('');
  const [categoryData, setCategoryData] = useState([]);

  useEffect(async () => {
    const resultCategories = await axios("http://192.168.178.77:3000/api/v1/categories");

    setCategoryData(resultCategories.data)
  }, [])

  const onDismissSnackBar = () => setVisible(false);

  const handleCreateCard = async (event) => {

    if (selectCardType == undefined || selectCategory == undefined || descriptionText == undefined) {
      setVisible(true);
      setSnackBarText('bitte überprüfe deine Eingabe nochmal');
    } else {
      try {
        const response = await axios.post('http://192.168.178.77:3000/api/v1/cards', {
          description: descriptionText,
          cardType: selectCardType,
          category: selectCategory
        });
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
            {categoryData.map(data => (
              <Picker.Item key={data._id} label={data.name} value={data.name} />
            ))}
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

const mapStateToProps = (state) => {
  return {
    CategoriesData: state.categoriesData,
    CardsData: state.cardsData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCardsData: (cardsData) =>
      dispatch({
        type: "UPDATE_CARDSDATA",
        cardsData: cardsData,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCard);