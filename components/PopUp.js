import React, {useState} from 'react';
import { StyleSheet, View, Text, CheckBox } from "react-native";
import ModalStyle from "../src/styles/ModalStyle";
// import DateTimePicker from '@react-native-community/datetimepicker';
// import DatePicker from 'react-native-date-picker'

const style = StyleSheet.create({
    container:{
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});



export default function SetFastTime() {
    const [date, setDate] = useState(new Date());
    return (
        <View style={style.container}>
            <Text style={ModalStyle.header}>Set the fast time </Text>
             {/* <DatePicker date={date} onDateChange={setDate} /> */}
        </View>
        
    );
};

export  function ChangeFastTime() {
    return (
        <View style={style.container}>
            <Text style={ModalStyle.header}>Change the current fast time</Text>
        </View>
        
    );
};

const checkboxHandler = (value, index) => {
    const newValue = checkboxValue.map((checkbox, i) => {
     if (i !== index)
       return {
         ...checkbox,
         checked: false,
       }
     if (i === index) {
       const item = {
         ...checkbox,
         checked: !checkbox.checked,
       }
       return item
     }
    return checkbox
  })
  setCheckboxValue(newValue)
  }    


export function DisplayMealPlan({mealPlan}) {
    const [checked, setChecked] = useState(false);

    return (
        <View style={style.container}>
            {checked}

            <Text style={ModalStyle.header}>{mealPlan.day}</Text>
            {mealPlan.breakfast != '' ? <View style={ModalStyle.checkBox}>
                <Text style={ModalStyle.content}> {mealPlan.meal}</Text> 
                <CheckBox value={checked} onValueChange={setChecked} style={alignItems='center'}/>
            </View> :  null }
        
        </View>
    )
}
