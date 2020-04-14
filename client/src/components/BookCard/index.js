import React, {Component} from "react";
import "./style.css";
import { Card } from 'react-bootstrap';
import API from '../../utils/API'


class BookCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {
        title: this.props.book.volumeInfo.title,
        image: this.props.book.volumeInfo.image,
        authors: this.props.book.volumeInfo.authors,
        description: this.props.book.volumeInfo.description,
        link: this.props.book.volumeInfo.link,
        bookId: this.props.book.id
      },
    }
  }

  handleSave = () => {
    API.saveBook(this.state.book)
      .then(res => {
        this.setState({
          option: ''
        })
      })
      .catch(err => {
        this.setState({
          option: ''
        })
      })
  }

  handleDelete = () => {
    API.deleteBook(this.state.book.bookId)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleOption = () => {
    this.state.option === 'Save' ? this.handleSave() : this.handleDelete();
  }

  render() {
    return (



    <Card>
        <div className="img-container">
          <img alt={this.props.book.name} src={this.props.book.volumeInfo.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Title:</strong> {this.props.book.volumeInfo.title}
            </li>
            <li>
              <strong>Author:</strong> {this.props.book.volumeInfo.authors}
            </li>

            <li>
              <Card.Link href={this.props.book.volumeInfo.link}>View</Card.Link>
               <Card.Link onClick={this.handleOption} className='save-btn'>{this.state.option}</Card.Link>
            </li>
          </ul>
        </div>
      </Card>
    );
 
      
  }
}

export default BookCard;
