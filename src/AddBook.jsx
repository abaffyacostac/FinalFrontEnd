import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from './config';

function AddBook() {
  const [book, setBook] = useState({ bookTitle: '', bookAuthor: '', description: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    
      .post(`${config.backendUrl}`, book )
      .then(() => navigate('/'))
      .catch((err) => console.log('Error in AddBook:', err));
  };

  return (
    <div className="CreateBook">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <a className="btn btn-info float-left" href="/">Show Book List</a>
            <h1 className="display-4 text-center">Add Book</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Title of the Book"
                  name="bookTitle"
                  className="form-control"
                  value={book.bookTitle}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="bookAuthor"
                  name="bookAuthor"
                  className="form-control"
                  value={book.bookAuthor}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Describe this book"
                  name="description"
                  className="form-control"
                  value={book.description}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-info btn-block mt-4">
                Add Book
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBook;
