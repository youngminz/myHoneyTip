import firebase from "firebase/compat/app";

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/compat/auth";
import "firebase/compat/database";
//import "firebase/compat/firestore";
//import "firebase/compat/functions";
import "firebase/compat/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
    apiKey: "AIzaSyC_xrsMdcAoDnI5u3XL2jYYYg8FqN1zsWk",
    authDomain: "sparta-myhoneytip.firebaseapp.com",
    databaseURL: "https://sparta-myhoneytip.firebaseio.com",
    projectId: "sparta-myhoneytip",
    storageBucket: "sparta-myhoneytip.appspot.com",
    messagingSenderId: "580760180650",
    appId: "1:580760180650:web:07fba7be282f520448bdd3",
    measurementId: "G-337BQFC5SQ"
};

//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()