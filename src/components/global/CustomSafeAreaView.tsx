import { View, Text, ViewStyle, StyleSheet } from 'react-native'
import React, { Children, FC, ReactNode } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


interface CustomSafeAreaViewProps{
  children:ReactNode , 
  style?:ViewStyle
}

const CustomSafeAreaView:FC<CustomSafeAreaViewProps> = ({children , style}) => {
   

  return (
    
    <SafeAreaView style={[styles.container , style]} >

  <View style={[styles.container , style]}>
    {children}
  </View>
      
    </SafeAreaView>


  )
}

const styles = StyleSheet.create({
  container:{
     flex: 1,
     backgroundColor:'#fff'
  }
})

export default CustomSafeAreaView