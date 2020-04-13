import React from "react";
import "./style.css";
import { Card } from 'react-bootstrap';
import API from '../../utils/API'


class BookCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: this.props.option,
      book: {
        title: this.props.title,
        image: this.props.image,
        authors: this.props.authors,
        description: this.props.description,
        link: this.props.link,
        bookId: this.props.id
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



      <div className="card">
        <div className="img-container">
          <img alt={this.props.name} src={this.props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Title:</strong> {this.props.title}
            </li>
            <li>
              <strong>Author:</strong> {this.props.authors}
            </li>
            <li>
              <strong>Description:</strong> {this.props.description}
            </li>
            <li>
              <Card.Link href={this.props.link}>View</Card.Link>
              <Card.Link onClick={this.handleOption} className='save-btn'>{this.state.option}</Card.Link>
            </li>
          </ul>
        </div>
      </div>
    );
 
      
  }
}

export default BookCard;
