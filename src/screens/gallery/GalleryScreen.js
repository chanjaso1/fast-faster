import React, {useState, useEffect} from 'react';
import { Button,Image, Alert, View , Text, StyleSheet, TouchableOpacity} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useIsFocused } from '@react-navigation/native';
import { addImage, getGallery, getPerson } from '../../database/Firebase';
import { Ionicons } from '@expo/vector-icons';






const galleryScreen = () => {
    const [gallery, setGallery] = useState([]);
    const isFocused = useIsFocused()


    useEffect(() => {
      // getPerson()

      getGallery().then(function(result ) {
        setGallery(result)
      })
    }, [isFocused])

    //based on: https://reactnative.dev/docs/alert
    const alertCheckCameraPermissions = () => {
        Alert.alert(
            "Permissions to access the camera?",       //The title of the pop-up
            '',                                       //No message
            [
                {   
                  text: "Cancel",                   //Close the pop-up if cancel is clicked
                  style: "cancel"
                },
                { text: "OK",                       //Open the camera
                    onPress: camera
                }
              ]
        )
    }

        //based on: https://reactnative.dev/docs/alert
        const alertCheckImagePickerPermissions = () => {
          Alert.alert(
              "Permissions to access the media library?",       //The title of the pop-up
              '',                                           //No message
              [
                  {   
                    text: "Cancel",                   //Close the pop-up if cancel is clicked
                    style: "cancel"
                  },
                  { text: "OK",                       //Open the device's gallery
                      onPress: pickImage
                  }
                ]
          )
      }

    const layout = () => {

      let count = 0
      return gallery.map(image => {
          return (<Image key={image.uri} source={{ uri: image.uri }} style={{ width: "33%", height: "25%" }} />);

      })
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
    
        if (!result.cancelled) {
          addImage(result)
          getGallery().then(function(result ) {setGallery(result)})
          console.log(result.uri, " was added to the DB")
        }
      };

      const camera = async () => {
        let result = await ImagePicker.launchCameraAsync()
      }
    
      return (
    
        <View key='Gallery' style={{ flex: 1, flexDirection:'row', flexWrap:'wrap'}}>
          {layout()}
          <TouchableOpacity key={'Add a picture'} onPress={alertCheckImagePickerPermissions} style={styles.add}>
            <Text style={styles.icon}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity key={'Camera'} onPress={alertCheckCameraPermissions} style={styles.camera}>
          <Text style={styles.icon}>C</Text>
          </TouchableOpacity>
          
        </View>
    

      );
}

const styles = StyleSheet.create({ 
  //based on: https://snack.expo.dev/@ajmalpkc/floating-action-button-with-flatlist
  add: { 
    position: 'absolute', 
    width: 56, 
    height: 56, 
    alignItems: 'center', 
    justifyContent: 'center', 
    right: 20, 
    bottom: 20, 
    backgroundColor: '#2ecc71', 
    borderRadius: 30, 
    elevation: 8 
    }, 
    icon: { 
      fontSize: 40, 
      color: 'white' 
    },
    camera: { 
      position: 'absolute', 
      width: 56, 
      height: 56, 
      alignItems: 'center', 
      justifyContent: 'center', 
      right: 20, 
      bottom: 100, 
      backgroundColor: '#2ecc71', 
      borderRadius: 30, 
      elevation: 8 
      }
});

export default galleryScreen;