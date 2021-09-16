import * as React from 'react';
import { useState } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import { DisplayMealPlan } from '../../../components/PopUp';
import ModalStyle from '../../styles/ModalStyle';
import FlatButton from '../../../components/Button';
// import Pop
// import Card from '../../../components/Card';

const mealPlanScreen = () => {
    const [meals, setMeals] = useState([
        {day: 'Monday', meals: [{name: 'cereal', checked: false}, {name: 'rth', checked: true}]},
        // {day: 'Tuesday', meal: 'sandwich', checked: false},
        // {day: 'Wednesday', meal: 'coffee', checked: false},
        // {day: 'Thursday', meal: 'cereal', checked: false},
        // {day: 'Friday', meal: 'porridge', checked: false},
        // {day: 'Saturday', meal: 'cereal', checked: false},
        // {day: 'Sunday', meal: 'salad', checked: false},
    ]);


    const [visible, setVisible] = useState(false);
    const [meal, setMeal] = useState(null);


    const nothingMuch = () => {

    }

    return (
        <View style={{ paddingTop: 10, paddingHorizontal: 20, width: "100%", justifyContent:"center"}}>
            <Modal transparent visible={visible} animationType='fade'>
                <View style={ModalStyle.modalBackground}>
                    <View style={ModalStyle.modalContainer}>
                        <DisplayMealPlan mealPlan={meal}/>
                        {/* {modalContent == 'SetFastTime' ? <SetFastTime/> : null} */}
                        <FlatButton text='cancel' onPress={() => (setVisible(false))} cancel={true}/>
                    </View> 
                </View>
            </Modal>

            <ScrollView>
                {meals.map((item) => {
                    return(
                        // <Card>
                            <TouchableOpacity key={item.day} style={styles.item} onPress={() => {setVisible(true); setMeal(item)}}>
                                {/* <RoundButton onPress={nothingMuch} alignItems= 'flex-end'/> */}
                                
                            
                                    <Text style={styles.itemHeader}>
                                        {item.day} </Text>
                                        {/* {"\n"} */}
                                        {item.meals.em ?? <Text style={styles.itemContent}></Text>}
                                        {/* {item.meals} */}
                                        {/* {item.meals[0].name = cereal} */}
                           
                                {/* <RoundButton onPress={nothingMuch} alignItems= 'flex-end'/> */}
                            </TouchableOpacity>
                   
                    );
                })
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create ({
    item : {
        marginTop: 20,
        padding: 20,
        backgroundColor: '#DDDDDD',
        width: '100%',
        // justifyContent: 'flex-',
        borderRadius: 20,
        elevation: 2,
        // height: 250
    },
    itemContent: {
        color: 'rgba(0,0,0,0.75)',
        fontSize: 22,
        fontWeight: 'bold',
        textAlignVertical: 'top',
        textTransform: 'capitalize', 
        paddingTop: 5
    },

    selectedItem: {
        marginTop: 24,
        padding: 30,
        backgroundColor: '#2ecc71',
        fontSize: 24
    }, 
    itemHeader: {
        // width:"100%",
        // height: ,
        backgroundColor: '#DDDDDD',
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.75)',
        textAlignVertical: 'top',
        fontSize: 32,
        textTransform: 'capitalize'
    }
});

export default mealPlanScreen;