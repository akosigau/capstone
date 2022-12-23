/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { ArrowLeftCircleIcon } from "@heroicons/react/20/solid";
import {Link} from 'react-router-dom';

class SideMenu extends React.Component {

    constructor(props) {
        
        super(props);
        this.state = {
            collapse: true,
         
        };  
    }

  render(){

    const Menus = [
        { title: "Dashboard", src: "Dashboard", link: "/dashboard" },
        { title: "Goal", src: "Goal", link: "/goals" },
        { title: "Activity", src: "Activity"},
        { title: "Community ", src: "Community", gap: true},
        { title: "Events", src: "Events" },
        { title: "Support", src: "Support" , gap: true },
        { title: "Setting ", src: "Setting"},
        { title: "Logout", src: "Logout" },
      ];

    return (

            
            
            <div className={`${this.state.collapse ? "w-52" : "w-12"} w-52 h-screen bg-slate-200 relative duration-300`}>
            <ArrowLeftCircleIcon className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-orange border-2 ${!this.state.collapse && 'rotate-180'}`}
                onClick={() => this.setState({collapse: !this.state.collapse})}
            />
            <div className="flex gap-x-4 items-center">
            <img
              className={`mx-auto h-auto w-full cursor-pointer duration 500`}
              alt="Your Company"
              src={require('../assets/logo.png')}
            />
            </div>

            <ul className="pt-6">
                {Menus.map((menu,index) =>(
                    <li key={index} className={`flex p-4 cursor-pointer hover:bg-slate-400 text-black text-sm items-center gap-x-4 
                    ${menu.gap ? "mt-9" : "mt-2"} ${
                      index === 0 && "bg-light-white"
                    } `}>
                     <img className="w-4" src={require(`../assets/${menu.src}.png`)} /> 
                     <span className={`${!this.state.collapse && "hidden"} origin-left duration-200 `}>
                    <Link to={`${menu.link}`}>
                    {menu.title}
                    </Link>
                    </span>
                    </li>
                ))}
            </ul>

            </div>
            
    );
  }
}

export default SideMenu;
