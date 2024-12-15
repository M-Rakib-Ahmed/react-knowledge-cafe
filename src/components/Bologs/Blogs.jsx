import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";


const Blogs = ({handleAddBookmark}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() =>{
        fetch('Blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="md:w-2/4">
           <h1 className="text-4xl">Blogs:{blogs.length}</h1>
         
          {
            blogs.map(blog => <Blog 
              key={blog.id} 
             handleAddBookmark ={handleAddBookmark}
              blog={blog}>
                 
              </Blog>)
          }
        </div>
    );
};

Blogs.propTypes ={
   handleAddBookmark: PropTypes.func
}
export default Blogs;