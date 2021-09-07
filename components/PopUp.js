import React, {useState} from 'react';
import { StyleSheet, View, Text } from "react-native";
import ModalStyle from "../src/styles/ModalStyle";
// import DateTimePicker from '@react-native-community/datetimepicker';
// import DatePicker from 'react-native-date-picker'

const style = StyleSheet.create({
    container:{
        flex: 1,
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
