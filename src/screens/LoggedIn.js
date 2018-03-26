import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Loading } from '../components/common/';
import axios from 'axios';

export default class LoggedIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      error: '',
      loading: true
    }

    this.onGetFail = this.onGetFail.bind(this);
  }

  componentDidMount(){
    const headers = {
      'Authorization': 'Bearer ' + this.props.jwt
    };
    axios({
      method: 'GET',
      url: 'http://localhost:4000/api/v1/my_user',
      headers: headers,
    }).then((response) => {
      this.setState({
        email: response.data.email,
        loading: false
      });
    }).catch((error) => {
      console.log(error);
      this.onGetFail();
    });
  }

  onGetFail(){
    this.setState({
      loading: false,
      error: 'Error retrieving data'
    });
  }

  render() {
    if(this.state.loading){
      return(
        <View style={styles.container}>
          <Loading size={'large'} />
        </View>
      )
    } else {
        return(
          <View style={styles.container}>
            <View>
              <Text style={styles.emailText}>
                Your email: {this.state.email}
              </Text>
              <Text style={styles.errorTextStyle}>
                {this.state.error}
              </Text>
            </View>
            <Button onPress={this.props.deleteJWT}>
              Log Out
            </Button>
          </View>
      );
    }
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  textContainer: {
    justifyContent: 'center',
  },
  emailText: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 20
  },
  errorTextStyle: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'red'
  }
};
