import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from './config'; // make sure to import your config


const BookCard = ({ book }) => {
  const navigate = useNavigate();

  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete(`${config.backendUrl}/${book._id}`)
      .then(() => {
        navigate('/'); // Navigate to the desired page
        window.location.reload(); // Force a page reload
      })
      .catch((err) => console.log('Error in Delete Book:', err));
  };

  return (
    <div className="card-container">
      <img
        src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
        alt="Books"
        height="200"
      />
      <div className="desc">
        <h2>
          <Link to={`/show-book/${book._id}`}>{book.bookTitle}</Link>
        </h2>
        <h3>{book.bookAuthor}</h3>
        <p>{book.description}</p>
        <button className="btn btn-info float-right" onClick={handleDelete} >X</button>
      </div>
    </div>
  );
};

export default BookCard;
