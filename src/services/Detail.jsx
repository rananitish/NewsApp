import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Article  from './Article';


const Detail=()=>{
    
    const [news, setNews] = useState([]);
    
  
    const getNews = () => {
      fetch(`https://newsapi.org/v2/everything?q=apple&from=2022-09-19&to=2022-09-19&sortBy=popularity&apiKey=ea5873494a2c47bbb9e03ccdd833d8f9`,{
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
  
      }).then((response)=>response.json())
        .then((json)=>{
          setNews([...news,...json?.articles])
        })
        .catch((error)=>{
          console.error(error)
        })
    }
    useEffect(() => {
      getNews();
    }, []);
   
    return(
      <View>
        <FlatList
          data={news} 
          onEndReached={()=>setPage(page+1)}  onEndReachedThreshold={0.5} 
          renderItem={({item})=>
            <Article
              urlToImage = {item?.urlToImage}
              title = {item?.title}
              description = {item?.description}
              author = {item?.author}
              publishedAt = {item?.publishedAt}
              sourceName = {item?.source.name}
              url={item?.url}
              content={item?.content}
              />}
              keyExtractor = {(item) => item.title}
       />
       </View>)}
         
  
  
  
  
  const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
    }
  })
  export default Detail;