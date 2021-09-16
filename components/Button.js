import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';

export default function FlatButton({text, onPress, cancel}) {
    var buttonStyle, textStyle;
    if(!cancel) {
        buttonStyle = styles.flatButton;
        textStyle = styles.buttonText;
    }else{
        buttonStyle = styles.cancelButton;
        textStyle = styles.cancelButtonText;
    }

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={buttonStyle}>
                <Text style={textStyle}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export function RoundButton({onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.roundButton}>
           <Text style={styles.roundButtonText}>+</Text>
        </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    flatButton: {
        width: 275,
        height: 55,
        marginTop: 15,
        borderRadius:10,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#74F588',
        borderRadius:180/2,
        elevation: 2
    },
    roundButton: {
        width: 25,
        height: 25,
        backgroundColor: '#C4C4C4',
        borderRadius:180/2,
        elevation: 2
    },
    cancelButton: {
        width: 275,
        height: 55,
        marginTop: 15,
        borderRadius:10,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#DDDDDD',
        borderRadius:180/2,
        elevation: 2
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        fontSize: 22,
        textAlign: 'center'  
    },
    roundButtonText: {
        color: '#6D6D6D',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        fontSize: 22,
        textAlign: 'center',
        marginTop: -2
    },
    cancelButtonText: {
        color: '#6D6D6D',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        fontSize: 22,
        textAlign: 'center'  
    }
})