import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { View } from 'react-native';

// components
import Card from '../../components/Card';

const ResltCardsSection = ({ CardsData, ...props }) => {


  useEffect(() => {

  }, [CardsData])

  const renderCards = () => CardsData.data.map((data, i) => (
    <Card key={i} type={data.type} description={data.description} category={data.category} />
  ))

  return (
    <View style={{ marginBottom: 50 }}>
      {renderCards()}
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    CardsData: state.cardsData
  };
};

export default connect(mapStateToProps, null)(ResltCardsSection);