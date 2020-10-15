import React from 'react';
import { NavLink } from 'react-router-dom';

function Main() {
   return (
      <div>
         <NavLink to={`/artists`}>Artists</NavLink>
         <NavLink to={`/posts`}>Posts</NavLink>
      </div>
   )
}

export default Main
