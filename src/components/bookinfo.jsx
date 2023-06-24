import React from 'react';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/books/booksSlice';

const Book = ({ id: id, title, author, category, }) => {
  const dispatch = useDispatch();

  return (
    <div className="bookstoredata">
      <section>
        <span>{category}</span>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <button type="submit">Comments</button>
        <div className="vertical-line" />
        <button type="submit" onClick={() => dispatch(remove(id))}>Remove</button>
        <div className="vertical-line" />
        <button type="submit">Edit</button>
      </section>
      <section>
        <div className="bookinfo" />
        <article className="percentages">
          <span>Complete</span>
        </article>
      </section>
      <section className="progress">
        <span>CURRENT CHAPTER</span>
        <span>Chapter 3</span>
        <button type="submit">UPDATE PROGRESS</button>
      </section>
    </div>
  );
};

export default Book;
