import * as React from 'react';
import { Text, View, Switch, Button, StyleSheet } from 'react-native';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';
import { useState } from 'react/cjs/react.development';
// import { Button } from 'react-native-paper';

const NotificationsScreen = () => {
    const [all, setAll] = useState(false)
    const [oneHourTimer, setOneHourTimer] = useState(false)
    const [eat, setEat] = useState(false)
    const [finished, setFinished] = useState(false)
    const [halfway, setHalfway] = useState(false)
    const toggleAll = () => {
        setAll(!all)
        setOneHourTimer(!all)
        setEat(!all)
        setFinished(!all)
        setHalfway(!all)
    }
    
    return (

        <View style={styles.container}>
        <View style={styles.row}>
            <Text style={styles.text}> Notifications</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#74F588" }}
                thumbColor={"#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => {toggleAll(all)}}
                value={all}
            />
        </View>
        <View style={styles.row}>
            <Text style={styles.text}>Last Hour</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#74F588" }}
                thumbColor={"#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => {setOneHourTimer(!oneHourTimer)}}
                value={oneHourTimer}
            />
        </View>
        <View style={styles.row}>
            <Text style={styles.text}>Halfway</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#74F588" }}
                thumbColor={"#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => {setHalfway(!halfway)}}
                value={halfway}
            />
        </View>
        <View style={styles.row}>
            <Text style={styles.text}>Finished Fasting</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#74F588" }}
                thumbColor={"#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => {setFinished(!finished)}}
                value={finished}
            />
        </View>
        <View style={styles.row}>
            <Text style={styles.text}>Time to Eat Meal</Text>
            <Switch 
                trackColor={{ false: "#767577", true: "#74F588" }}
                thumbColor={"#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => {setEat(!eat)}}
                value={eat}
            />
        </View>
        </View> 
        
    );
}


styles = StyleSheet.create({
    container : {
        flex: .8, 
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    row : {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'flex-end', 
        flexDirection: 'row' 
    },
    text : {
        color: 'rgba(0,0,0,0.75)',
        fontSize: 22,
        fontWeight: 'bold',
        textAlignVertical: 'top',
        textTransform: 'capitalize', 
        paddingRight: 20,
        justifyContent: 'flex-start'
    },
    // toggle : {   
    //     alignItems: 'flex-end'
    // }
})
export default NotificationsScreen;