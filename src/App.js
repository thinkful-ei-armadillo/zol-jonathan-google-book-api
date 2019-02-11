import React, { Component } from 'react';
import Form from './Components/Form';
// import List from './Components/List';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      searchTerm: 'henry',
      isFilter: false,
      printType: 'all',
      bookType: null,
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

  handleSearch = (event) => {
    event.preventDefault();
    this.setState({
    searchTerm: event.target.searchTerm.value,
    
  })
  console.log(this.state)
  }

  handleFilter = (event) => {
    console.log(event)
    
    this.setState({
      printType: event
    })
    console.log(this.state)
  }

  render() {
    if (this.state.error) {
      return <div>Error: {this.state.error}</div>
    }
    
    return (
      <div className="App">
        <header className="App-header">
          <h1>Google Book Search</h1>
        </header>
        <Form 
        handleFilter={this.handleFilter}
        handleSearch={this.handleSearch} />
        {/* <List /> */}
      </div>
    );
  }
}

export default App;
