import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const[index,setIndex] = useState(0);
  const {name,job,image,text} = people[index];

  const nextPerson =()=>{
    setIndex((index)=>{
      let newIndex = index+1;
      return checkNumber(newIndex);
    })
    
  }
  const prevPerson =()=>{
    setIndex((index)=>{
      let newIndex = index-1;
      return checkNumber(newIndex);
    })
  }
  const randomPerson=()=>{
   let newIndex = Math.floor(Math.random(people.length)*people.length);
   if(newIndex === index)
   return setIndex(checkNumber(newIndex+1));
   else return setIndex(checkNumber(newIndex));

    
  }
  const checkNumber=(index)=>{
    if(index > people.length-1)
    return 0;
    if(index < 0)
    return people.length-1;
    else return index;
  }
  return (
  <article className='review'>
    <div className='img-container'>
      <img src ={image} alt={name} className='person-img'/>
      <span className='quote-icon'>
        <FaQuoteRight/>
      </span>
    </div>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info'>{text}</p>
    <div className ='button-container'>
      <button className='prev-btn' onClick ={prevPerson}>
        <FaChevronLeft/>
      </button>
      <button className='next-btn' onClick ={nextPerson}>
        <FaChevronRight/>
      </button>
    </div>
      <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
    
  </article>
  )
};

export default Review;
