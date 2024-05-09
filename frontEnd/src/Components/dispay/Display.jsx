import React from 'react';
import './Display.css';
import Box from '../component/Box.jsx';
import Navbartwo from '../component/NavBartwo.jsx';
import CommentSection from '../component/CommentBox.jsx';





function Display() {
  return (

    <div className='Contain'>
      <Navbartwo/>
      <Box index={1}/>
      <CommentSection/>
      
    </div>
  );
}

export default Display;