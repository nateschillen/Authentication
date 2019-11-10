import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCtucDEpMtr7kgDvdHAaBLzAlTWxXsLaTY",
  authDomain: "healthtracker-fb4b2.firebaseapp.com",
  databaseURL: "https://healthtracker-fb4b2.firebaseio.com",
  projectId: "healthtracker-fb4b2",
  storageBucket: "healthtracker-fb4b2.appspot.com",
  messagingSenderId: "636344526414",
  appId: "1:636344526414:web:a4c13ce52555c15752851f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
