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