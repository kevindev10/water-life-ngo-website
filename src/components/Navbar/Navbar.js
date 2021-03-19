import React,{useState} from 'react';
import Button from '../Button/Button';
import{Link} from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown'

import './Navbar.css';


function Navbar() {
	const[click, setClick] = useState(false);
	const[dropdown, setDropdown] = useState(false);


	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick (false);

	const onMouseEnter = () => {
		if (window.innerWidth < 960){
			setDropdown(false);
		}else {
			setDropdown(true);
		}
	}
	const onMouseLeave = () => {
		if (window.innerWidth < 960){
			setDropdown(false);
		}else {
			setDropdown(false);
		}
	}

	

  return (
	<div>
		 <nav className='navbar'>
		 	<Link exact to ='/' className='navbar-logo'>
		 		WATER LIFE 
		 	</Link>
		 	<div className='menu-icon' onClick ={handleClick} >
		 		<i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
		 	</div>
		 	<ul className={click ? 'nav-menu active' : 'nav-menu'}>

			 	<li className ='nav-item'>
			 		<Link exact to='/' className='nav-links' onClick ={closeMobileMenu}>
			 			Home
			 		</Link>
			 	</li>

			 	<li className ='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			 		<Link  to='/about' className='nav-links' onClick ={closeMobileMenu}>
			 			About <i className='fas fa-caret-down'/>
			 		</Link>
			 		{dropdown && <Dropdown/>}
			 	</li>

			 	<li className='nav-item'>
		            <Link  to='/clean-water' className='nav-links' onClick={closeMobileMenu}>
		            	 Clean Water
		            </Link>
	          </li>

			 	<li className ='nav-item'>
			 		<Link  to='/contact' className='nav-links' onClick ={closeMobileMenu}>
			 			Contact Us Now !
			 		</Link>
			 	</li>	

			 	<li className ='nav-item'>
			 		<Link exact to='/sign-up' className='nav-links-mobile' onClick ={closeMobileMenu}>
			 			Sign Up
			 		</Link>
			 	</li>

		 	</ul>
		 	<Button/>
		 </nav> 
	</div>
  );
}

export default Navbar;
