const WEBVIEW_REF = "WEBVIEW_REF";
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  
} from 'react-native';
import {WebView} from 'react-native-webview';
import Icon from 'react-native-fa-icons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { canGoBack: false };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topbar}>
          <TouchableOpacity
            disabled={!this.state.canGoBack}
            onPress={this.onBack.bind(this)}
            >
            <Text style={this.state.canGoBack ? styles.topbarText : styles.topbarTextDisabled}><Icon name="backward" style={{ fontSize: 45, color: 'green' }} /></Text>
          </TouchableOpacity>
        </View>
        <WebView
          ref={WEBVIEW_REF}
          style={{flex: 1}}
          onNavigationStateChange=
            {this.onNavigationStateChange.bind(this)}
          source={{uri: 'https://turieancard.herokuapp.com'}}
          /> 
      </View>
    );
  }

  onBack() {
    this.refs[WEBVIEW_REF].goBack();
  }

  onNavigationStateChange(navState) {
    this.setState({
      canGoBack: navState.canGoBack
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 1, /* Padding to push below the navigation bar */
    backgroundColor: '#9bb5c0',
  },
  topbar: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'right',
  },
  topbarTextDisabled: {
    color: 'gray'
  },
  topbarText:{
    color:'blue',
  }
});

export default App;