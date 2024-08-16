// src/components/ShowBook.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import config from './config';

function ShowBook() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(`${config.backendUrl}/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowBook');
      });
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>{book.bookTitle}</h1>
      <h2>Author: {book.bookAuthor}</h2>
      <p>{book.description}</p>
      <a href="/">Back to List</a>
    </div>
  );
}

export default ShowBook;
