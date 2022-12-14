import { View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native'
import React from 'react'
// import { Header } from 'react-native/Libraries/NewAppScreen'
import Header from '../components/Home/Header'
import Stories from './Stories'
import Post from '../components/Home/Post'
import { POSTS } from '../data/post'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) =>(
      <Post post={post} key={index} />
      ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    }
})

export default HomeScreen