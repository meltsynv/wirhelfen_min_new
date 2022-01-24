import React, { Component, useEffect, useState } from 'react';
import { Button, Text, View, ActivityIndicator } from 'react-native';
import { connect, useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';

// styles
import globalStyle from '../../Styles/globalStyles';
import { TYPO } from '../../Styles/typo';

// components
import CategoryFilterSection from './categoryFilterSection';
import TypeFilterSection from './typeFilterSection';
import Card from '../../components/Card';
import axios from 'axios';

const Search = ({ ...props }) => {
    const [cardsData, setCardsData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const [cardsDataLoadet, setCardsDataLoadet] = useState(false);
    const [categoriesDataLoadet, setCategoriesDataLoadet] = useState(false);
    const [timer, setTimer] = useState();

    useEffect(async () => {
        const resultCards = await axios("http://192.168.178.77:3000/api/v1/cards");
        const resultCategories = await axios("http://192.168.178.77:3000/api/v1/categories");

        setCardsData(resultCards.data);
        setCategoryData(resultCategories.data)
        setCardsDataLoadet(true);
        setCategoriesDataLoadet(true);
    }, [])

    return (
        <>
            <ScrollView style={globalStyle.container}>
                <TypeFilterSection />
                {categoriesDataLoadet ? (
                    <CategoryFilterSection categoryData={categoryData} />
                ) : (
                    <ActivityIndicator size={'small'} color={'#111111'} />
                )}
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
                    <View style={TYPO.before_sub_title} />
                    <Text style={TYPO.sub_title}>Resultate</Text>
                </View>
                <View style={{ marginBottom: 20 }}>
                    {cardsDataLoadet ?
                        cardsData.map(data => (
                            <Card key={data._id} type={data.cardType} description={data.description} category={data.category} />
                        ))
                        : (
                            <ActivityIndicator size={'large'} color={'#ff0000'} />
                        )}

                </View>
            </ScrollView>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        CardsData: state.cardsData
    };
};

export default connect(mapStateToProps, null)(Search);