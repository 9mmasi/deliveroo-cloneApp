import { ScrollView, Text } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView horizontal
      showsHorizontalScrollIndicator={false} 
      contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10,
        justifyContent:"spa"
      }}>
        <CategoryCard title={'testing'} imgUrl="https://links.papareact.com/gn7"/>
        <CategoryCard title={'testing'} imgUrl="https://links.papareact.com/gn7" />
        <CategoryCard title={'testing'} imgUrl="https://links.papareact.com/gn7" />
        <CategoryCard title={'testing'} imgUrl="https://links.papareact.com/gn7" />
        <CategoryCard title={'testing'} imgUrl="https://links.papareact.com/gn7" />
        <CategoryCard title={'testing'} imgUrl="https://links.papareact.com/gn7" />
        <CategoryCard title={'testing'} imgUrl="https://links.papareact.com/gn7" />
        <CategoryCard title={'testing'} imgUrl="https://links.papareact.com/gn7" />
        <CategoryCard title={'testing'} imgUrl="https://links.papareact.com/gn7" />
      </ScrollView>
  )
}

export default Categories