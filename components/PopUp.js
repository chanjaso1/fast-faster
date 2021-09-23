import React, {useState, useCallback} from 'react';
import { StyleSheet, View, Text, CheckBox, TextInput } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
// import { TextInput } from 'react-native-paper';
import ModalStyle from "../src/styles/ModalStyle";
import {CancelButton, FlatButton} from './Button';
import { SubmitButton } from './Button';
import { addMeal, addToDB } from '../src/database/Firebase';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import DatePicker from 'react-native-date-picker'

const style = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center'    
    },
});



export default function SetFastTime({setVisible,}) {
    
};

export function AddPlan({setVisible, day}) {
    const [timeToEat, setTime] = useState('')
    const [name, setName] = useState('')
    const [checked, setChecked] = useState(false)
    // const [check]

    const handleSubmit = (timeToEat, name, checked) => {

        let item = {
            name: name,
            checked: checked,
            day: day,
            timeToEat: timeToEat
        }
        addMeal(item)
        
    }

    return (
    <View style={ModalStyle.modalBackground}>
        <View style={ModalStyle.modalContainer}>
            <Text style={ModalStyle.header}>Add a New Meal</Text>
            <ScrollView>
                <View style={{flex: 1}}>
                <Text>Meal Name</Text>
                <TextInput
                    placeholder='Meal'
                    value={name}
                    onChangeText={name => setName(name)}
                    style={styles.input}
                />
                <Text>Time</Text>
                <TextInput
                    placeholder='e.g. 14:02:31'
                    value={timeToEat}
                    onChangeText={timeToEat => setTime(timeToEat)}
                    style={styles.input}
                />
                <View style={{flexDirection:'row',  alignItems: "center", justifyContent: 'center'}}>
                <Text style={{fontSize: 15, color: 'rgba(0,0,0,0.75)'}}>Eaten?</Text>
                <CheckBox value={checked} onValueChange={() => {setChecked(!checked)}}/>
                </View>
                {/* <DatePicker date={date} onDateChange={setDate} /> */}
                </View>
            </ScrollView>
                <SubmitButton text='Done' onPress={() => {setVisible(false); handleSubmit(timeToEat, name, checked)}}/>
                <CancelButton  text='cancel' onPress={() => {setVisible(false); addToDB()}} />
        </View> 
    </View>


        
    );
};


styles = StyleSheet.create({
    input: {
        width: 200,
        padding: 5,
        margin: 10,
        borderWidth: 1, 
        borderColor:"grey"
    }


})