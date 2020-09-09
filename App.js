import React from 'react';
import MainPage from "./pages/MainPage";
import data from "./data.json";

export default function App() {
  console.disableYellowBox = true;
  //return 구문 밖에서는 슬래시 두개 방식으로 주석

  return ( <MainPage data={data}/> );
}

