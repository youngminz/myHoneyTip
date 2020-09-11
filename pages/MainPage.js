import React, {useState,useEffect} from "react";
import main from '../assets/main.png';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import Card from '../components/Card';
import Loading from '../components/Loading';
import data from "../data.json";

//비구조 할당 방식으로 App으로 부터 건네 받은 딕셔너리에서 tip 키 값만 꺼냅니다.
export default function MainPage(){

    //컴포넌트 안에서 데이터를 관리 할땐 무조건 상태!관리
    //useState 선언할 땐 빈 데이터라도 초기값 넣기!
    const [state, setState] = useState([])
    const [cateState, setCateState] = useState([])
    const [ready, setReady] = useState(false)


    let todayWeather = 10 + 17;
    let todayCondition = "흐림"

    useEffect(()=>{
        setTimeout(()=>{
            let tip = data.tip;
            setState(tip)
            setCateState(tip)
            setReady(true)
        },2000)

    },[])

    const category = (cate) =>{
        if(cate == "전체보기"){
            setCateState(state)
        }else{
            setCateState(state.filter((d)=>{
                return d.category == cate
            }))
        }
    }

    
    return ready ? ( <ScrollView style={styles.container}>
        {/* <Text style={styles.title}>나만의 꿀팁</Text> */}
        <Text style={styles.weather}>오늘의 날씨: {todayWeather + '°C ' + todayCondition} </Text>
        <Image style={styles.mainImage} source={main}/>
        <ScrollView style={styles.middleContainer} horizontal indicatorStyle={"white"}>
            <TouchableOpacity style={styles.middleButton00} onPress={()=>{category('전체보기')}}><Text style={styles.middleButtonText00}>전체보기</Text></TouchableOpacity>
            <TouchableOpacity style={styles.middleButton01} onPress={()=>{category('생활')}}><Text style={styles.middleButtonText}>생활</Text></TouchableOpacity>
            <TouchableOpacity style={styles.middleButton02} onPress={()=>{category('재테크')}}><Text style={styles.middleButtonText}>재테크</Text></TouchableOpacity>
            <TouchableOpacity style={styles.middleButton03} onPress={()=>{category('반려견')}}><Text style={styles.middleButtonText}>반려견</Text></TouchableOpacity>
          <TouchableOpacity style={styles.middleButton04}><Text style={styles.middleButtonText2}>꿀팁찜</Text></TouchableOpacity>
        </ScrollView>
        <View style={styles.cardContainer}>
          {
            cateState.map((content,i)=>{
              return (<Card key={i} content={content} />)
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