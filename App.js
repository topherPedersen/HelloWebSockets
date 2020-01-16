import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    //alert("this thing working?");
    var ws = new WebSocket('ws://echo.websocket.org/');

    ws.onopen = () => {
      // connection opened
      alert("ws.onopen called!");
      ws.send('something');
    }

    ws.onmessage = (e) => {
      // a message was received
      // alert(e.data.toString())
      alert("ws.onmessage called!");
    }

    ws.onerror = (e) => {
      // an error occurred
      //alert(e.message.toString());
      alert("ws.onerror called!");
    }

    ws.onclose = (e) => {
      // connection closed
      //alert(e.code.toString() + e.reason.toString());
      alert("ws.onclose called!");
    }

    return(
      <View>
        <Text>hello, world</Text>
      </View>
    );
  }
}

export default App;