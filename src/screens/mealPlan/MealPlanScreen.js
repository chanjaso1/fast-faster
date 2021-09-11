import * as React from 'react';
import { useState } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import buttonText, { RoundButton } from '../../../components/Button';
import Card from '../../../components/Card';

const mealPlanScreen = () => {
    const [meals, setMeals] = useState([
        {day: 'Monday', breakfast: 'cereal', lunch: '', dinner: ''},
        {day: 'Tuesday', breakfast: '', lunch: 'sandwich', dinner: ''},
        {day: 'Wednesday', breakfast: 'coffee', lunch: '', dinner: 'fried rice'},
        {day: 'Thursday', breakfast: 'cereal', lunch: '', dinner: 'tortillas'},
        {day: 'Friday', breakfast: 'porridge', lunch: '', dinner: ''},
        {day: 'Saturday', breakfast: 'cereal', lunch: 'fish and chips', dinner: ''},
        {day: 'Sunday', breakfast: 'salad', lunch: 'sandwich', dinner: 'fried chicken'},
    ]);


    const nothingMuch = () => {

    }

    return (
        <View style={{ paddingTop: 10, paddingHorizontal: 20, width: "100%", justifyContent:"center"}}>
            <ScrollView>
                {meals.map((item) => {
                    return(
                        // <Card>
                            <TouchableOpacity key={item.day} style={styles.item}>
                                {/* <RoundButton onPress={nothingMuch} alignItems= 'flex-end'/> */}
                            
                                    <Text style={styles.itemHeader}>
                                        {item.day} </Text>
                                        {/* {"\n"} */}
                                        {item.breakfast != '' ? <Text style={styles.itemContent}> {item.breakfast}</Text> : null}
                                        {item.lunch != '' ? <Text style={styles.itemContent}> {item.lunch}</Text> : null}
                                        {item.dinner != '' ? <Text style={styles.itemContent}> {item.dinner}</Text> : null}

                                        {/* <Text style={styles.itemContent}> {item.breakfast} </Text> */}
                                        {/* <Text style={styles.itemContent}> {item.lunch} </Text>
                                        <Text style={styles.itemContent}> {item.dinner} </Text> */}
                                        
                                        {item.breakfast == '' && item.lunch == '' && item.dinner == '' ? 
                                            <Text style={styles.itemContent}>No Meals Planned{"\n"}</Text> :  null}

                                    
                            
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