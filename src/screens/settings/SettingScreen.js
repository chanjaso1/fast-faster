import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { Button } from 'react-native-paper';

const settingsScreen = () => {
    const navi = useNavigation();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Here are the settings</Text>
            <Button title='Notifications' onPress={() => {navi.navigate("Notifications")}}/>
            <Button title='Personal Information' onPress={() => {navi.navigate("Personal Information")}}/>
        </View>
    );
}

export default settingsScreen;