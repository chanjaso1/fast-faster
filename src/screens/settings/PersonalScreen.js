import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, TextInput, Alert  } from 'react-native';
import { CancelButton, SubmitButton } from '../../../components/Button';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { getPerson, setPerson } from '../../database/Firebase';

const PersonalScreen = () => {
    const isFocused = useIsFocused()
    useEffect(() => {
      getPerson().then(function(result) {
          setAll(result[0])
          setName(result[0].name)
          setHeight(result[0].height)
          setWeight(result[0].weight)
          setId(result[0].id)
        })
  
    }, [isFocused])


    const navi = useNavigation();
    const [name, setName] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [id, setId] = useState();

    //based on: https://reactnative.dev/docs/alert
    const alertCheck = () => {
        Alert.alert(
            "Allow Information to be saved?",       //The title of the pop-up
            '',                                     //No message
            [
                {   
                  text: "Cancel",                   //Close the pop-up if cancel is clicked
                  style: "cancel"
                },
                { text: "OK",                       //Update personal information in the database
                    onPress: () => {            
                    let person = {
                        name: name,
                        height: height,
                        weight: weight,
                        id: id
                    }
                    setPerson(person)               //Update person in database
                    setAll(person)                  //set state
                    } 
                }
              ]
        )
    }

    function setAll(person){                       
        setName(person.name)
        setHeight(person.height)
        setWeight(person.weight)
        setId(person.id)
    }

    //Display rows of text inputs to store personal information.
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.text}>Name          </Text>
                <TextInput
                    placeholder='e.g. Sarah'
                    value={name}
                    onChangeText={name => setName(name)}
                    style={styles.input}
                />
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Height (cm)</Text>
                <TextInput
                    placeholder='e.g. 152'
                    keyboardType= 'number-pad'
                    value={height}
                    onChangeText={height => setHeight(height)}
                    style={styles.input}
                />
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Weight (kg)</Text>
                <TextInput
                    placeholder='e.g. 53'
                    keyboardType= 'number-pad'
                    value={weight}
                    onChangeText={weight => setWeight(weight)}
                    style={styles.input}
                />
            </View>
            {/* <View style={styles.row}> */}
                <SubmitButton text=' Save' onPress={alertCheck}/>
                <CancelButton text=' Back ' onPress={() => {navi.goBack() }}/>
            {/* </View> */}
        </View>
    );
}

styles = StyleSheet.create({
    container : {
        flex: .8, 
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    row : {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'flex-end', 
        flexDirection: 'row' ,
        alignItems: 'center'
    },
    input: {
        width: 200,
        padding: 5,
        margin: 10,
        borderWidth: 1, 
        borderColor:"grey",
        justifyContent: 'flex-end'
    },
    text : {
        color: 'rgba(0,0,0,0.75)',
        fontSize: 22,
        fontWeight: 'bold',
        textAlignVertical: 'top',
        paddingRight: 20,
        justifyContent: 'flex-start'
    },
})

export default PersonalScreen;