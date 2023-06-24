import { useSelector } from 'react-redux';
import Addbook from './form';
import Book from './bookinfo';

const Main = () => {
  const { BookList } = useSelector((store) => store.book);
  return (
    <div className="main">
      {BookList.map((book) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Book key={book.id} {...book} />
      ))}
      <Addbook booklength={BookList.length} />
    </div>
  );
};

export default Main;
