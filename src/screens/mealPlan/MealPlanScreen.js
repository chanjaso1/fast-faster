import * as React from 'react';
import { useState } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Modal, FlatList} from 'react-native';
import { DisplayMealPlan } from '../../../components/PopUp';
import ModalStyle from '../../styles/ModalStyle';
import FlatButton from '../../../components/Button';

const mealPlanScreen = () => {
    const [plan, setMeals] = useState([
        {day: 'Monday', meals: [
            {name: 'Cereal', checked: false, timeToEat: '1 08:25:00'},
            {name: 'Tacos', checked: false, timeToEat:  '1 12:35:00'},
            {name: 'Fried Chicken', checked: false, timeToEat: '1 16:42:00'},
        ]},
        {day: 'Tuesday', meals: [
            {name: 'Cereal', checked: false, timeToEat: '2 08:25:00'},
            {name: 'Tacos', checked: false, timeToEat:  '2 12:35:00'},
            {name: 'Fried Chicken', checked: false, timeToEat: '2 16:42:00'},
        ]},
        {day: 'Wednesday', meals: [
            {name: 'Cereal', checked: false, timeToEat: '3 08:25:00'},
            {name: 'Tacos', checked: false, timeToEat:  '3 12:35:00'},
            {name: 'Fried Chicken', checked: false, timeToEat: '3 16:42:00'},
        ]},
        {day: 'Thursday', meals: [
            {name: 'Cereal', checked: false, timeToEat: '4 08:25:00'},
            {name: 'Tacos', checked: false, timeToEat:  '4 12:35:00'},
            {name: 'Fried Chicken', checked: false, timeToEat: '4 16:42:00'},
        ]},
        {day: 'Friday', meals: [
            {name: 'Cereal', checked: false, timeToEat: '5 08:25:00'},
            {name: 'Tacos', checked: false, timeToEat:  '5 12:35:00'},
            {name: 'Fried Chicken', checked: false, timeToEat: '5 16:42:00'},
        ]},
        {day: 'Saturday', meals: [
            {name: 'Cereal', checked: false, timeToEat: '6 08:25:00'},
            {name: 'Tacos', checked: false, timeToEat:  '6 12:35:00'},
            {name: 'Fried Chicken', checked: false, timeToEat: '6 16:42:00'},
        ]},
        {day: 'Sunday', meals: [
            {name: 'Cereal', checked: false, timeToEat: '7 08:25:00'},
            {name: 'Tacos', checked: false, timeToEat:  '7 12:35:00'},
            {name: 'Fried Chicken', checked: false, timeToEat: '7 16:42:00'},
        ]},
        
    ]);


    const [visible, setVisible] = useState(false);
    const [selectedDay, setSelectedDay] = useState(null);

    function mealDay(){

        const renderFood = (food) => {
            // console.log(selectedDay)
            return plan.map(aDay => {
                if(aDay.day == food.item.day){  //get the correct day
                    return aDay.meals.map(meal => {
                        return <Text key={meal.timeToEat} style={styles.itemContent}>{meal.name}</Text>
                    })
                }
            })
        }
    
        return (
            <View>
                <FlatList 
                data={plan}
                extraData={plan}
                keyExtractor={(item) => item.day}
                renderItem={item => 
                    <TouchableOpacity style={styles.item} onPress={() => {setVisible(true); setSelectedDay(item.item.day)}}>
                        <Text style={styles.itemHeader}> {item.item.day} </Text>
                        {renderFood(item)}
                    </TouchableOpacity>
                }/>
            </View>
        )
    }
        
    return (
        <View style={{ paddingTop: 10, paddingHorizontal: 20, width: "100%", justifyContent:"center"}}>
            <Modal transparent visible={visible} animationType='fade'>
                <View style={ModalStyle.modalBackground}>
                    <View style={ModalStyle.modalContainer}>
                        <DisplayMealPlan mealPlan={plan} onMealPlanChange={setMeals} day={selectedDay}/>
                        <FlatButton text='cancel' onPress={() => (setVisible(false))} cancel={true}/>
                    </View> 
                </View>
            </Modal>

           
            {mealDay()}
            
           
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
        paddingTop: 5,
        paddingLeft: 20
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