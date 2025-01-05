import { View, Text, StyleSheet } from 'react-native'
import React, { FC } from 'react'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import CustomSafeAreaView from '@components/global/CustomSafeAreaView'

const CustomerLogin:FC = () => {
  return (
    <GestureHandlerRootView style={styles.container} >

      <View style={styles.container}>

        <CustomSafeAreaView>
           <Text>sarang</Text>

        </CustomSafeAreaView>

      
      
      </View>

    </GestureHandlerRootView>
  )
}
const styles = StyleSheet.create({
 container:{
    flex:1 
 }
})

export default CustomerLogin