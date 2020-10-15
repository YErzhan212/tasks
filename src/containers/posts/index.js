import React, {useEffect, useState} from 'react';
import Post from '../../components/post'
import axios from 'axios';
import './posts.css'

function Posts() {

   const [posts, setPosts] = useState([])
   const [post, setPost] = useState({})

   useEffect(() => {
      async function fetchPosts() {
         await getPosts()
      }
      fetchPosts()
   }, [])

   const getPosts = () =>{
      axios.get(`https://jsonplaceholder.typicode.com/posts`).
      then(data => setPosts(data.data)).
      catch(err => console.log(err))
   }

   const handleSend = e => {
      e.preventDefault()
      const postItem = {...post, userId: 1}
      axios.get(`https://jsonplaceholder.typicode.com/posts`, postItem).
      then(data => getPosts()).
      catch(err => console.log(err))
   }

   const [editVisible, setEditVisible] = useState(false)

   const [edit, setEdit] = useState({
      title: ` `,
      body: ` `,
      id: null
   })

   const openEditModal = (item, i) =>{
      setEditVisible(true)
      setEdit({
         title: item.title,
         body: item.body,
         id: i
      })
   }

   const onChange = e => {
      const {name, value} = e.target;
      setPost(prev => ({
         ...prev,
         [name]: value
      }))
   }

   const onEditChange = e => {
      const {name, value} = e.target;
      setEdit(prev => ({
         ...prev,
         [name]: value
      }))
   }

   const postItems = posts?.map((item, i) => 
      <Post
      key={i}
      post={item}
      openEditModal={openEditModal}
      />)

   return (
      <div>
         <div style={{width: `50%`, margin: `20px`}}>
            <form>
               <fieldset>
                  <label>Title</label>
                  <input name="title" onChange={onChange} />
               </fieldset>
               <fieldset>
                  <label>Body</label>
                  <input name="body" onChange={onChange} />
               </fieldset>
               <button onClick={handleSend}>Send</button>
            </form>
         </div>
         <div className={editVisible ? `edit-modal open-edit-modal` : `edit-modal close-edit-modal`}>
            <div className="edit-modal-bg" onClick={() => setEditVisible(false)}></div>
            <div className="modal-inner">
               <form>
                  <span onClick={() => setEditVisible(false)}>x</span>
                  <fieldset>
                     <label>Title</label>
                     <input name="title" onChange={onEditChange}/>
                  </fieldset>
                  <fieldset>
                     <label>Body</label>
                     <input name="body" onChange={onEditChange}/>
                  </fieldset>
                  <button>Save</button>
               </form>
            </div>
         </div>
         <div className="post">
            {postItems}
         </div>
      </div>   
   )
}

export default Posts