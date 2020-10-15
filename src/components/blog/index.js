import React from 'react';
import {Link} from 'react-router-dom';
import './blog.css';

function Blog(props){

   const {todo} = props;

   return(
      <div>
         <div className="card">
            <h4>{todo.userId}</h4>
            <p>{todo.id}</p>
            <Link to={`/artists/${todo.id}`}>{todo.title}</Link>
            <p>{todo.completed}</p>
         </div>
      </div>
   )
}

export default Blog