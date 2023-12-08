import { TouchableOpacity,Image, Text } from 'react-native'
import React from 'react'

const CategoryCard = ({imgUrl,title}) => {
  return (
    <TouchableOpacity>
        <Image
            source={{
                uri: imgUrl
            }}
            
            style={{ width: 60, height: 60 }}
            
        />
        <Text >{title}</Text>
    </TouchableOpacity>
    )
}

export default CategoryCard