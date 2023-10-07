import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-slate-800 flex justify-around text-white py-5'>
        <button>
            <Link to={'/'}>Home</Link>
        </button>
        <button>
            <Link to={'/product'}>Product</Link>
        </button>
        <button>
            <Link to={'/retrieveData'}>Show Product</Link>
        </button>
        <button>
            <Link to={'/addProduct'}>+</Link>
        </button>
    </div>
  )
}

export default Navbar