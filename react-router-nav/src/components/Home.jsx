import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'

const Home = () => {


  return (
    <div>

      <Link to='/posts/1'>Post 1!</Link>
      <Link to='/posts/2'>Post 2!</Link>
      <Link to='/posts/3'>Post 3!</Link>

      <h1>This is our Home Route.</h1>
    </div>
  )
}

export default Home