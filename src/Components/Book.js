import React, { Component } from 'react';

class Book extends Component {
    render (){

        return (
            <div>
                <h2>{this.props.book.volumeInfo.title}</h2>
            </div>
            )
        
    }
}

export default Book