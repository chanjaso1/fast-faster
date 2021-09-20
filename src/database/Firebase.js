// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as firebase from "firebase";
import "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlRPOm-N6KwRY8J-TFrA2F5sKe1BQN2IQ",
  authDomain: "ass2-de510.firebaseapp.com",
  projectId: "ass2-de510",
  storageBucket: "ass2-de510.appspot.com",
  messagingSenderId: "854043785229",
  appId: "1:854043785229:web:06b18a8dc79cd9e8fcfd44",
  measurementId: "G-YTWRJS2C64"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);

}
    
export const dbh = firebase.firestore();



export const queryDay = async (day) => {
    let items = []

    try {
    const aDay = await dbh.collection("Foods").where('day', '==', day).get().then(
      data => {
        if(data.empty){
          console.log("The data is empty")
        }else{
          data.forEach(doc => {
            let item = {
              id: doc.id,
              day: doc.data().day,
              name: doc.data().name,
              timeToEat: doc.data().timeToEat,
              checked: doc.data().checked
            }
            items.push(item)
            // console.log(item, 'yep')
          })
        }
      }
    );
    console.log('READING . . . .')
    return items
    } catch (error) {
      console.log(error)
    }
}

export const queryDays = async () => {
  let items = []
  try {
  const aDay = await dbh.collection("Foods").get().then(
    data => {
      if(data.empty){
        console.log("The data is empty")
      }else{
        data.forEach(doc => {
          let item = {
            id: doc.id,
            day: doc.data().day,
            name: doc.data().name,
            timeToEat: doc.data().timeToEat,
            checked: doc.data().checked
          }
          items.push(item)
        })
      }
    }
  );
  console.log('READING . . . .')
  return items
  } catch (error) {
    console.log(error)
  }
}

export const setPlans = async (plan) => {
  let items = []
  try {
    const newPlans = await dbh.collection("Foods").set({
          day: plan.day,
          timeToEat: plan.timeToEat,
          checked: plan.checked,
          name: plan.name
    })
    console.log("WRITING . . . .")
  } catch (error) {
    console.log(error)
  }
}