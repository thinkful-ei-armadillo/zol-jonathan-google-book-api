import React, { Component } from 'react';

class Book extends Component {
    render (){
        const title = this.props.book.volumeInfo.title
        const image = this.props.book.volumeInfo.imageLinks.thumbnail
        const author= this.props.book.volumeInfo.authors
        const description = this.props.book.volumeInfo.description
        const price = this.props.book.saleInfo.saleability === "FOR_SALE" 
                            ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'GBP' }).format(this.props.book.saleInfo.listPrice.amount)
                            : this.props.book.saleInfo.saleability === "FOR_SALE" ? 'Free' : 'Not for sale'
        return (
            <div>
                <h2>{title}</h2>
                <img src={image} alt={title}></img>
                <div>
                    <p>Author: {author}</p>
                    <p>Price: {price}</p>
                    <p>{description}</p>
                </div>
            </div>
            )
    }
}
    

export default Book