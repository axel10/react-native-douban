import React from "react";
import {FlatList, Image, StyleSheet, Text, TouchableNativeFeedback, View} from "react-native";
import MovieItem from "./MovieItem";

var props;
var REQUEST_URL = 'https://api.douban.com/v2/movie/in_theaters?count=5';
export default class MovieList extends React.Component {
    static navigationOptions = {
        title: 'MovieList',
    };

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            data: [],
            props:null
        };
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    _keyExtractor = (item, index) => {
        console.log(item);

        return item.id;
    };


    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    正在加载电影……
                </Text>
            </View>
        )
    }


    _onPressButton = (id)=>{
        console.log(id);
    }



    renderMovie(movie) {
        // console.log(this.props);
        // console.log(movie.posters);
        // console.log(movie);
        // console.log(movie.item);
        movie = movie.item;
        return (

            <MovieItem
                movie = {movie}
                onPress = {this._onPressButton}
            />

        );
    }


    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
                console.log(responseData);
                this.setState({
                    data: this.state.data.concat(responseData.subjects),
                    loaded: true,
                });
            });
    }


    render() {

        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        console.log(this.props);
        props = this.props;
        return (
            <FlatList
                data={this.state.data}
                renderItem={this.renderMovie}
                style={styles.list}
                keyExtractor={this._keyExtractor}
            />
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    rightContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    year: {
        textAlign: 'center',
    },

    thumbnail: {
        width: 53,
        height: 81,
    },
    list: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});