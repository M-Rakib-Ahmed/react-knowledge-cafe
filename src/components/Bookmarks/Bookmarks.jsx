
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
  return (
    <div>
      <div className='bg-gray-400 ml-4 rounded-md p-5 mt-4 '>
        <div>
        <h2 className='text-4xl'>ReadingTime:{readingTime}</h2>
        </div>
          <h2 className="text-3xl">BookMarks:{bookmarks.length}</h2>  
          {
            bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
          }
        </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks:PropTypes.array,
  readingTime:PropTypes.number
};

export default Bookmarks;

