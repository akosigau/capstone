/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import GoalsContent from '../components/GoalsContent';
import SideMenu from '../components/Sidemenu';
// import {Link} from 'react-router-dom';

class Goals extends React.Component {
    

  render(){
    return (

        <div className="w-full min-h-full flex flex-row">
          <div className="">
           <SideMenu /> </div>
        <section className="flex-1">
          <GoalsContent />
        </section>
        </div>
    );
  }
}

export default Goals;
