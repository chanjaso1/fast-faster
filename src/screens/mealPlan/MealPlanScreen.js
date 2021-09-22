import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, Button} from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { queryDays } from '../../database/Firebase';
import { useEffect } from 'react';

const mealPlanScreen = () => {
    const isFocused = useIsFocused()

    //parse the data into a formatted data structure
    const setPlan = (result) => {
        let newPlan = []
        days.forEach(aDay => {  //Add objects for each day into the meal plan.
            let item = {
                day : aDay,
                meals: []
            }
            newPlan.push(item)
        })
        result.forEach(item => {    //Add the relevant meals for each day.
            newPlan.forEach(aPlan => {
                if(aPlan.day == item.day){
                    aPlan.meals.push(item)
                }
            })
        })
        setMeals(newPlan)
    }


    useEffect(() => {
        queryDays().then(function(result){setPlan(result)}) //Read from the database if the screen is focused.
    }, [isFocused])
    const navi = useNavigation();

    const[loading, setLoading] = useState(false)
    const [days, setDays] = useState(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])

    const [plan, setMeals] = useState([
    ]);
    const [selectedDay, setSelectedDay] = useState(null);

    function mealDay(){
        const renderFood = (food) => {  //return all foods for a specific day
            return plan.map(aDay => {
                if(aDay.day == food.item.day){  //get the correct day
                    return aDay.meals.map(meal => {
                        return <Text key={meal.timeToEat} style={meal.checked == true ? styles.tickedItemContent : styles.itemContent}>{meal.name}</Text>
                    })
                }
            })
        }
        return (   
            <View>
                {/* This flat list will return all days and their meals */}
                <FlatList 
                data={plan}
                extraData={plan}
                keyExtractor={(item) => item.day}
                renderItem={item => 
                    // Clicking on the flat list item will navigate to the Meals screen for updating, adding and deleting meals.
                    <TouchableOpacity style={styles.item} onPress={() => {setSelectedDay(item.item.day); navi.navigate('Meals', {chosenDay: item})}}> 
                        <Text style={styles.itemHeader}> {item.item.day} </Text>
                        {renderFood(item)}
                    </TouchableOpacity>
                }/>
            </View>
        )
    }
        
    return (
        <View style={{ paddingTop: 10, paddingHorizontal: 20, width: "100%", justifyContent:"center"}}>
            {loading ? <Text>Loading</Text> : mealDay()}
        </View>
    );
}

const styles = StyleSheet.create ({
    item : {
        marginTop: 20,
        padding: 20,
        backgroundColor: '#DDDDDD',
        width: '100%',
        borderRadius: 20,
        elevation: 2,
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
    tickedItemContent: {
        color: 'rgba(0,0,0,0.75)',
        fontSize: 22,
        fontWeight: 'bold',
        textAlignVertical: 'top',
        textTransform: 'capitalize', 
        paddingTop: 5,
        paddingLeft: 20,
        textDecorationLine: 'line-through',
    },

    selectedItem: {
        marginTop: 24,
        padding: 30,
        backgroundColor: '#2ecc71',
        fontSize: 24
    }, 
    itemHeader: {
        backgroundColor: '#DDDDDD',
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.75)',
        textAlignVertical: 'top',
        fontSize: 32,
        textTransform: 'capitalize'
    }
});

export default mealPlanScreen;