import React from 'react'
import {FaQuoteLeft,FaQuoteRight,FaGem} from "react-icons/fa"
const Cards = ({review}) => {
  return (
    <div>
        {/* <div>
            <img src={review.image} alt="" />
        </div> */}
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