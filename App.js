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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    //
    fontSize: 20,
    fontWeight: '700',
    marginTop:50,
    marginLeft:20
  },
});
