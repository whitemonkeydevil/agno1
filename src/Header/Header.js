import React from 'react';
import './Header.css' ;
const Header = (props) => {
        let{websiteName}= props;
   return(
        <div>
            <h1 className={"header"}>{websiteName}</h1>
        </div>
    )
};

export default Header;