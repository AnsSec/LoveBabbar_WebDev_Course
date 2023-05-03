import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Pagination = () => {
  const {page}=useContext(AppContext);
  
  return (
    <div>
      { page>1 &&
        <button>
          Previous
        </button>
      }
    </div>
  )
}

export default Pagination