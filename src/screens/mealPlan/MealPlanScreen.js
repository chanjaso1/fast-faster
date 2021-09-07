import * as React from 'react';
import { useState } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import buttonText, { RoundButton } from '../../../components/Button';

const mealPlanScreen = () => {
    const [meals, setMeals] = useState([
        {day: 'Monday', breakfast: 'cereal', lunch: '', dinner: ''},
        {day: 'Tuesday', breakfast: '', lunch: 'sandwich', dinner: ''},
        {day: 'Wednesday', breakfast: 'coffee', lunch: '', dinner: 'fried rice'},
        {day: 'Thursday', breakfast: 'cereal', lunch: '', dinner: 'tortillas'},
        {day: 'Friday', breakfast: 'porridge', lunch: '', dinner: ''},
        {day: 'Saturday', breakfast: 'cereal', lunch: 'fish and chips', dinner: ''},
        {day: 'Sunday', breakfast: 'salad', lunch: '', dinner: 'fried chicken'},
    ]);


    const nothingMuch = () => {

    }

    return (
        <View style={{ flex: 0, paddingTop: 10, paddingHorizontal: 20, width: "100%", justifyContent:"center"}}>
            <ScrollView>
                {meals.map((item) => {
                    return(
                        <TouchableOpacity key={item.day} style={styles.item}>
                            {/* <RoundButton onPress={nothingMuch} alignItems= 'flex-end'/> */}
                            <Text style={styles.itemHeader}>
                                {item.day}
                                {"\n"}
                                {item.breakfast != '' ? <Text style={styles.itemContent}>{item.breakfast}{"\n"}</Text> : null}
                                {item.lunch != '' ? <Text style={styles.itemContent}>{item.lunch}{"\n"}</Text> : null}
                                {item.dinner != '' ? <Text style={styles.itemContent}>{item.dinner}{"\n"}</Text> : null}
                                {item.breakfast == '' && item.lunch == '' && item.dinner == '' ? 
                                    <Text style={styles.itemContent}>No Meals Planned{"\n"}</Text> :  null}
                            </Text>
                            {/* <RoundButton onPress={nothingMuch} alignItems= 'flex-end'/> */}
                        </TouchableOpacity>
                    );
                })
                }

            </ScrollView>
            <Text>Meal Planning!</Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    item : {
        marginTop: 20,
        padding: 20,
        backgroundColor: '#DDDDDD',
        width: '100%',
        justifyContent: 'flex-end',
        borderRadius: 20,
        elevation: 2
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
        width:"100%",
        height: 40,
        backgroundColor: '#DDDDDD',
        fontWeight: 'bold',
        color: 'rgba(0,0,0,0.75)',
        textAlignVertical: 'top',
        fontSize: 32,
        textTransform: 'capitalize'
    }
});

export default mealPlanScreen;