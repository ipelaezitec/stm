import React, { Component} from 'react';
import { Button } from 'reactstrap';
import './header.scss'

class Header extends Component{

  render(){
    return(
      <header className="header">
        <a className=" p-2 raleway-font" href="#" tag="simple task manager">STM</a>
        
      </header>
    );
  }

}

export default Header;