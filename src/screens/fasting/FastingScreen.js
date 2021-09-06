import React, { useState } from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Modal} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

import FlatButton from '../../../shared/Button';
import ModalStyle from '../../styles/ModalStyle'; 
import SetFastTime, {ChangeFastTime} from '../../../shared/PopUp';

export default function fastingScreen() {
    const [value, setValue] = useState(50);
    const [visible, setVisible] = useState(false);
    const [modalContent, setModalContent] = useState('');

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
            
            <Modal transparent visible={visible} animationType='fade'>
                <View style={ModalStyle.modalBackground}>
                    <View style={ModalStyle.modalContainer}>
                        <View style={ModalStyle.header}>
                            {modalContent == 'SetFastTime' ? <SetFastTime/> : null}
                            {modalContent == 'ChangeFastTime' ? <ChangeFastTime/> : null}
                        </View>
                        <FlatButton text='cancel' onPress={() => (setVisible(false))} cancel={true}/>
                    </View> 
                </View>
            </Modal>
            <FlatButton text="Start" onPress={() => {setVisible(true); setModalContent('SetFastTime'); }}  />
            
            
            
            <FlatButton text="Change Fast" onPress={() => {setVisible(true); setModalContent('ChangeFastTime') }}   />
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
    }
})
