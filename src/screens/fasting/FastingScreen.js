import React, { useState } from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

import FlatButton from '../../../components/Button';
import Timer from '../../../components/Timer';
// import { TimePicker } from '../../../components/TimePicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
// import 'moment-timezone';
  
  

export default function fastingScreen() {
    const [mounted, setMounted] = useState(true);
    const [progress, setProgress] = useState(0);
    const [timer, turnTimerOn] = useState(false);
    const [endDate, setEndDate] = useState('')
    const [startDate, setStartDate] = useState('')
    

    const [visible, setVisible] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (newDate) => {
        // 'Oct 9 2021 21:35:00'
    //   console.warn("A date has been picked: ", newDate);
    //   moment.locale('en');
    //   moment.locale('en')
      console.log(moment(newDate).format('MMM D YYYY H:mm:ss'))
      setEndDate(moment(newDate).format('MMM D YYYY H:mm:ss'))
      setStartDate(moment().format('MMM D YYYY H:mm:ss'))
      turnTimerOn(true)
      hideDatePicker();
      
    };
  



    return (
        <View style={style.container}>
            {timer == true ? <Timer target={endDate} start={startDate} isMounted={mounted} setProgressBar={setProgress}/> : null}
            <CircularProgress style={style.circle}
                radius={150}
                value={progress % 101}
                textColor='#222'
                fontSize={20}
                valueSuffix={"%"}
                inActiveStroke={'#2ecc71'}
                inActiveStrokeOpacity={0.2}
                duration={2.0}
            />
            <StatusBar style='auto'/>
            
      
            <FlatButton text="Start" onPress={() => {showDatePicker()}}  />
            {/* <FlatButton text="Start" onPress={() => {
                turnTimerOn(timerOn => !timerOn)
                setMounted(mounted => !mounted);
                setModalContent("SetFastTime");
                setVisible(true);
                }}  /> */}
            
            
            
            <FlatButton text="End" onPress={() => {turnTimerOn(false); setMounted(false)}}   />
            {/* based on: https://github.com/mmazzarolo/react-native-modal-datetime-picker */}
            <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="datetime"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            is24Hour={true}
            />
        </View>
     
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    circle:{
        width:90,
        height:90,
        borderRadius:180/2,
        backgroundColor:'#2ebb'
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },

    modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 20,
        elevation: 20
    },

    header: {
        width: '100%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'left'
    },
    label : {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.75)'
    },

    timerLabel : {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.5)'
    },
})
