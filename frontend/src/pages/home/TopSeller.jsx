import React, { useEffect, useState } from 'react'
import BookCard from '../books/BookCart';
import { FaBookOpen } from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination,Navigation} from 'swiper/modules';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';

const categories = ["Choose Category","Business","Fiction",
  "Horror","Adventure"];


const TopSeller = () => {
  // const [books, setBooks] = useState([]);  we dont use it now
  const [selectedCategory, setSelectedCategory] = useState("Choose Category");
    
  // useEffect(() => {                                 dont use it now
  //       fetch("books.json").then(res => res.json())
  //       .then((data)=> setBooks(data))
  // },[])

  const {data: books=[]} =  useFetchAllBooksQuery();



  const filteredBooks = selectedCategory === "Choose Category" ? books : books.filter(book =>
  book.category === selectedCategory.toLowerCase())


  return (
    <div className="py-10">

      <div className = "flex gap-4">
      <FaBookOpen className="size-10"/>
      <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>
      </div>

      {/*Category Filtering*/}
      <div className="mb-8 flex items-center">

         <select 

         onChange={(e) => setSelectedCategory(e.target.value)}
         name="category" id="category" className="border bg-gray-200
         border-black rounded-md px-4 py-2">
              {
                 categories.map((category,index) => (
                  <option key={index} value={category}>{category}</option>
                 ))
              }

         </select>

      </div>
      
      <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          }
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
      {
        filteredBooks.length > 0 && filteredBooks.map((book,index) => (
          <SwiperSlide key={index}>
            <BookCard book={book}/>
          </SwiperSlide>
        ))
      }  
        
      </Swiper>
    </> 
    </div>
  )
}

export default TopSeller
