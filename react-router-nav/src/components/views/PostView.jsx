import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'

const PostView = () => {
    const { id } = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const getComments = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
            const data = await response.json();
            console.log(data);
            setComments([...data]);
            
        }

        getComments();

        console.log(comments);
    }, [])


  return (
    <div>
        <div> Post View {id}</div>

        {comments.map((comment, idx) => (
            <div key={idx}>
                <h1>{comment.email}</h1>

                <p>{comment.body}</p>
            </div>
        ))}
    </div>
  )
}

export default PostView