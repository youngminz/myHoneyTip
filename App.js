import React,{useState,useEffect} from 'react';
import {View,Text} from 'react-native';
import MainPage from "./pages/MainPage";
import Loading from "./components/Loading";
import data from "./data.json";

export default function App() {

  console.disableYellowBox = true;
  //return 구문 밖에서는 슬래시 두개 방식으로 주석

  const [state,setState] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setState(data)
      setReady(true)
    },5000)

  },[])



  return ready ?  ( <MainPage data={state}/> ) : (<Loading/>);
}

