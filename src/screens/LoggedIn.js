import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from '../components/common/';

export default class LoggedIn extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <View style={styles.container}>
        <Button onPress={this.props.deleteJWT}>
          Log Out
        </Button>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center'
  }
};
