import React from 'react'
import { useParams } from 'react-router-dom';

const UserProfile = () => {

    const { id } = useParams();

  return (

    <div>
        <h1>User #{id} is here! </h1>
    </div>

  )
}

export default UserProfile