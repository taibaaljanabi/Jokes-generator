
import React, { Component } from 'react';
import './App.css';



export default class App extends Component {
 state = {
   setup:'',
   delivery:'',
   url : 'https://sv443.net/jokeapi/category/any?blacklistFlags=nsfwreligiouspolitical'
 }

 async getJokes(){
   try{
   const data = await fetch(this.state.url)
   const jsonData = await data.json()
   this.setState({
     setup: jsonData.setup,
     delivery: jsonData.delivery

   })
   }catch(error){
     console.log(error)
   }

 }

 componentDidMount(){
  this.getJokes()
 }

  render() {
    console.log(this.state.setup)
    console.log(this.state.delivery)
    return (
     
   <h1>Hello form App</h1>
    );
  }
}

