
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
  return (
    <div>
      <div>
          <h2 className="text-3xl">BookMarks:{bookmarks.length}</h2>  
          {
            bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
          }
        </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks:PropTypes.array
};

export default Bookmarks;

