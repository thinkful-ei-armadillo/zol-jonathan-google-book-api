import React, {Component} from 'react';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      printType: '',
      bookType: '',
      filter: false
    }
  }


  render() {
    return (
      <div>
      <form onSubmit={this.props.handleSearch}>
        <label for="search">Search: </label>
        <input name="searchTerm" id="search" type="text" placeholder="henry" />
        <button type="submit" >Search</button>
      </form>
        <label>Print Type:
          <select onChange={this.props.handleFilter} name="printType">
            <option name="printType" value="all" selected>All</option>
            <option name="printType" value="books">Books</option>
            <option name="printType" value="magazines">Magazines</option>
          </select>
        </label>
        <label>Book Type:
          <select onChange={this.props.handleFilter} name="bookType">
            <option name="bookType" value="" selected disabled>No filter</option>
            <option name="bookType" value="ebooks">Ebooks</option>
            <option name="bookType" value="free-ebooks">Free Ebooks</option>
            <option name="bookType" value="full">Full</option>
            <option name="bookType" value="paid-ebooks">Paid Ebooks</option>
            <option name="bookType" value="partial">Partial</option>
          </select>
        </label>
        </div>
    )
  }

}

export default Form;