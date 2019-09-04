import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDvpGVFk30U3lhefZX-mGCjvQiXSddH25s",
  authDomain: "authentication-c398a.firebaseapp.com",
  databaseURL: "https://authentication-c398a.firebaseio.com",
  projectId: "authentication-c398a",
  storageBucket: "",
  messagingSenderId: "815408671129",
  appId: "1:815408671129:web:220f040305c6f8bae6cb08"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
