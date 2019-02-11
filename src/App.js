import React, { Component } from 'react';
import Form from './Components/Form';
import List from './Components/List';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      searchTerm: 'henry',

      isFilter: false,
      printType: 'all',
      bookType: 'ebooks',

      searchLoading: false,
      error: null
    }
  }

 
  handleSearch = (event) => {
    event.preventDefault();
    this.setState({
      searchTerm: event.target.searchTerm.value,
    })

    const searchURL = 'https://www.googleapis.com/books/v1/volumes?';
    const params = {
      api_key: 'AIzaSyBkl_H8pJwA3U1G8xXjiul5xpmVS34NBR4',
      q: this.state.searchTerm,
      filter: this.state.bookType,
      printType: this.state.printType
    }

    const queryStr = Object.keys(params)
                           .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
                           .join('&');

    const url = `${searchURL}?${queryStr}`;

    const options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    };

    fetch(url, options)
      .then(res => res.ok ? res.json() : Promise.reject('Something went wrong'))
      .then(books => {
        this.setState({
          books: books.items,
          searchLoading: false
        })
      })
      .catch(error => this.setState({error, searchLoading: false}))
    
    console.log(this.state)
  }

  handleFilter = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    if (this.state.error) {
      return <div>Error: {this.state.error}</div>
    } else if (this.state.searchLoading){
      return <div>Laoding</div>
    }
    
    const books = this.state.books
    console.log(books)

    return (
      <div className="App">
        <header className="App-header">
          <h1>Google Book Search</h1>
        </header>
        <Form 
          handleFilter={this.handleFilter}
          handleSearch={this.handleSearch} 
          state = {this.state}
        />
        <List 
          books = {this.state.books}
        />
      </div>
    );
  }
}

export default App;
