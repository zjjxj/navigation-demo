import React, { Component } from 'react';
import { AppRegistry, Text,View,StyleSheet,Button} from 'react-native';
import {StackNavigator} from 'react-navigation';

class HomeScreen extends React.Component {     //主场景
  static navigationOptions = {  //设置选项来配置导航器中的屏幕显示
    title: 'Welcome zhoujie'
  };
  render() {
    const { navigate } = this.props.navigation;
    return <View>
      <Text>Hello, Navigation!</Text>
      <Button
          onPress={() => navigate('Chat',{user:"Lucy"})}  //传参
          title="Chat with Lucy"
      />
      </View>;
  }
}

class ChatScreen extends React.Component {     //chat场景
  static navigationOptions = {  //设置选项来配置导航器中的屏幕显示
    title: 'Chat with Lucy'
  };
  render() {
    const { params } = this.props.navigation.state;
    return (
        <View>
          <Text>Chat with {params.user}</Text>
        </View>
    );
  }
}

const App = StackNavigator({
  Main: {screen: HomeScreen},
  Chat: {screen: ChatScreen}
});


// 注意，这里用引号括起来的'HelloWorldApp'必须和你init创建的项目名一致
AppRegistry.registerComponent('AwesomeProject', () => App);