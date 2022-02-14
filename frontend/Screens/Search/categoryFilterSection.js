import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import CustomChip from '../../components/CustomChips';


export default function CategoryFilterSection ({ categoryData, addfilter, }) {

  
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginBottom: 30 }}>
      {categoryData.map(data => (
        <CustomChip key={data._id} name={data.name} addFilter={addfilter} />
      ))}
    </ScrollView>
  )
}

