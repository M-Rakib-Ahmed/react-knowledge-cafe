import PropTypes from 'prop-types';
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({blog, handleAddBookmark, handleAddToReadingTime}) => {
   const {title,cover,author, author_img, reading_time,posted_date,hashTags} = blog
    
    return (
        <div className='mb-20'>
        <img className='w-full mb-8' src={cover} alt="" />
        <div className='flex justify-between'>
            <div className='flex items-center gap-3 mb-5'>
             <img className='size-10 rounded-full' src={author_img} alt="" />
             <div>
                <h2 className='text-2xl'>{author}</h2>
                <p>{posted_date}</p>
             </div>
        
            </div>
            <div className='flex items-center'>
             <span>{reading_time} minute red</span>
             <button onClick={()=> handleAddBookmark (blog)} className='ml-2 text-red-500'><IoBookmarksOutline></IoBookmarksOutline></button>
            </div>
        </div>
           <h2 className="text-4xl mb-7">{title}</h2> 
          <p>
            
            {
            hashTags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
           }
          
          </p>

           <button  onClick={ ()=> handleAddToReadingTime(reading_time)} className='text-purple-800 font-bold underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
     handleAddBookmark: PropTypes.func,
     handleAddToReadingTime:PropTypes.func
}
export default Blog;
