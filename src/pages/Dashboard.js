/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import DashboardContent from '../components/DashboardContent';
import DashboardRight from '../components/DashboardRight';
import SideMenu from '../components/Sidemenu';
// import {Link} from 'react-router-dom';

class Dashboard extends React.Component {
    

  render(){
    return (

        <div className="w-full min-h-full flex flex-row">
          <div className="">
           <SideMenu /> </div>
        <section className="flex-1">
          <DashboardContent />
        </section>
        <section className="w-1/4 min-h-full bg-gray-300">
          <DashboardRight />
        </section>
        </div>
    );
  }
}

export default Dashboard;
