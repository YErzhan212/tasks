import React, { useEffect, useState } from 'react';
import Comment from '../../components/comment';
import axios from 'axios';

function Comments(props) {

   const comItems = props.com.map((item, i) => 
      <Comment 
         key={i}
         comment={item}
      />
   )

   return (
      <div>
         {comItems}
      </div>
   )
}

export default Comments
