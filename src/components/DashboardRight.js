/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { MapPinIcon } from '@heroicons/react/20/solid'
import RoundChart from './Charts/RoundChart';
import StrokedGauge from './Charts/StrokedGauge';
import {Link} from 'react-router-dom';

class DashboardRight extends React.Component {
    

  render(){
    return (
        
            <div className="p-7 font-semibold overflow-hidden px-8 ">
            
              <div className="grid grid-col-3 grid-flow-col items-center">
                <img className="border-2 border-orange-600 row-span-1 w-14 h-14 object-contain rounded-full" alt="myimage" src={require('../assets/profile.jpg')} />
                <div className="col-span-6">
                <p className="">James Dabalus</p>
                <p className="text-slate-400 text-xs left-5 relative">
                <span className="absolute -left-9 flex items-center pl-3"><MapPinIcon className="h-5 w-5 text-orange-700 group-hover:text-orange-200" aria-hidden="true" /></span>  
                    Manila, Philippines</p>
                </div>
              </div>

              <div className="w-full h-16 bg-white rounded-lg mt-4 ">
                <div className="grid grid-rows-2 grid-flow-col items-center p-1 divide-x">
                <div  className="row-span-2 ">
                <p className="font-bold text-2xl text-center ">65<span className="font-normal text-sm text-slate-400">kg</span></p>
                <p className="font-normal text-1xl text-center text-slate-500">Weight</p>
                </div>
                <div  className="row-span-2">
                <p className="font-bold text-2xl text-center ">5'6</p>
                <p className="font-normal text-1xl text-center text-slate-500">Height</p>
                </div>
                <div  className="row-span-2">
                <p className="font-bold text-2xl text-center ">25</p>
                <p className="font-normal text-1xl text-center text-slate-500">Age</p>
                </div>
                </div>
              </div>

              <div className="w-full h-80 mt-5 ">
                <p className="text-2xl font-bold">Your Goal</p>
                <div className="grid grid-rows-3 grid-flow-col gap-4 mt-5 ">
                  <Link to='/goals'>
                    <div className="grid grid-cols-4 grid-flow-col bg-white rounded-lg p-2 cursor-pointer hover:bg-orange-500 transition delay-75">
                        <img className="row-span-1 w-14 h-14 object-contain rounded-half" alt="myimage" src={require('../assets/placeholder.png')} />
                        <div className="col-span-2">
                        <p className="font-bold text-base ">Pull Ups</p>
                        <p className="font-normal text-sm text-slate-500">1500/2000 Reps</p>
                        </div>
                        <div className="h-12"><RoundChart/></div>
                    </div>
                  </Link>
                    <div className="grid grid-cols-4 grid-flow-col bg-white rounded-lg p-2 hover:bg-orange-500 transition delay-75">
                        <img className="row-span-1 w-14 h-14 object-contain rounded-half" alt="myimage" src={require('../assets/placeholder.png')} />
                        <div className="col-span-2">
                        <p className="font-bold text-base">Push Ups</p>
                        <p className="font-normal text-sm text-slate-500">1900/2000 Reps</p>
                        </div>
                        <div className="h-16"><RoundChart/></div>
                    </div>
                    <div className="grid grid-cols-4 grid-flow-col bg-white rounded-lg p-2 hover:bg-orange-500 transition delay-75">
                        <img className="row-span-1 w-14 h-14 object-contain rounded-half" alt="myimage" src={require('../assets/placeholder.png')} />
                        <div className="col-span-2">
                        <p className="font-bold text-base">Weight Progress</p>
                        <p className="font-normal text-sm text-slate-500">60/65 Kg</p>
                        </div>
                        <div className="h-16"><RoundChart/></div>
                    </div>
                </div>
                <p className="text-sm text-right mt-1">See more...</p>
              </div>

              <div className="w-full h-48 mt-5 relative">
                <p className="text-2xl font-bold">Monthly Progress</p>
                <div className="w-full h-36 mt-3 bg-white rounded-lg">
                <div className="absolute left-20"><StrokedGauge/></div>
                </div>
              </div>

              <div className="w-full h-48 mt-5">
                <p className="text-2xl font-bold">Events</p>
                <div className="grid grid-rows-3 grid-flow-col gap-4 mt-5 ">
                    <div className="grid grid-cols-4 grid-flow-col bg-white rounded-lg p-2 hover:bg-orange-500 transition delay-75">
                        <img className="row-span-1 w-14 h-14 object-contain rounded-half" alt="myimage" src={require('../assets/placeholder.png')} />
                        <div className="col-span-2">
                        <p className="font-bold text-base ">Spartan Race</p>
                        <p className="font-normal text-sm text-slate-500">Competition</p>
                        </div>
                        <p className="col-span-2 font-normal text-sm text-slate-500 self-center">Sept 14</p>
                    </div>
                    <div className="grid grid-cols-4 grid-flow-col bg-white rounded-lg p-2 hover:bg-orange-500 transition delay-75">
                        <img className="row-span-1 w-14 h-14 object-contain rounded-half" alt="myimage" src={require('../assets/placeholder.png')} />
                        <div className="col-span-2">
                        <p className="font-bold text-base">World Pull Up Day</p>
                        <p className="font-normal text-sm text-slate-500">Marathon</p>
                        </div>
                        <p className="col-span-2 font-normal text-sm text-slate-500 self-center">Feb 17</p>
                    </div> 
                   
                </div>
                
              </div>
              <p className="text-sm text-right mt-6">See more...</p>
            </div>
      

    );
  }
}

export default DashboardRight;
