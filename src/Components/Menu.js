import React, { Component } from "react";
// import './Menu.css'
import {MenuItems} from './MenuItems'
import {ReactComponent as HamburgerIcon} from '../Icons/menu-icon.svg'
import {ReactComponent as CloseIcon} from '../Icons/close-icon.svg'

class Menu extends Component {
    constructor(){
        super();
        this.state = {
            ariaexpanded: false,
            datavisible: false,
            menuLabel: "Menú",
            menuIcon: <HamburgerIcon />
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

    render(){
        const { ariaexpanded, datavisible,menuLabel,menuIcon } = this.state
        return (
            <div>
                <button className="MenuButton" aria-controls="NavigationDiv" aria-expanded={ariaexpanded} onClick={() => this.onMenuClick()}>
                    <span className="sr-only"></span>
                    <span className="menu__image" id="menuBtnImg">{menuIcon}</span>
                    <span className="menu__text" id="menuBtnText">{menuLabel}</span>
                </button>
                <div className="PrimeNavigation tc" id="NavigationDiv" data-visible={datavisible}>
                    <nav>
                        <div className="f1 garamond"><a href={MenuItems[0].link}>M & E</a></div>
                    </nav>
                    <nav>
                        <ul className="pl0">
                        {
                            MenuItems.map((user, i) =>{
                                return (
                                    <li className="pb4 f2 garamond" key={i}><a href={MenuItems[i].link}>{MenuItems[i].name}</a></li>
                                )
                            })
                        }
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Menu