import React, {useState, useEffect, useRef} from "react";
import { View, Text, StyleSheet } from "react-native";

const Timer = ({hours, isMounted}) => {
    const [title, setTitle] = useState('');
    const [time, setTime] = useState('...');

    useEffect  (() => {
        isMounted = true;
        countDown({hours})
        return() => {
            isMounted = false;
        };

        function countDown({hours}) {
            setTimeout(() => {
                if(isMounted){
                    let finish = new Date(); //get the current day
                    // finish.setHours(finish.get + {hours}); //add the fasting time period
                  // console.log(`${hours}`)
                    finish.setHours(finish.getHours() + `${hours}`);
                    // console.log(finish.getHours());
                    let testDate = new Date('Oct 9 2021 21:35:00').getTime();
                
                    let count = setInterval(() => {
                        setTitle('Time left');
            
                        let start = new Date().getTime();//get the current day
            
                        let timeToFinish = testDate - start;
                        //console.log(timeToFinish);
            
                        let hours = Math.floor(
                            (timeToFinish % (1000 * 3600 * 24)) / (1000 * 3600)
                        );
            
                        let minutes = Math.floor( (timeToFinish % (1000 * 3600)) / (1000 * 60)  );
            
                        let seconds = Math.floor( (timeToFinish % (1000 * 60)) / (1000));
                        // console.log(seconds);
                      //  hours = hours < 
                        // console.log(`${hours}:${minutes}:${seconds}`);
                        setTime(`${hours}:${minutes}:${seconds}`);
            
                        if(timeToFinish < 0) {
                            setTitle("You're done!");
                            setTime('');
                            clearInterval(count);
                        }
                    }, 1000)
                }else {
                    console.log("aborted update on unmounted component");
                }
            }, 3000); //wait a few seconds before another attempt
        }
    }, []);


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
