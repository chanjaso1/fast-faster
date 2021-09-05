import React, { useState } from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, Button , Modal} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

import FlatButton, {RoundButton} from '../../../shared/button';

export default function fastingScreen() {
    const [value, setValue] = useState(50);

    const ClickHandler = () => {
        setValue(value + 2);

    }

    return (
        <View style={style.container}>

            <CircularProgress style={style.circle}
                radius={150}
                value={value % 101}
                textColor='#222'
                fontSize={20}
                valueSuffix={"%"}
                inActiveStroke={'#2ecc71'}
                inActiveStrokeOpacity={0.2}
                duration={2.0}
            />
            <StatusBar style='auto'/>
            <FlatButton text="Start" onPress={ClickHandler}  />
            <FlatButton text="Change Fast" onPress={ClickHandler}  />
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
    }
})
