import React, { Component } from 'react';
import Form from './Components/Form';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      searchTerm: '',
      searchLoading: false,
      error: null
    }
  }



  componentDidMount() {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=';
    fetch(`${url}history`)
      .then(res => res.ok ? res.json() : Promise.reject('Something went wrong'))
      .then(books => console.log(books))
      .catch(error => this.setState({error}))

  }

  render() {
    /* API key: AIzaSyArESBORraqwDE4MwVUjgGOHP7WDuf8ch0 */

    if (this.state.error) {
      return <div>Error: {this.state.error}</div>
    }
    
    return (
      <div className="App">
        <header className="App-header">
          <h1>Google Book Search</h1>
        </header>
        <Form />
      </div>
    );
  }
}

export default App;
