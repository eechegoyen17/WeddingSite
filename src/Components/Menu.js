import React, { Component } from "react";
import {MenuItems} from './MenuItems'
import {ReactComponent as HamburgerIcon} from '../Icons/menu-icon.svg'
import {ReactComponent as CloseIcon} from '../Icons/close-icon.svg'
import Logo from '../Images/Logo.png'

class Menu extends Component {
    constructor(){
        super();
        this.state = {
            ariaexpanded: false,
            datavisible: false,
            menuLabel: "Menú",
            menuIcon: <HamburgerIcon />,
            menuBg: "PrimeNavigation PrimeNavTransparent tc"
        }
    }

    onMenuClick = (event) => {
        const { ariaexpanded } = this.state
        return (ariaexpanded) ?
        (
            this.setState ({
                ariaexpanded: false,
                datavisible: false,
                menuLabel: "Menú",
                menuIcon: <HamburgerIcon />
            })
        )
        :
        (
            this.setState ({
                ariaexpanded: true,
                datavisible: true,
                menuLabel: "Cerrar",
                menuIcon: <CloseIcon />
            })
        )
    }
    
    onWindowScroll = e => {
        const windowScroll = window.scrollY;
        if (windowScroll >= 200) 
            { this.setState({menuBg: "PrimeNavigation PrimeNavWhite tc" })}
        else   
            { this.setState({menuBg: "PrimeNavigation PrimeNavTransparent tc"})}
      
    }

    componentDidMount() {
        window.addEventListener("scroll", this.onWindowScroll);
    }

    render(){
        const { ariaexpanded, datavisible,menuLabel,menuIcon,menuBg } = this.state;
        const iCount = MenuItems.length;
        const iCountHalf = iCount/2;
       
        return (
            <div>
                <button className="MenuButton" aria-controls="NavigationDiv" aria-expanded={ariaexpanded} onClick={() => this.onMenuClick()}>
                    <span className="sr-only"></span>
                    <span className="menu__image" id="menuBtnImg">{menuIcon}</span>
                    <span className="menu__text" id="menuBtnText">{menuLabel}</span>
                </button>
                <div className={menuBg} id="NavigationDiv" data-visible={datavisible}>
                    <div className="PrimeNavigationWrapper">
                        <nav>
                            <div className="navLogo f1 garamond"><a href="#Main" onClick={() => this.onMenuClick()}><img src={Logo} alt="Logo" width="75px"/></a></div>
                        </nav>
                        <nav>
                            <ul>
                            {
                                MenuItems.map((user, i) =>{
                                    return ((i) === iCountHalf || (i) === 0) ?
                                    (
                                        <li className="pb4 f3 splitLeft" key={i}><a href={MenuItems[i].link} onClick={() => this.onMenuClick()}>{MenuItems[i].name}</a></li>
                                    )
                                    :
                                    (
                                        <li className="pb4 f3" key={i}><a href={MenuItems[i].link} onClick={() => this.onMenuClick()}>{MenuItems[i].name}</a></li>
                                    )
                                })
                            }
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu