import React from 'react';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  console.disableYellowBox = true;

  return ( 
    <>
      <StatusBar style="black" />
      <MainPage/> 
    </>);
}