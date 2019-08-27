import React from 'react';
import {StyleSheet, Text, View, Image, TouchableWithoutFeedback, FlatList} from 'react-native';


export class Video extends React.Component{
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {listLoaded: false};

    }
    componentDidMount(){
        return fetch(
            'https://www.googleapis.com/apis/api/youtube.googleapis.com'
        )
    }

}
