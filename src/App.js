import React, { Component } from 'react';
import Form from './Components/Form';
// import List from './Components/List';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      searchTerm: '',
      isFilter: false,
      filter: {
        printType: '',
        bookType: '',
      },
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
    const target = event.target;
    console.log({[target.name]: target.value})
    // this.setState({
    //   searchTerm: target.searchTerm.value,

    // })
  }

  handleFilter = (event) => {
    const {name, value} = event.target
    console.log({[name]: value})

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
        <Form handleSearch={this.handleSearch} handleFilter={this.handleFilter} />
        {/* <List /> */}
      </div>
    );
  }
}

export default App;
