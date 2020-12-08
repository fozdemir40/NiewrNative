import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";
import { TapGestureHandler } from "react-native-gesture-handler";
import styles from '../screens/NewsHome'

export default class ApiCall extends Component{
    constructor(props){
        super(props);
        this.state={
            articles: [],
            dataIsReturned: false
        };
    }

    componentDidMount() {
        let apiUrl  = "https://newsapi.org/v2/top-headlines?country=nl&pageSize=10&apiKey=e694ed44263f48f0928cc00b9d3edde3"
        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // this.setState({ postList: response.data.children, fetching: false });
            this.setState({
              articles: [...this.state.articles, data['articles']],
              dataIsReturned: true
            })
          })

          .catch(err => {
            console.log(err)
          });
    }

    render(){
      let dataReturned = this.state.dataIsReturned
      let articlesList = null

      const styles = StyleSheet.create({
        button: {
          width: 316,
          height: 178,
          backgroundColor: "#E6E6E6",
          marginTop: 15,
          alignSelf: "center"
        }
      })

      if (dataReturned) {
        articlesList = this.state.articles[0].map((item, i) =>
              <TouchableOpacity
                      onPress={() => this.props.data.navigation.navigate("DetailPage")}
                      style={styles.button}
                    >
                    <View key={i}>
                      <Text>{item.title}</Text>
                  </View>
            </TouchableOpacity>)
       } else {
        articlesList = <Text>Loading</Text>
       } 

        return (
            <View>
              {articlesList}
              </View>
        )


    }


}

  
