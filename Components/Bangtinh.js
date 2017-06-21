import React, { Component } from 'react';
import { AppRegistry,Image, View,ScrollView,FlatList,Text,StyleSheet } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class Bangtinh extends Component {
  render() {
    return (
      <View style={{marginTop:50,flexDirection:'row'}}>
        <View style={{fontSize:15}}>
          <Text>Ngày</Text>
        </View>

        <View>
          <Text>Doanh Thu</Text>
          <View>
              <Text>Trước Thuế</Text>
          </View>
          <View>
              <Text>Sau VAT</Text>
          </View>
        </View>

        <View>
            <Text>Tỷ lệ chia DT</Text>
        </View>

        <View>
            <Text>Lái xe Hưởng</Text>
        </View>

        <View>
            <Text>Các khoản giảm trừ</Text>
            <View>
              <Text>Xăng</Text>
            </View>
            <View>
              <Text>TT,RXe</Text>
            </View>
        </View> 
        
        <View>
          <Text>Còn Lại</Text>
        </View>

      </View>
    
    );
  }
}

const style = StyleSheet.create({

})