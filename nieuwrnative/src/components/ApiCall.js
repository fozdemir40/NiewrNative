import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";

export default class ApiCall extends Component{
    constructor(props){
        super(props);
        this.state={
            articles: [],
            dataIsReturned: false
        };
    }

    componentDidMount() {
        // Change keys if Cors header is not working, NewsAPI only allows 500 requests per day for free use
        // key 1 = dd032e702bf347a7b0556dd2eb3eb177
        // key 2 = e694ed44263f48f0928cc00b9d3edde3
        let apiUrl  = "https://newsapi.org/v2/top-headlines?country=nl&pageSize=10&apiKey=dd032e702bf347a7b0556dd2eb3eb177"
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
          width: 460,
          height: 400,
          backgroundColor: "#E6E6E6",
          marginTop: 15,
          alignSelf: "center"
        },
        containerImage:{
          marginTop: 20,
          alignSelf: 'center',
          position: 'absolute',
        },
        image: {
          width: 420,
          height: 200,
        },
        articleTextContainer: {
          alignSelf: 'center',
          width: 410,
          position: 'absolute',
          top: 250,
        },
        articleText: {
          fontSize: 20,
          fontWeight: "bold",
        }
      })

      if (dataReturned) {
        articlesList = this.state.articles[0].map((item, i) =>
              <TouchableOpacity
                      onPress={() => this.props.data.navigation.navigate("DetailPage", {
                        itemId: i,
                        imageUrl: item.urlToImage,
                        titleArticle: item.title,
                        contentArticle: item.content
                      })}
                      style={styles.button}
                      key={i}
                    >
                    <View style={styles.containerImage}>
                      <Image style={styles.image} source={{
                        uri: item.urlToImage
                      }}/>
                    </View>
                      
                      <View style={styles.articleTextContainer}>
                        <Text style={styles.articleText}>{item.title}</Text>
                        <Text>{item.description}</Text>
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

  
