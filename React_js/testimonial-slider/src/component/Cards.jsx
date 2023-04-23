import React from 'react'
import {FaQuoteLeft,FaQuoteRight,FaGem} from "react-icons/fa"
const Cards = ({review}) => {
  return (
    <div className='flex flex-col md:relative'>
        <div className='absolute -top-[7rem] z-[10] mx-auto' >
            <img className='aspect-square rounded-full w-[140px] h-[140px] z-25' src={review.image} alt="" />
        </div>
        <div>
            <p>{review.name}</p>
        </div>

        <div>
            <p>{review.job}</p>
        </div>
        <div>
            <FaQuoteLeft/>
        </div>

        <div>
            <p>{review.text}</p>
        </div>

        <div>
            <FaQuoteRight/>
        </div>

        <div>
            <button>
                +
            </button>
            <button>
                *
            </button>
        </div>

        <div>
            <button>
                Surprise Me
            </button>
        </div>
    </div>
  )
}

export default Cards;