import React, { Component } from "react";
import './Menu.css'
import {MenuItems} from './MenuItems'
import hamburgericon from '../Icons/menu-icon.png'
import closeicon from '../Icons/close-icon.png'

class Menu extends Component {
    constructor(){
        super();
        this.state = {
            ariaexpanded: false,
            datavisible: false,
            menuLabel: "Menú",
            menuIcon: hamburgericon
        }
    }

    onMenuClick = (event) => {
        const { ariaexpanded } = this.state
        // console.log({ariaexpanded});
        return (ariaexpanded) ?
        (
            this.setState ({
                ariaexpanded: false,
                datavisible: false,
                menuLabel: "Menú",
                menuIcon: hamburgericon
            })
        )
        :
        (
            this.setState ({
                ariaexpanded: true,
                datavisible: true,
                menuLabel: "Cerrar",
                menuIcon: closeicon
            })
        )
    }

    render(){
        const { ariaexpanded, datavisible,menuLabel,menuIcon } = this.state
        return (
            <div>
                <button className="MenuButton" aria-controls="NavigationDiv" aria-expanded={ariaexpanded} onClick={() => this.onMenuClick()}>
                    <span className="sr-only"></span>
                    <span className="menu__image" id="menuBtnImg"><img src={menuIcon} alt="MenuIcon" /></span>
                    <span className="menu__text" id="menuBtnText">{menuLabel}</span>
                </button>
                <div className="PrimeNavigation" id="NavigationDiv" data-visible={datavisible}>
                    <nav>
                        <h1><a href={MenuItems[0].link}>M & E</a></h1>
                    </nav>
                    <nav>
                        <ul>
                        {
                            MenuItems.map((user, i) =>{
                                return (
                                    <li key={i}><a href={MenuItems[i].link}>{MenuItems[i].name}</a></li>
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