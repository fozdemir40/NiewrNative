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
      console.log(this.state.articles[0])
      let dataReturned = this.state.dataIsReturned
      let articlesList = null

      if (dataReturned) {
        articlesList = this.state.articles[0].map((item, i) =>
              <View key={i}>
                <Text>{item.title}</Text>
            </View>)
       } else {
        articlesList = <Text>Loading</Text>
       } 
       

        return (

            <View>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("DetailPage")}
              >
               
              {articlesList}
              </TouchableOpacity>

              </View>
        )
    }
}

     

                // <div className="news-item" style={{backgroundColor: "orange"}} key={i}>    
            
                
                /* <div className="description"><h4>{this.state.artikelen.articles[i].description}</h4></div>
                <div className="content">{this.state.artikelen.articles[i].content}</div>
                <div className="author">{this.state.artikelen.articles[i].author}</div>
                <br/>
                <br/>
          
              </div> */
// Api
// response -> state
// state -> artikel
// in newsHome foreach(artikels)
// in detailPage key meesturen van geklikt artikel en nieuwe api call
