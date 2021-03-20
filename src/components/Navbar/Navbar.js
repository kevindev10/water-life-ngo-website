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

	/*//////////////////////////////////////////////////////////////////////////*/

	const extendElement = () => {
	  dropdown ? setDropdown(false) : setDropdown(true);
	}

	/*//////////////////////////////////////////////////////////////////////////*/

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

			 	<li className ='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={extendElement}>
			 		<Link  to='/about' className='nav-links' >
			 			About <i className='fas fa-caret-down'/>
			 		</Link>
			 		{dropdown && <Dropdown onCloseMobileMenu={closeMobileMenu}/>}
			 	</li>

			 	<li className='nav-item'>
		            <Link  to='/clean-water' className='nav-links' onClick={closeMobileMenu}>
		            	 Clean Water
		            </Link>
	          </li>

			 	<li className ='nav-item'>
			 		<Link  to='/get-involved' className='nav-links' onClick ={closeMobileMenu}>
			 			Get Involved
			 		</Link>
			 	</li>	
			 	<li className ='nav-item'>
			 		<Link  to='/blog' className='nav-links' onClick ={closeMobileMenu}>
			 			Blog
			 		</Link>
			 	</li>	

			 	<li className ='nav-item'>
			 		<Link exact to='/donate' className='nav-links-mobile' onClick ={closeMobileMenu}>
			 			Donate
			 		</Link>
			 	</li>
			 	

		 	</ul>
		 	<Button/>
		 </nav> 
	</div>
  );
}

export default Navbar;
