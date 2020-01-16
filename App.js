import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

var ws = new WebSocket('ws://echo.websocket.org/');

ws.onopen = () => {
  alert("ws.onopen called!");
  ws.send('something');
}

ws.onmessage = (e) => {
  alert("ws.onmessage called!");
}

ws.onerror = (e) => {
  alert("ws.onerror called!");
}

ws.onclose = (e) => {
  alert("ws.onclose called!");
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  handlePingWebSocketServer() {
    ws.send("hello, world");
  }

  render() {


    return(
      <View>

        <Text>hello, world</Text>

        <Button 
          title="Ping WebSocket Server"
          onPress={ () => this.handlePingWebSocketServer() } />

      </View>
    );
  }
}

export default App;