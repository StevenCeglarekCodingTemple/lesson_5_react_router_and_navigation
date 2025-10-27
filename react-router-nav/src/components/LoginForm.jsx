import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log('Form Submitted');

        navigate('/');
    }
    
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>

            <button className='btn btn-primary'>Submit Form</button>

        </form>

    </div>
  )
}

export default LoginForm