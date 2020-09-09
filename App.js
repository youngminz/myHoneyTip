import { StatusBar } from 'expo-status-bar';
import React from 'react';
import main from './assets/main.png';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';

export default function App() {
  console.disableYellowBox = true;
  //return 구문 밖에서는 슬래시 두개 방식으로 주석
  return (
    /*
      return 구문 안에서는 {슬래시 + * 방식으로 주석
    */
    <ScrollView style={styles.container}>
      <Text style={styles.title}>나만의 꿀팁</Text>
      <Image style={styles.mainImage} source={main}/>
      <ScrollView style={styles.middleContainer} horizontal indicatorStyle={"white"}>
        <TouchableOpacity style={styles.middleButton}><Text style={styles.middleButtonText}>미용</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton}><Text style={styles.middleButtonText}>재테크</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton}><Text style={styles.middleButtonText}>할인</Text></TouchableOpacity>
        <TouchableOpacity style={styles.middleButton2}><Text style={styles.middleButtonText2}>꿀팁 찜</Text></TouchableOpacity>
      </ScrollView>
      <View style={styles.cardContainer}>
        {/* 하나의 카드 영역을 나타내는 View */}
        
        <View style={styles.card}>
          <Image style={styles.cardImage} source={main}/>
          <View style={styles.cardText}>
            <Text style={styles.cardTitle}>꿀팁 제목</Text>
            <Text style={styles.cardDesc}>꿀팁 설명 설명 설명 !</Text>
            <Text style={styles.cardDate}>꿀팁 날짜</Text>
          </View>
        </View>
        
      </View>
   
    </ScrollView>
  );
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
  middleButton: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"#fff",
    borderColor:"deeppink",
    borderStyle:"solid",
    borderWidth:1.5,
    borderRadius:15,
    margin:7
  },
  middleButtonText: {
    color:"deeppink",
    fontWeight:"700",
    //텍스트의 현재 위치에서의 정렬 
    textAlign:"center"
  },
  middleButton2: {
    width:100,
    height:50,
    padding:15,
    backgroundColor:"deeppink",
    //테두리 색
    borderColor:"deeppink",
    //테두리 스타일 : 선은 solid, 점선은 dotted
    borderStyle:"solid",
    //테두리 두께
    borderWidth:2,
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
  },
  card:{
    flex:1,
    //컨텐츠들을 가로로 나열
    //세로로 나열은 column <- 디폴트 값임 
    flexDirection:"row",
    margin:10
  },
  cardImage: {
    flex:1,
    width:100,
    height:100,
    borderRadius:10,
  },
  cardText: {
    flex:2,
    flexDirection:"column",
    marginLeft:10,
  },



});
