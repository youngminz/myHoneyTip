import React, {useState,useEffect} from "react";
import main from '../assets/main.png';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import Card from '../components/Card';
import Loading from '../components/Loading';
import data from "../data.json";
import * as Location from "expo-location";
import axios from "axios"
import {firebase_db} from "../firebaseConfig"

//Stack.screen에 연결된 페이지(컴포넌트)들은 다음과 같이 navigation,route를 속성으로 넘겨받아 사용할 수 있습니다. 
export default function MainPage({navigation,route}){

    //컴포넌트 안에서 데이터를 관리 할땐 무조건 상태!관리
    //useState 선언할 땐 빈 데이터라도 초기값 넣기!
    const [state, setState] = useState([])
    const [cateState, setCateState] = useState([])
    const [ready, setReady] = useState(false)
    const [weather, setWeather] = useState({
      temp : 0,
      condition : ''
    })

    useEffect(()=>{
      //헤더의 타이틀 변경
        navigation.setOptions({
            title:'나만의 꿀팁'
        })
        firebase_db.ref('/tip').once('value').then((snapshot) => {
          console.log("파이어베이스에서 데이터 가져왔습니다!!")
          let tip = snapshot.val();
          setState(tip)
          setCateState(tip)
          getLocation()
          setReady(true)
        });
        // setTimeout(()=>{
        //     let tip = data.tip;
        //     setState(tip)
        //     setCateState(tip)
        //     getLocation()
        //     setReady(true)
        // },500)

    },[])

    const getLocation = async () => {
      //수많은 로직중에 에러가 발생하면
      //해당 에러를 포착하여 로직을 멈추고,에러를 해결하기 위한 catch 영역 로직이 실행
      try {
        //자바스크립트 함수의 실행순서를 고정하기 위해 쓰는 async,await
        await Location.requestPermissionsAsync();
        const locationData= await Location.getCurrentPositionAsync();

        const latitude = locationData['coords']['latitude']
        const longitude = locationData['coords']['longitude']
        const API_KEY = "cfc258c75e1da2149c33daffd07a911d";
        const result = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        );
  
        const temp = result.data.main.temp; 
        const condition = result.data.weather[0].main
        
        console.log(temp)
        console.log(condition)

        //오랜만에 복습해보는 객체 리터럴 방식으로 딕셔너리 구성하기!!
        //잘 기억이 안난다면 1주차 강의 6-5를 다시 복습해보세요!
        setWeather({
          temp,condition
        })
  
      } catch (error) {
        //혹시나 위치를 못가져올 경우를 대비해서, 안내를 준비합니다
        Alert.alert("위치를 찾을 수가 없습니다.", "앱을 껏다 켜볼까요?");
      }
    }

    const category = (cate) =>{
        if(cate == "전체보기"){
            setCateState(state)
        }else{
            setCateState(state.filter((d)=>{
                return d.category == cate
            }))
        }
    }

    
    return ready ? ( 
    <ScrollView style={styles.container}>
        {/* <Text style={styles.title}>나만의 꿀팁</Text> */}
        <Text style={styles.weather}>오늘의 날씨: {weather.temp + '°C   ' + weather.condition} </Text>
        <Image style={styles.mainImage} source={main}/>
        <ScrollView style={styles.middleContainer} horizontal indicatorStyle={"white"}>
            <TouchableOpacity style={styles.middleButton00} onPress={()=>{category('전체보기')}}><Text style={styles.middleButtonText00}>전체보기</Text></TouchableOpacity>
            <TouchableOpacity style={styles.middleButton01} onPress={()=>{category('생활')}}><Text style={styles.middleButtonText}>생활</Text></TouchableOpacity>
            <TouchableOpacity style={styles.middleButton02} onPress={()=>{category('재테크')}}><Text style={styles.middleButtonText}>재테크</Text></TouchableOpacity>
            <TouchableOpacity style={styles.middleButton03} onPress={()=>{category('반려견')}}><Text style={styles.middleButtonText}>반려견</Text></TouchableOpacity>
          <TouchableOpacity style={styles.middleButton04} onPress={()=>{navigation.navigate('LikePage')}}><Text style={styles.middleButtonText2}>꿀팁찜</Text></TouchableOpacity>
        </ScrollView>
        <View style={styles.cardContainer}>
          {
            cateState.map((content,i)=>{
              //navigation을 Card 컴포넌트로 속성값으로 전달해줘야, Card에서 받아서 사용가능!
              return (<Card key={i} content={content} navigation={navigation}/>)
            })
          }
          
        </View>
      </ScrollView>) : <Loading/> 
}


const styles = StyleSheet.create({
    container: {
      //앱의 배경 색
      backgroundColor: '#fff',
    },
    title: {
      //폰트 사이즈
      fontSize: 20,
      //폰트 두께
      fontWeight: '700',
      //위 공간으로 부터 이격
      marginTop:50,
      //왼쪽 공간으로 부터 이격
      marginLeft:20
    },
    weather:{
      alignSelf:"flex-end",
      paddingRight:20
    },
    mainImage: {
      //컨텐츠의 넓이 값
      width:'90%',
      //컨텐츠의 높이 값
      height:200,
      //컨텐츠의 모서리 구부리기
      borderRadius:10,
      marginTop:20,
      //컨텐츠 자체가 앱에서 어떤 곳에 위치시킬지 결정(정렬기능)
      //각 속성의 값들은 공식문서에 고대로~ 나와 있음
      alignSelf:"center"
    },
    middleContainer:{
      marginTop:20,
      marginLeft:10,
      height:60
    },
    middleButton00: {
        width:100,
        height:50,
        padding:15,
        backgroundColor:"#fff",
        borderColor:"#fe8d6f",
        borderWidth:1,
        borderRadius:15,
        margin:7
      },
    middleButton01: {
      width:100,
      height:50,
      padding:15,
      backgroundColor:"#fdc453",
      borderRadius:15,
      margin:7
    },
    middleButton02: {
      width:100,
      height:50,
      padding:15,
      backgroundColor:"#fe8d6f",
      borderRadius:15,
      margin:7
    },
    middleButton03: {
      width:100,
      height:50,
      padding:15,
      backgroundColor:"#9adbc5",
      borderRadius:15,
      margin:7
    },
    middleButtonText: {
      color:"#fff",
      fontWeight:"700",
      //텍스트의 현재 위치에서의 정렬 
      textAlign:"center"
    },
    middleButtonText00: {
        color:"#fe8d6f",
        fontWeight:"700",
        //텍스트의 현재 위치에서의 정렬 
        textAlign:"center"
      },
    middleButton04: {
      width:100,
      height:50,
      padding:15,
      backgroundColor:"#f886a8",
      // //테두리 색
      // borderColor:"deeppink",
      // //테두리 스타일 : 선은 solid, 점선은 dotted
      // borderStyle:"solid",
      // //테두리 두께
      // borderWidth:2,
      borderRadius:20,
      margin:7
    },
    middleButtonText2: {
      color:"#fff",
      fontWeight:"700",
      //텍스트의 현재 위치에서의 정렬 
      textAlign:"center"
    },
    cardContainer: {
      marginTop:10,
      marginLeft:10
    }
});