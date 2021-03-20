import React from 'react';
import{Link} from 'react-router-dom';
import './Button.css';

function Button() {
  return (
    <div >
       <Link to='/donate'>
       		<button className='btn' >Donate</button>
       </Link>
    </div>
  );
}

export default Button;
