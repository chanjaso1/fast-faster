import React, {useState, useCallback} from 'react';
import { StyleSheet, View, Text, CheckBox } from "react-native";
import ModalStyle from "../src/styles/ModalStyle";
// import DateTimePicker from '@react-native-community/datetimepicker';
// import DatePicker from 'react-native-date-picker'

const style = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center'    
    },
});



export default function SetFastTime() {
    const [date, setDate] = useState(new Date());
    return (
        <View style={style.container}>
            <Text style={ModalStyle.header}>Set the fast time </Text>
             {/* <DatePicker date={date} onDateChange={setDate} /> */}
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

  


export function DisplayMealPlan({mealPlan, onMealPlanChange, day}) {
    console.log(day)
    return(  
        <View style={style.container}>
            <Text style={ModalStyle.header}>{day}</Text>  
                {displayMeals(mealPlan, onMealPlanChange, day)}
        </View> 
    )    
}

function displayMeals(mealPlan, onMealPlanChange, day) {
    const handleBoxChange = useCallback((meal) => {
        var newPlan = JSON.parse(JSON.stringify(mealPlan))
        newPlan.map(aDay => {
            if(aDay.day == day){
                aDay.meals.map(aMeal => {
                    if(aMeal.timeToEat == meal.timeToEat) {
                        aMeal.checked = !aMeal.checked
                    }
                })
            }
        })
        {onMealPlanChange(newPlan)}
    }, [mealPlan])

    return mealPlan.map((aDay => {
        if(aDay.day == day){
            return aDay.meals.map(meal => {
                return (<View key={meal.timeToEat} style={ModalStyle.checkBox}>
                        <Text style={ModalStyle.content}> {meal.name}</Text> 
                         <CheckBox
                            value={meal.checked}
                            onValueChange={() => {handleBoxChange(meal)}}/>
                    </View>
                );
            })
        }
    }))
}



