import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
    return (
        <>
            <div>
                <input type='search' placeholder='Search products'></input>
            </div>
            <nav>
                <h3>relative link</h3>
                <Link to='featured'>Featured</Link>
                <Link to='new'>New</Link>
                <h3>absolute link</h3>
                <Link to='/products/featured'>Featured</Link>
                <Link to='/products/new'>New</Link>
            </nav>

            <Outlet></Outlet>
        </>

    )
}

export default Products