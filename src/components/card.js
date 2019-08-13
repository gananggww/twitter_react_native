import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Image
} from 'react-native';

const kim_jong_un = {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Kim_Jong-un_at_the_Workers%27_Party_of_Korea_main_building.png'
}
const {height, width} = Dimensions.get('window') - 30;
const Card = () => {
  return (
    <View style={{flex:1}}>
        <View style={styles.background}>
            <View style={styles.title}>
                <Text style={styles.fontTitle}>
                    Title Card
                </Text>
            </View>
            <View>
                <Image
                    style={styles.imageCard}
                    source={kim_jong_un}
                ></Image>
            </View>
            <View style={styles.buttomCard}>
                <Text>
                    Descriptons
                </Text>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    // flex:
    // justifyContent: "center",
    // backgroundColor: '#ECEFF1',
    width: width,
    height: 500,
    margin: 15,
    borderRadius: 10,
    elevation: 1
  },
  title: {
      width: width,
      height: 60,
      backgroundColor: '#FAFAFA',
    //   borderBottomWidth: 0.5,
    //   borderBottomColor: '#616161',
      justifyContent: 'center',
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
  },
  fontTitle: {
      marginLeft: 15,
      fontSize: 24
  },
  imageCard: {
      width: width,
      height: 340
  },
  buttomCard: {
      backgroundColor: '#FAFAFA',
      width: width,
      height: 100,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10
  }
});

export default Card;
// 085372281600 Ganang