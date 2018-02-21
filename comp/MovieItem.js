import React from "react";
import {Image, StyleSheet, Text, TouchableNativeFeedback, View,Linking} from "react-native";


export default class MovieItem extends React.Component{

    onPressItem(url){
        console.log(url)

        Linking.openURL(url);
    }


    render(){


        const movie = this.props.movie;

        console.log(this.props.movie);

        return(
            <TouchableNativeFeedback
                // onPress={MovieList.onPressButton.bind(this,movie.id)}
                id={movie.id}
                onPress={this.onPressItem.bind(this,movie.alt)}
                background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={styles.container} key={movie.id}>
                    <Image
                        source={{uri: movie.images.small}}
                        style={styles.thumbnail}
                    />
                    <View style={styles.rightContainer}>
                        <Text style={styles.title}>{movie.title}</Text>
                        <Text style={styles.year}>{movie.year}</Text>
                    </View>
                    <Text/>
                </View>
            </TouchableNativeFeedback>
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