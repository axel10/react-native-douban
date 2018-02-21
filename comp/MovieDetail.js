import React from "react";
import {Button, Text, View} from "react-native";

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json';

export default class MoveDetail extends React.Component {
    static navigationOptions = {
        title: 'Detail',
        headerRight: (
            <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#000"
            />
        ),
    };



    componentDidMount() {
        this.fetchData();
    }


    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
                this.setState({
                    loaded: true,
                });
            });
    }

    render() {
        return(
            <View>
                <Text>213</Text>
            </View>
        )
    }
}