import React, { Component } from 'react';
import { View,Text,TextInput,StyleSheet,TouchableOpacity } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

export default class App extends Component{
  render(){
    const { inputStyle, bigButton, buttonText } = styles;
    
    return(
      <View style={{flex:1, backgroundColor:'powderblue'}}>
            <View > 
                <TextInput
                      style={ {height: 50,
                              backgroundColor: '#fff',
                              marginBottom: 10,
                              borderRadius: 20,
                              paddingLeft: 30,
                              alignItems: 'center',
                              marginTop:40  
                            }}
                      placeholder="Ngày lên ca"
                />
            </View>
            <View style={inputStyle}>
              <ModalDropdown 
               options={['Xe 4 chỗ Thường(ChevoletPark,KiaMorning.)', 'Xe 4 chỗ cao cấp(RIO,Vios,Aveo)','Xe 7 chỗ']}/>
            </View>
            <View>
              <TextInput
                      style={inputStyle}
                      placeholder="Nhập số Tiền Doanh Thu "
                />
            </View>
            <View>
              <TextInput
                      style={inputStyle}
                      placeholder="Nhập Số Tiền Xăng"
                />
            </View>
            <View>
              <TouchableOpacity style={bigButton} onPress={this._onPressButton}>
              <Text>Tính Tiền</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TextInput
                      style={inputStyle}
                      placeholder="Tiền chia tài xế"
                />
            </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    inputStyle: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 30,
        alignItems: 'center'
    },
    bigButton: {
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        marginBottom: 10,
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