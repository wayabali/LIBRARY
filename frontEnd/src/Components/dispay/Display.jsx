import React from 'react';
import './Display.css';
import Box from '../../Components/component/Box.jsx';
import Navbar from '../component/NavBar.jsx';
import CommentSection from '../../Components/component/CommentBox.jsx';

import Axios from 'axios';


function Display() {
  return (

    <div className='Contain'>
      <Navbar/>
      <Box index={1}/>
      <CommentSection/>
    </div>
  );
}

export default Display;