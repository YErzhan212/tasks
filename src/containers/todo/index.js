import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Todo(props) {

   const [users, setUsers] = useState({})

   useEffect(() => {
      async function fetchTodo() {
         await axios.get(`https://jsonplaceholder.typicode.com/todos/${props.match.params.id}`).
         then(data  => setUsers(data.data)).
         catch(err => console.log(err))
      }
      fetchTodo()
   }, [])

   return (
      <div>
         <div className="card">
            <p>{users?.userId}</p>
            <p>{users?.id}</p>
            <p>{users?.title}</p>
         </div>
      </div>
   )
}

export default Todo