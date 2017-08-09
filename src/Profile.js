import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, TextInput, TouchableHighlight} from 'react-native';
import _ from 'lodash';

import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {AppStyles, Colors} from '../themes';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconInput from '../components/IconInput';
import {Button} from '../components/common';
import MapView from 'react-native-maps';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            agreed: false
        }
    }

    render() {
        return (
          <ScrollView>

          <View style={{flexDirection: 'row', margin:10, alignItems: 'center', justifyContent: 'center',}}>
            <Text style={{fontSize:18}}>
              Load Details
            </Text>
            <View style={{flexDirection:'row', flex: 1, justifyContent:'flex-end'}}>
              <Button
                fontWeight='500'
                backgroundColor={Colors.primary}
                textStyle={{fontSize:12}}
                color='white'
                borderRadius={3}
                style={[styles.secondaryButton, {borderColor:Colors.primary}]}>
                Share
              </Button>
            </View>
          </View>
          <View style={{alignItems:'center', margin:10}}>
          <Text style={{fontWeight:'500', fontSize:18}}>{'hopkinsville'}, {'KY'}  <Icon name="arrow-right" size={20} color="#cccccc" />  {'terre haute'}, {'IN'}</Text>
          <Text style={{fontSize:14, paddingTop:10, fontWeight:'400'}}>{'Power Only (PO)'} / {'48 ft'} / {'40,000 lbs'}</Text>
          </View>

          <View style={{paddingTop:10, margin:10}}>
          <View style={{flexDirection:'row', borderTopColor:'#c3c3c3', borderTopWidth:0.5, paddingTop:5}}>
            <View style={{alignItems:'center', flex:1}}>
              <Text style={{fontSize:12, fontWeight:'100', paddingTop: 2}}>COMPANY TYPE</Text>
              <Text style={{fontWeight:'500', fontSize:18}}>{'Broker'}</Text>
            </View>
            <View style={{alignItems: 'center', flex:1}}>
              <Text style={{fontSize:12, fontWeight:'100', paddingTop: 2}}>DISTANCE</Text>
              <Text style={{fontWeight:'500', fontSize:18}}>{'190'}</Text>
            </View>
            <View style={{alignItems: 'center', flex:1}}>
              <Text style={{fontSize:12, fontWeight:'100', paddingTop: 2}}>LOAD AGE</Text>
              <Text style={{fontWeight:'500', fontSize:18}}><Icon name="md-time" size={18} color="#333" /> {'2h'}</Text>
            </View>
          </View>
          <View style={{flexDirection:'row', paddingTop:5}}>
            <View style={{alignItems:'center', flex:1}}>
              <Text style={{fontSize:12, fontWeight:'100', paddingTop:2}}>READY</Text>
              <Text style={{fontWeight:'500', fontSize:18}}>{'2 Jul'}</Text>
            </View>
            <View style={{alignItems:'center', flex:1}}>
              <Text style={{fontSize:12, fontWeight:'100', paddingTop:2}}>CLOSE</Text>
              <Text style={{fontWeight:'500', fontSize:18}}>{'3 Jul'}</Text>
            </View>
            <View style={{alignItems:'center', flex:1}}>
              <Text style={{fontSize:12, fontWeight:'100', paddingTop:2}}>DELIVERS</Text>
              <Text style={{fontWeight:'500', fontSize:18}}>{'-'}</Text>
            </View>
          </View>
          </View>

          <View style={{margin:10}}>
            <View style={{flexDirection:'row', backgroundColor:'#efefef', borderTopColor: '#c3c3c3', borderTopWidth: 0.5}}>
              <Text style={{margin:5, flex:2}}>
              Company
              </Text>
              <View style={{flex:2, margin:5}}>
                <Text style={{marginBottom:2}}>
                  ST Freight LLC
                </Text>
                <Text style={{marginBottom:2}}>
                  View Profile
                </Text>
                <Text style={{}}>
                  Hide:
                </Text>
              </View>
            </View>
            <View style={{flexDirection:'row', backgroundColor:'#efefef', borderTopColor: '#c3c3c3', borderTopWidth: 0.5}}>
              <View style={{margin:5, flex:2}}>
                <Text style={{marginBottom:2}}>
                Company
                </Text>
                <Text>
                Information
                </Text>
              </View>
              <View style={{flex:2, margin:5}}>
                <Text style={{marginBottom:2}}>
                  MC#: 443731
                </Text>
                <Text style={{marginBottom:2}}>
                  842 S 26TH St
                </Text>
                <Text>
                  Manitowoc, WI, US
                </Text>
              </View>
            </View>
            <View style={{flexDirection:'row', backgroundColor:'#efefef', borderTopColor: '#c3c3c3', borderTopWidth: 0.5}}>
              <View style={{margin:5, flex:2}}>
                <Text>
                Contact or Bid
                </Text>
              </View>
              <View style={{flex:2, margin:5}}>
                <Text style={{marginBottom:2}}>
                  Contact: Dispatch x4
                </Text>
                <Button
                  fontWeight='500'
                  backgroundColor='#e86c00'
                  textStyle={{fontSize:12}}
                  color='white'
                  borderRadius={3}
                  style={[styles.secondaryButton, {borderColor:'#e86c00'}]}>
                  CALL NOW
                </Button>
                <Text style={{marginBottom:2}}>
                  Phone: (920) 686-8200
                </Text>
                <Text>
                  Email: stfreight@stfreight.com
                </Text>
              </View>
            </View>
            <View style={{flexDirection:'row', backgroundColor:'#efefef', borderTopColor: '#c3c3c3', borderTopWidth: 0.5, justifyContent:'space-between'}}>
              <View style={{flex:2, margin:5}}>
                <Text>
                  Reporting
                </Text>
              </View>
              <View style={{flex:2, margin:5}}>
                <Button
                  fontWeight='500'
                  backgroundColor='#5cb85c'
                  textStyle={{fontSize:12}}
                  color='white'
                  borderRadius={3}
                  style={[styles.secondaryButton, {borderColor:'#5cb85c', width: 160}]}>
                  Approved for Quick Pay
                </Button>
                <Text style={{marginBottom:2}}>
                  AVG DAYS TO PAY 32
                </Text>
                <Text>
                  FMCSA Report
                </Text>
              </View>
            </View>
          </View>
            <Text style={{marginLeft:10}}>
              Notes:
            </Text>
            <Text style={{marginLeft:10, marginTop:5, fontWeight:'400', fontSize:12}}>
              No details specified
            </Text>
            <Text style={{marginLeft:10, marginTop:10}}>
              Target Rate: None
            </Text>
            <Text style={{marginLeft:10, marginTop:10}}>
              Bidding:
            </Text>
          <View style={{backgroundColor:'#efefef', borderColor: 'gray', borderWidth: 0.5, flexDirection:'row', margin:10}}>
            <Text style={{margin:5, flex:1}}>
              Amount
            </Text>
            <Text style={{margin:5, flex:1}}>
              Time Submitted
            </Text>
          </View>

          <View style={{flexDirection:'row', margin:10}}>
            <TextInput style={styles.input} placeholder='Enter a bid (number only)...' onChangeText={(text) => this.setState({newTodo: text})} value={this.state.newTodo}/>
            <TouchableHighlight
              style={styles.button}
              underlayColor='#dddddd'>
              <Text style={styles.btnText}>Submit Bid</Text>
            </TouchableHighlight>
          </View>

          <Text style={{marginLeft:10}}>
            Ask Question:
          </Text>
          <Text style={{marginLeft:10, marginTop:5, fontWeight:'400', fontSize:12}}>
            No questions yet...
          </Text>

          <View style={{flexDirection:'row', margin:10}}>
            <TextInput style={styles.input} placeholder='Ask a new question...' onChangeText={(text) => this.setState({newTodo: text})} value={this.state.newTodo}/>
            <TouchableHighlight
              style={styles.button}
              underlayColor='#dddddd'>
              <Text style={styles.btnText}>Send Message</Text>
            </TouchableHighlight>
          </View>

          <Text style={{marginLeft:10}}>
            Spot Market Rate Trends:
          </Text>
          <Text style={{marginLeft:10, marginTop:5, fontWeight:'400', fontSize:12}}>
            Bid trend for this lane to the truck.
          </Text>

          <View style={{backgroundColor:'#efefef', borderColor: 'gray', borderWidth: 0.5, margin:10}}>
            <View style={{flexDirection:'row'}}>
              <Text style={{margin:5, flex:1}}>
                Avg. Linehaul Rate:
              </Text>
              <Text style={{margin:5, flex:1}}>
                $720.60
              </Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={{margin:5, flex:1}}>
                Avg. Rate Per Mile:
              </Text>
              <Text style={{margin:5, flex:1}}>
                $3.79
              </Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={{margin:5, flex:1}}>
                Estimated Fuel Cost:
              </Text>
              <Text style={{margin:5, flex:1}}>
                $78.04
              </Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={{margin:5, flex:1}}>
                Estimated Revenue:
              </Text>
              <Text style={{margin:5, flex:1}}>
                $642.56
              </Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={{margin:5, flex:1}}>
                Distance:
              </Text>
              <Text style={{margin:5, flex:1}}>
                190 mi
              </Text>
            </View>
          </View>

          <Text style={{marginLeft:10}}>
            Map:
          </Text>


          <MapView
            style={styles.mapview}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />

          </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        ...AppStyles.screen.container,
        padding: 6
    },
    secondaryButton:{
      borderColor:Colors.inputGrayBorderColor,
      borderWidth:1,
      height:30,
      width:90
    },
    mapview:{
      height: 500,
      margin: 10,
    },
    hrStyle: {
      marginTop: 15,
      marginBottom: 15,
      paddingRight: 20,
      paddingLeft: 20
    },
    inputStyle:{paddingLeft:10, height:34, backgroundColor:'white'},
    IconInputStyle:{padding:0, marginTop:0, height: 37, marginBottom:2, borderColor:Colors.inputGrayBorderColor},
    iconContainerStyle:{},
    buttonTextStyle: {
        fontSize: 13,
        fontWeight: 'bold'
    },
    button: {
      height: 36,
      flex: 2,
      flexDirection: 'row',
      backgroundColor: '#e86c00',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#FFFFFF',
      borderRadius: 0,
    },
    btnText: {
      fontSize: 14,
      color: '#fff',
      fontWeight: '500'
    },
    input: {
      height: 36,
      flex: 4,
      paddingLeft: 10,
      fontSize: 14,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      color: '#333'
    },
});

const mapStateToProps = ({auth}) => {
    const {logout} = auth;
    return {logout};
};

export default connect(mapStateToProps, {})(Profile);
