import React from 'react';
import { Link } from 'react-router-dom';

function Post(props) {

   const {post, openEditModal} = props;

   const style = {
      border: `1px solid #d1d1d1`,
      boxSizing: `borderBox`,
      width: `calc(24% - 20px)`,
      margin: `10px`,
      textAlign: `center`,
   }

   return (
      <div style={style}>
         <Link to={`/posts/${post.id}`}><h5>{post.title}</h5></Link>
         <p>{post.body}</p>
         <button onClick={openEditModal}>edit</button>
         <button>delete</button>
      </div>
   )
}

export default Post