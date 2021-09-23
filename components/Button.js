import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';

export default function FlatButton({text, onPress}) {
    return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.flatButton}>
            <Text style={styles.buttonText}>{text}</Text>
        </View>
    </TouchableOpacity>
    )
}

export function SubmitButton({text, onPress}) {
    return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.submitButton}>
            <Text style={styles.submitText}>{text}</Text>
        </View>
    </TouchableOpacity>
    )
}

export function CancelButton({text, onPress}) {
    return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>{text}</Text>
        </View>
    </TouchableOpacity>
    )
}

export function DeleteButton({onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.deleteButton}>
           <Text style={styles.deleteButtonText}>x</Text>
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
        borderRadius:90,
        elevation: 2
    },
    submitButton: {
        width: "50%",
        height: 30,
        marginTop: 15,
        borderRadius:10,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#74F588',
        borderRadius:90,
        elevation: 2
    },
    deleteButton: {
        width: 25,
        height: 25,
        // left: 25,
        backgroundColor: '#C4C4C4',
        borderRadius:90,
        elevation: 2
    },
    cancelButton: {
        width: "50%",
        height: 30,
        marginTop: 15,
        borderRadius:10,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#DDDDDD',
        borderRadius:90,
        elevation: 2
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        fontSize: 22,
        textAlign: 'center'  
    },
    deleteButtonText: {
        color: '#6D6D6D',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        // left: 15,
        fontSize: 22,
        textAlign: 'center',
        marginTop: -2
    },
    cancelButtonText: {
        color: '#6D6D6D',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        fontSize: 18,
        textAlign: 'center',
        justifyContent: 'center'  ,
        marginTop: -10
    },
    submitText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        fontSize: 18,
        textAlign: 'center',
        justifyContent: 'center'  ,
        marginTop: -10
    }
})