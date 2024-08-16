import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './BookList';
import AddBook from './AddBook';
import ShowBook from './ShowBook';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/create-book" element={<AddBook />} />
        <Route path="/show-book/:id" element={<ShowBook />} />
      </Routes>
    </Router>
  );
}

export default App;
