import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { Button } from 'react-native-paper';
import FlatButton from '../../../components/Button';

const settingsScreen = () => {
    const navi = useNavigation();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <FlatButton text='Notifications' onPress={() => {navi.navigate("Notifications")}}/>
            <FlatButton text='Personal Information' onPress={() => {navi.navigate("Personal Information")}}/>
        </View>
    );
}

export default settingsScreen;