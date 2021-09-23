import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Text, CheckBox, Button, Modal, LogBox } from 'react-native'
import { useIsFocused } from '@react-navigation/native';
import {deleteMeal, queryDay, updateMeal} from './../../database/Firebase'
import ModalStyle from '../../styles/ModalStyle'
import {AddPlan} from '../../../components/PopUp';

export default function MealScreen(props) {

  const [visible, setVisible] = useState(false)
  const [modalContent, setModalContent] = useState('')
  const [currentDay, setCurrentDay] = useState(props.route.params.chosenDay.item.day)

  const [plan, setPlan] = useState([])
  const isFocused = useIsFocused()
  useEffect(() => {
    queryDay(currentDay).then(function(result) {setPlan(result)})

  }, [isFocused])

// Called when the user checks and unchecks a box.
const handleTick = ((meal) => {             //Find the meal.
  var newPlan = JSON.parse(JSON.stringify(plan))
  newPlan.map(aMeal => {
      if(aMeal.timeToEat == meal.timeToEat) {//Check or uncheck.
          aMeal.checked = !aMeal.checked
          updateMeal(aMeal)                 //Send the updated information to the database.
      }
  })
  setPlan(newPlan)                          //Update the state to re-render it.
})

//Called when a meal is deleted
const handleDelete = ((meal) => {           //Recreate the plan without the meal.
  var newPlan = []
  plan.map(aMeal => {
    if(aMeal.timeToEat != meal.timeToEat){  
        newPlan.push(aMeal)
    }
  })
  setPlan(newPlan)                          //Update the state to re-render it.
  deleteMeal(meal)                          //Delete the meal from the database.
})


//Return a list of meals that contains its name, a checkbox and a delete button.
const foodList = () => {
  try{
    return plan.map((meal) => {
      let key = `${meal.name}` + `${meal.timeToEat}`
      return(
          <View style={styles.container} key={key}>
          <Text style={styles.text}>{meal.name}</Text>
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
        <Button title='Add Plan' onPress={() => {setVisible(true); setModalContent('Add Plan'); 
        }}/>
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

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);