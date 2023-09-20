import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <p>Home</p>
        <button>
            <Link to={'/product'}>Product</Link>
        </button>
    </div>
  )
}

export default Home