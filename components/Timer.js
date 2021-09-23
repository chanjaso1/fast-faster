import React, {useState, useEffect, useMemo} from "react";
import { View, Text, StyleSheet } from "react-native";

const Timer = ({target, start,isMounted, setProgressBar}) => {
    const [title, setTitle] = useState('');
    const [time, setTime] = useState('...');
    const [endDate, setEndDate] = useState('');
    const [update, setUpdate] = useState(1000);

    const [startDate, setStartDate] = useState('')

    useEffect  (() => {
        isMounted = true;
        setUpdate(1000)
        setEndDate(target)
        setStartDate(start)
        countDown()
        return() => {   //clean up states
            setTitle('')
            setTime('...')
            setEndDate('')
            setStartDate('')
            setUpdate(9999999999999)
            isMounted = false;
        };

        function countDown() {
            setTimeout(() => {
                if(isMounted){
                    let count = setInterval(() => {
                        setTitle('Time left');
                        let target = new Date(endDate).getTime()//get the target date
                        let current = new Date().getTime();//get the current time
                        let begin = new Date(start).getTime() //get the initial date (when the timer started)
                        let timeToFinish = target - current;   //get the current progress


                        let days = Math.floor(timeToFinish / (1000 * 3600 * 24))
                        let hours = Math.floor((timeToFinish % (1000 * 3600 * 24)) / (1000 * 3600)) + (days * 24)  
                        let minutes = Math.floor( (timeToFinish % (1000 * 3600)) / (1000 * 60)  );
                        let seconds = Math.floor( (timeToFinish % (1000 * 60)) / (1000));
            
                        if(seconds != "NaN") {  
                            setProgressBar((100 * (1 - (timeToFinish)/(target - begin))))   //set the progress bar
                            let stringHours = hours < 10 ? `0${hours}` : hours 
                            let stringMinutes = minutes < 10 ? `0${minutes}` : minutes 
                            let stringSeconds = seconds < 10 ? `0${seconds}` : seconds  

                            setTime(`${stringHours}:${stringMinutes}:${stringSeconds}`); //set the time
                        }
            
                        if(timeToFinish < 0) {  //when the timer finishes
                            setTitle("You're done!");
                            setProgressBar(100)
                            setTime('');
                            clearInterval(count);
                            
                        }
                    }, update)
                }else {
                    console.log("aborted update on unmounted component"); 
                }
            }, 3000); //wait a few seconds before another attempt
        }
    }, [endDate]);


    return (
        <View style={{justifyContent:'center', alignItems:'center'}}>
        <Text style={styles.label}>{title}</Text>
        <Text style={styles.timerLabel}> {time} </Text>
        </View>
    );
}

export default Timer
   
const styles = StyleSheet.create ({
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

});
