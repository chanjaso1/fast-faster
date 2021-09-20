import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Text, CheckBox, Button } from 'react-native'
import { useIsFocused } from '@react-navigation/native';
import {queryDay} from './../../database/Firebase'
import ModalStyle from '../../styles/ModalStyle'
import mealPlanScreen from './MealPlanScreen';

export default function MealScreen(props) {

  const [plan, setPlan] = useState([])
  const isFocused = useIsFocused()
  useEffect(() => {
    queryDay(props.route.params.chosenDay.item.day).then(function(result) {setPlan(result)})

  }, [isFocused])

const handleTick = ((meal) => {
  var newPlan = JSON.parse(JSON.stringify(plan))
  newPlan.map(aMeal => {
      if(aMeal.timeToEat == meal.timeToEat) {
          aMeal.checked = !aMeal.checked
      }
  })
})



const foodList = () => {
  return plan.map(meal => {
    return(
         <View style={styles.container}>
         <Text style={styles.text} key={meal.timeToEat * meal.name}>
           {meal.name}
         </Text>
         <CheckBox style={ModalStyle.CheckBox, {paddingBottom:20}}
           value={meal.checked}
           onValueChange={() => {handleTick(meal)}}
         />
       </View>
       
    )
  })
}
  return(  
    
    <View>
      {foodList()}
        <Button title='go back' onPress={() => {props.navigation.goBack()}}/>
    </View> 
  )
}





  const styles = StyleSheet.create({
    container: {
      // flex: 1,
      justifyContent: 'center',
      // alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: '#ebebeb'
    },
    text: {
      color: '#101010',
      fontSize: 24,
      fontWeight: 'bold',
      
      padding:15,
      paddingLeft:10
    }
  })