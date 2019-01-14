import React, { Component } from 'react';


class NavMenu extends Component {

    constructor(props){
        super(props);
      	this.state = {
            overlayOpen:"open",
            menuTitle: "+ M E N U",
            overlaySt:"overlay"
        };
       this.handleClick = this.handleClick.bind(this);
    };
  
      handleClick() {
        switch(this.state.overlayOpen)
{
    case "open":
        this.setState({
            overlayOpen:"close",
            menuTitle: "C L O S E -",
            overlaySt:"overlay open"
        });
        break;
    case "close":
        this.setState({
            overlayOpen:"open",
            menuTitle: "+ M E N U",
            overlaySt:"overlay"
        });
        break;
}

    }
   
    render() {
        return (
     <div className="menu-cont" id="toggle" >
            <span className='menu-txt' onClick={this.handleClick}>{this.state.menuTitle}</span>
         <div className={this.state.overlaySt} id="overlay">
            <nav className="overlay-menu">
            <ul>
            <li ><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Learn More About Jesus</a></li>
            <li><a href="#">Contact</a></li>
           </ul>
           </nav>
        </div>
      </div>
    );
    }
}




export default NavMenu;