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
      <form>
        <label for="searchTerm">Search: </label>
        <input name="searchTerm" type="search" placeholder="henry">Search</input>
        <button type="submit">Search</button>
        <label>Print Type</label>
        <select>
          <option>All</option>
          <option>Books</option>
          <option>Magazines</option>
        </select>
        <select>
          <option>No filter</option>
          <option>Ebooks</option>
          <option>Full</option>
          <option>Paid Ebooks</option>
          <option>Partial</option>
        </select>
      </form>
    )
  }

}

export default Form;