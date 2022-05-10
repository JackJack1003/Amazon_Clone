import React from 'react'; 
import './Header.css'; 
import {Link} from 'react-router-dom'; 
//import PageviewIcon from '@mui/icons-material/Pageview';
import SearchIcon from '@material-ui/icons/Search'; 
import { Search } from '@material-ui/icons';

function Header() {
  return (
    <nav className="header">
        <Link to="/login"> 
        <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/> 
        </Link>
        <div className='header__search'>
        <input type="text" className='header__searchInput'/>
      
            </div> 
            <div className="header__nav">
            <Link to="/login" className="header__link">
              <div className='header__option'> 
              <span>Hello Jack</span> 
              <span>Sign in</span> 
              </div>
                </Link> 
                <Link to="/login" className="header__link">
              <div className='header__option'> 
              <span>Return</span> 
              <span>Orders</span> 
              </div>
                </Link> 
                <Link to="/login" className="header__link">
              <div className='header__option'> 
              <span>Your</span> 
              <span>Prime</span> 
              </div>
                </Link> 
                <Link to="/checkout" className="header__link" >
              <div className='header__basket'> 
              <span>0</span> 
              </div>
                </Link> 
              </div> 
  
    </nav>
  )
}

export default Header