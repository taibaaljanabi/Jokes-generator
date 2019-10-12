
import React, { Component } from 'react';
import './App.css';



export default class App extends Component {
 state = {
   joke:'',
   url : 'https://sv443.net/jokeapi/category/any?blacklistFlags=nsfwreligiouspolitical'
 }

 async getJokes(){
   try{
   const data = await fetch(this.state.url)
   const jsonData = await data.json()
   this.setState({
     joke: jsonData.setup
   })
   }catch(error){
     console.log(error)
   }

 }

 componentDidMount(){
  this.getJokes()
 }

  render() {
    console.log(this.state.joke)
    return (
     
   <h1>Hello form App</h1>
    );
  }
}

