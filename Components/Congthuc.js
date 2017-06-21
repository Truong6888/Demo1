import React, { Component } from 'react';
import { AppRegistry, View,Text,Image,StyleSheet} from 'react-native';

export default class Bangtinh extends Component {
  render() {
    const { inputStyle, bigButton, buttonText } = styles;
    return (
      <View style={{}}>
          <View style={{flexDirection: 'row',marginTop:50}}>
            <View style={{marginLeft:40,marginRight:10}}>
              <Image source={require('../media/media/4chosang.png')} 
              style={{width: 150, height:150,}}
              />
            </View>
            <View style={{alignItems:'center'}}>
              <Image source={require('../media/media/4chothuong.png')} 
              style={{width: 150, height:150}}
              />
            </View>
          </View> 
            <View style={{alignItems:'center',marginTop:20}}>
              <Image source={require('../media/media/7cho.png')} 
              style={{width: 150, height:150}}
              />
            </View>
                    <View style={{marginTop:30}}>
                      <View style={{borderWidth:2,backgroundColor:'red',alignItems:'center',marginVertical:10}}>
                        <Text> Công Thức Tính Lương:</Text>
                      </View>
                      <Text>Lái xe hưởng: (Doanh thu * 5% thuế) * (so sánh bảng mức chia doanh thu)- (Tiền tiếp thị+Tiền rửa xe)  </Text>
                    </View>
        </View>
    );
  }
};

const styles = StyleSheet.create({
    inputStyle: {
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    bigButton: {
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: 'Avenir',
        color: '#fff',
        fontWeight: '400'
    },
    bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
});