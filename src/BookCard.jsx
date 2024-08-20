import React from 'react';
import { Link } from 'react-router-dom';

const handleDelete = (e) => {
  e.preventDefault();
  axios
    .delete(`${config.backendUrl}/${book._id}`, book )
    .then(() => navigate('/'))
    .catch((err) => console.log('Error in Delete Book:', err));
};

const BookCard = ({ book }) => {
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
        <a className="btn btn-info float-right" onclick={handledelete} >X</a>
      </div>
    </div>
  );
};

export default BookCard;
