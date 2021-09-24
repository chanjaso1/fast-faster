import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Text, CheckBox, Button, Modal, LogBox, Alert} from 'react-native'
import { useIsFocused } from '@react-navigation/native';
import {deleteMeal, queryDay, updateMeal} from './../../database/Firebase'
import ModalStyle from '../../styles/ModalStyle'
import {AddPlan} from '../../../components/PopUp';
import { DeleteButton, SubmitButton, CancelButton } from '../../../components/Button';

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


//based on: https://reactnative.dev/docs/alert
const alertDelete = (meal) => {
  Alert.alert(
      "Are you sure you want to delete?",   //The title of the pop-up
      '',                                           //No message
      [
          {   
            text: "Cancel",                         //Close the pop-up if cancel is clicked
            style: "cancel"
          },
          { text: "OK",                             //Open the device's gallery
              onPress: () => handleDelete(meal)
          }
        ]
    )
}

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
          <View style={styles.row} key={key}>
          <Text style={styles.text}>{meal.name}</Text>
          <CheckBox style={ModalStyle.CheckBox, {paddingBottom:20}} 
            value={meal.checked}
            onValueChange={() => {handleTick(meal)}}
          />
          {/* <Button title='delete' onPress={handleDelete(meal)}/> */}
          <DeleteButton onPress={() => {alertDelete(meal)}}/>
        </View>
        
      )
    })
  }catch(error){
    console.log(error)
  }
}
  return(  
    
    <View style={styles.container}>
      <Modal transparent visible={visible} animationType='fade'>
        {modalContent == 'Add Plan' ? <AddPlan setVisible={setVisible} day={props.route.params.chosenDay.item.day}/> : null}
      </Modal>

      {foodList()}
      <SubmitButton style={{justifyContent:'row', alignItems:'row'}} text=' Add Plan'onPress={() => {setVisible(true); setModalContent('Add Plan')}}/>
      <CancelButton style={{justifyContent:'row'}} text=' Back ' onPress={() => {props.navigation.goBack() }}/>
    </View> 
  )
}

  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    row: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    text: {
      color: '#101010',
      fontSize: 24,
      fontWeight: 'bold',
      
      padding:15,
      paddingLeft:10
    },
    delete: {
      width: 30, 
      height: 30, 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: 'grey', 
      borderRadius: 30, 
      elevation: 8 
      }, 
  })

  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);