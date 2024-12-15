import { useState } from 'react'
import './App.css'
import Blogs from './components/Bologs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
 const [bookmarks, setBookmarks] =useState([]);
 const [readingTime, setReadingTime] =useState(0)
 const handleAddBookmark = blog =>{
  const newBookmarks = [...bookmarks, blog]
  setBookmarks(newBookmarks)
  
 }

 const handleAddToReadingTime = time =>{
  setReadingTime(readingTime + time)
  
 }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto border'>
        <Blogs handleAddBookmark ={handleAddBookmark} handleAddToReadingTime={handleAddToReadingTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
     
    </>
  )
}

export default App
