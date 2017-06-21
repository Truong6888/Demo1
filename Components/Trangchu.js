import React, { Component } from 'react';
import { AppRegistry,Image, View,ScrollView,FlatList,Text,StyleSheet } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class Bangtinh extends Component {
  render() {
    return (
		<View style={{marginTop:50}}>
		  <Grid>
		  <Col><Text>Ngày</Text></Col>
		  <Col>
		  		<Row>
					  <Text>Doanh Thu</Text>
				</Row>
				<Row>
					<Col><Text>Trước Thuế</Text></Col>
					<Col><Text>Sau VAT</Text></Col>
				</Row>
			</Col>
		  <Col><Text>Tỷ lệ Chia DT</Text></Col>
		  <Col><Text>Lái xe Hưởng</Text></Col>
		  <Col>
		  		<Row></Row>
		  		<Row>
					<Col><Text>Xăng</Text></Col>
					<Col><Text>TT,R.XE</Text></Col>
				</Row>
		  </Col>
		  <Col><Text>Còn lại</Text></Col>
		  </Grid>
		  </View>

		  
    );
  }
}

