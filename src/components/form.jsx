import { useState } from 'react';
import '../App.css';
import { useDispatch } from 'react-redux';
import { add } from '../redux/books/booksSlice';

const Addbook = ( ) => {
  const show = useDispatch();
  const [book, setBook] = useState({
    id: 1,
    title: '',
    author: '',
    category: '',
  });
  const clear = () => {
    setBook({
      id: 2,
      title: '',
      author: '',
      category: '',
    });
  };

  const addNewBook = (e) => {
    e.preventDefault();
    if (book.title !== '') {
      show(add({ id, ...book }));
      clear();
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form-container">
      <h2>ADD NEW BOOK</h2>
      <form className="submit-form" onSubmit={addNewBook}>
        <input
          required
          name="title"
          className="input input-book"
          type="text"
          placeholder="Book Title"
          value={book.title}
          onChange={handleChange}
        />
        <input
          required
          name="author"
          className="input input-book"
          type="text"
          placeholder="Book author"
          value={book.author}
          onChange={handleChange}
        />
        <select
          name="category"
          value={book.category}
          className="input category-input"
          onChange={handleChange}
          required
        >
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button className="bookS" type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Addbook;
