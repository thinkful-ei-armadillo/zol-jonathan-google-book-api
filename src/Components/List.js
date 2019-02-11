<<<<<<< HEAD
import React, { Component } from 'react';
import Book from './Book';
class List extends Component {
    render (){
        return (
            <div>
                {this.props.books.map(book => 
                    <Book key = {book.id} book = {book} />
                    )
                }
            </div>
        )
    }
}

export default List
=======
import React ,{ Component } from 'react';

class List extends Component {

  render() {
    console.log(this.props)
    return (
      <div>List here</div>
    )
  }
}

export default List;
>>>>>>> 1485a421f10cccf38dc5220b6dcb72dacf4e8ca9
