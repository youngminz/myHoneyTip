import { StatusBar } from 'expo-status-bar';
import React from 'react';
import main from './assets/main.png';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  console.disableYellowBox = true;
  //return 구문 밖에서는 슬래시 두개 방식으로 주석
  return (
    /*
      return 구문 안에서는 슬래시 + * 방식으로 주석
    */
    <View style={styles.container}>
      <Text style={styles.title}>나만의 꿀팁</Text>
      <Image style={styles.mainImage} source={main}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //전체 화면을 전부 차지하는 레이아웃 설정/선언 방식
    //전체를 나타날때 보통 1로 표현
    //또 다른 표현: 전체 화면을 1로 나누면? 그대로 전체화면입니다.
    flex: 1,
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
  }
});
