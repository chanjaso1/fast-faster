import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Text, CheckBox, Button, Modal, LogBox } from 'react-native'
import { useIsFocused } from '@react-navigation/native';
import {deleteMeal, queryDay, updateMeal} from './../../database/Firebase'
import ModalStyle from '../../styles/ModalStyle'
import {AddPlan} from '../../../components/PopUp';
import { YellowBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);


export default function MealScreen(props) {

  const [visible, setVisible] = useState(false)
  const [modalContent, setModalContent] = useState('')
  const [currentDay, setCurrentDay] = useState(props.route.params.chosenDay.item.day)

  const [plan, setPlan] = useState([])
  const isFocused = useIsFocused()
  useEffect(() => {
    queryDay(currentDay).then(function(result) {setPlan(result)})

  }, [isFocused])

const handleTick = ((meal) => {
  var newPlan = JSON.parse(JSON.stringify(plan))
  newPlan.map(aMeal => {
      if(aMeal.timeToEat == meal.timeToEat) {
          aMeal.checked = !aMeal.checked
          updateMeal(aMeal)
      }
  })
  setPlan(newPlan)
})

const handleDelete = ((meal) => {
  var newPlan = []
  plan.map(aMeal => {
    // console.log(aMeal)
    // console.log(meal.timeToEat, ' is the target')
    if(aMeal.timeToEat != meal.timeToEat){
        newPlan.push(aMeal)
    }
  })
  setPlan(newPlan)
  deleteMeal(meal)
})



const foodList = () => {
  try{
    return plan.map((meal) => {
      let key = `${meal.name}` + `${meal.timeToEat}`
      return(
          <View style={styles.container} key={key}>
          <Text style={styles.text}>
            {meal.name}
          </Text>
          <CheckBox style={ModalStyle.CheckBox, {paddingBottom:20}}
            value={meal.checked}
            onValueChange={() => {handleTick(meal)}}
          />
          <Button title='delete' onPress={() => {handleDelete(meal)}}/>
        </View>
        
      )
    })
  }catch(error){
    console.log(error)
  }
}
  return(  
    
    <View>
      <Modal transparent visible={visible} animationType='fade'>
        {modalContent == 'Add Plan' ? <AddPlan setVisible={setVisible} day={props.route.params.chosenDay.item.day}/> : null}
      </Modal>

      {foodList()}
        <Button title='Add Plan' onPress={() => {setVisible(true); setModalContent('Add Plan')}}/>
        <Button title='go back' onPress={() => {props.navigation.goBack()}}/>
    </View> 
  )
}





  const styles = StyleSheet.create({
    container: {
      // flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
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