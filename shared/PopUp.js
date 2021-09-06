import { Modal } from "react-native";
import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from "react-native";
import ModalStyle from "../src/styles/ModalStyle";
import FlatButton from "./Button";


const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});



export default function SetFastTime() {
    return (
        <View style={style.container}>
            <Text style={ModalStyle.header}>Set the fast time </Text>
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
