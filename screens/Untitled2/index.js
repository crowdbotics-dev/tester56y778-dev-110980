import { Switch } from "react-native";
import { Slider } from "react-native-elements";
import { RadioGroup } from "react-native-radio-buttons-group";
import { ActivityIndicator } from "react-native";
import { CheckBox } from "react-native-elements";
import { Text } from "react-native";
import { FlatList } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><TextInput style={styles.GSmzvdmX}></TextInput><FlatList style={styles.dqrMwZIm} renderItem={({
        item
      }) => <View style={styles.JziwpEJx}></View>} ItemSeparatorComponent={() => <View style={styles.hWZylPne} />} data={[1, 2, 3]} keyExtractor={(item, index) => index} horizontal={true}></FlatList><FlatList style={styles.pioHxcSD} renderItem={({
        item
      }) => <View style={styles.yYjXJrfg}></View>} ItemSeparatorComponent={() => <View style={styles.SqlpNLUf} />} data={[1, 2, 3]} keyExtractor={(item, index) => index} ListFooterComponent={() => <Text>My list footer</Text>} ListHeaderComponent={() => <Text>My list header</Text>}></FlatList><CheckBox style={styles.cTpIAlvN} title="Checkbox Title"></CheckBox><ActivityIndicator style={styles.sJYMAKZv}></ActivityIndicator><RadioGroup style={styles.QzkaEedt} radioButtons={[{
        id: "1",
        label: "Option 1",
        value: "option1"
      }, {
        id: "2",
        label: "Option 2",
        value: "option2"
      }]} layout="column"></RadioGroup><Slider style={styles.lAtbVCWk} thumbStyle={{
        height: 20,
        width: 20
      }} thumbTintColor="#0000FF" maximumValue={1} minimumValue={0}></Slider><Switch style={styles.sINAfEsq}></Switch><TextInput style={styles.yhNXsAMB}></TextInput></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  GSmzvdmX: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  dqrMwZIm: {
    position: "absolute",
    width: 100,
    height: 150
  },
  JziwpEJx: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  hWZylPne: {
    backgroundColor: "#000000",
    height: 1
  },
  pioHxcSD: {
    position: "absolute",
    width: 100,
    height: 150
  },
  yYjXJrfg: {
    width: "100%",
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  SqlpNLUf: {
    backgroundColor: "#000000",
    height: 1
  },
  cTpIAlvN: {
    width: 183,
    height: 69,
    position: "absolute"
  },
  sJYMAKZv: {
    width: 50,
    height: 50,
    position: "absolute",
    left: 107,
    top: 244
  },
  QzkaEedt: {
    width: 120,
    height: 70,
    position: "absolute"
  },
  lAtbVCWk: {
    width: 150,
    height: 40,
    position: "absolute"
  },
  sINAfEsq: {
    width: 50,
    height: 25,
    position: "absolute",
    left: 129,
    top: 335
  },
  yhNXsAMB: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  }
});
export default Untitled2;