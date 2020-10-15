import React, {useEffect, useState} from 'react';
import Comments from '../../containers/comments'
import axios from 'axios';

function Todos(props) {

   const [todos, setTodos] = useState({})
   const [com, setCom] = useState([])

   useEffect(() => {
      async function fetchTodos() {
         await axios.get(`https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`).
         then(data => setTodos(data.data)).
         catch(err => console.log(err))
      }
      fetchTodos()
      async function fetchComments() {
         await axios.get(`https://jsonplaceholder.typicode.com/posts/${props.match.params.id}/comments`).
         then(data => setCom(data.data)).
         catch(err => console.log(err))
      }
      fetchComments()
   }, [])

   return(
      <div>
         <div>
            <h5>{todos?.title}</h5>
            <p>{todos?.body}</p>
         </div>
         <div>
            <Comments com={com}/>
         </div>
      </div>
   )
}

export default Todos