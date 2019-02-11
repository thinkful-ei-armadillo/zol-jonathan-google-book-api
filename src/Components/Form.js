import React, {Component} from 'react';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: false
    }
  }


  render() {
    return (
    
      <form onSubmit={this.props.handleSearch}>
        <label>Search: 
          <input name="searchTerm" ref="search" type="text" placeholder="henry" />
        </label>
        <button type="submit" >Search</button>
      
        <label>Print Type:
          <select name="printType" onChange={ (event) => this.props.handleFilter(event.target.value)}>
            <option name="printType">All</option>
            <option name="printType">Books</option>
            <option name="printType">Magazines</option>
          </select>
        </label>
        <label>Book Type:
          <select name="bookType" onChange={ (event) => this.props.handleFilter(event.target.value)}>
            <option name="bookType" value="no filter">No filter</option>
            <option name="bookType" value="ebooks">Ebooks</option>
            <option name="bookType" value="free-ebooks">Free Ebooks</option>
            <option name="bookType" value="full">Full</option>
            <option name="bookType" value="paid-ebooks">Paid Ebooks</option>
            <option name="bookType" value="partial">Partial</option>
          </select>
        </label>
        </form>
        
    )
  }

}

export default Form;