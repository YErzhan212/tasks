import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Blog from '../../components/blog'
import './artists.css'

function Artists(){

   const [todos, setTodos] = useState([])

   useEffect(() => {
      async function fetchTodos() {
         axios.get(`https://jsonplaceholder.typicode.com/todos`).
         then(data  => setTodos(data.data)).
         catch(err => console.log(err))
      }
      fetchTodos()
   },
[])

   const newTodos = todos.map((item, i) => 
      <Blog
         key={i}
         todo={item}
      />
   )

   return(
      <div>
         <div className="artist">
            {newTodos}
         </div>
      </div>
   )
}

export default Artists