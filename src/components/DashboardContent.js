/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import LineGraph from './Charts/LineGraph';
import LineChart from './Charts/LineChart';
import Donut from './Charts/Donut';
import SemiCircle from './Charts/SemiCircle';
import { BoltIcon } from '@heroicons/react/20/solid';
import { BellIcon } from '@heroicons/react/24/outline';
import { BeakerIcon } from '@heroicons/react/20/solid';
import { HeartIcon } from '@heroicons/react/24/solid';
import { StarIcon } from '@heroicons/react/24/solid';
import { HandThumbUpIcon } from '@heroicons/react/20/solid';
import Distributed from './Charts/Distributed';
import Donutchart from './Charts/DonutDynamic';
import StackedBar from './Charts/StackedBar';


// import {Link} from 'react-router-dom';

class DashboardContent extends React.Component {
    

  render(){
    return (

       
            <div className="">
            <div className="p-7 grid grid-rows-2 grid-flow-col">
              <div className="col-span-2">
                <p className="">Good Morning!</p>
              </div>
              <div className="row-span-1 col-span-3">
                <p className="text-2xl font-bold">Welcome Back 🎉</p>
              </div>
              <div className="justify-self-end flex gap-5 items-center row-span-2">
              <button type="button" className="bg-orange-500 px-4 py-2 text-white rounded" >Support</button>
              <div className="">
              <BellIcon className="h-5 w-5 text-orange-700 group-hover:text-orange-200" aria-hidden="true" />
              </div>
              </div> 
            </div>

            <div className="grid grid-cols-4 grid-flow-col gap-0 justify-items-center">
            <div className="bg-teal-500	w-5/6 h-44 p-5 rounded-lg relative">
              <p className="flex text-slate-200 text-lg font-bold "><span className="pr-1 self-center"> 
                  <BoltIcon className="h-5 w-5 text-slate-200 group-hover:text-orange-200" aria-hidden="true" />
                </span>Steps</p>
              <p className="font-bold text-2xl text-slate-200 mt-2">2500 Steps</p>
              <div className="w-44 -mt-7 absolute left-4"><LineGraph/></div>
              <p className="flex text-slate-200 text-sm mt-10">50% of your Goal</p>
            </div>

            <div className="bg-orange-500 w-5/6 h-44 p-5 rounded-lg relative">
            <p className="flex text-slate-200 text-lg font-bold "><span className="pr-1 self-center"> 
                  <BeakerIcon className="h-5 w-5 text-slate-200 group-hover:text-orange-200" aria-hidden="true" />
                </span>Water</p>
              <div className=""><Donut/></div>
            </div>

            <div className="bg-pink-400	w-5/6 h-44 p-5 rounded-lg relative">
            <p className="flex text-slate-200 text-lg font-bold "><span className="pr-1 self-center"> 
                  <BoltIcon className="h-5 w-5 text-slate-200 group-hover:text-orange-200" aria-hidden="true" />
                </span>Calories</p>
              <div className=""><SemiCircle/></div>
              <p className="flex text-slate-200 text-sm justify-center">Over</p>
            </div>

            <div className="bg-violet-500	w-5/6 h-44 p-5 rounded-lg relative">
            <p className="flex text-slate-200 text-lg font-bold "><span className="pr-1 self-center"> 
                  <HeartIcon className="h-5 w-5 text-slate-200 group-hover:text-orange-200" aria-hidden="true" />
                </span>Heart Rate</p>
             <div className='grid grid-cols-3 gap-0'>
              <div className="w-44 -mt-7"><LineChart/></div>
              <p className="text-slate-200 text-sm mt-20 col-span-2"><span className="text-2xl font-bold">110</span> bpm</p>
             </div>
            </div>

            </div>


              <div className="grid grid-cols-2 grid-flow-col justify-items-center mt-5">
                <div className="bg-slate-100 w-11/12 h-full p-5 rounded-lg relative">
                  <p className="text-slate-500 text-lg font-bold ">Activity</p>
                  <div className="mx-auto"><Distributed/></div>
                </div>

                <div className="bg-slate-100	w-11/12 h-full p-5 rounded-lg relative">
                  <p className="text-slate-500 text-lg font-bold ">Progress</p>
                  <div className=""><Donutchart/></div>
                </div>

              </div>
              
              <div className="w-full h-full px-6 pt-6 flex gap-14">
                
                <div className="flex-1">
                <p className="text-2xl font-bold ">Recomended Trainer for you</p>
                  <div className="grid grid-cols-2 grid-flow-col mt-5 gap-5 ">
                    {/* Profile 1 */}
                    <div className="bg-slate-100 p-2 rounded-lg relative">
                    <img
                      className={`h-1/2 w-full object-cover rounded-lg`}
                      alt="Your Company"
                      src={require('../assets/loginimg.jpg')}
                    />
                    <img
                      className={`h-16 w-16 object-cover rounded-lg border-2 border-white cursor-pointer duration 500 absolute top-24 left-5`}
                      alt="Your Company"
                      src={require('../assets/profile.jpg')}
                    />
                    <div className="p-4">
                    <p className="text-slate-500 text-lg font-bold">James Dabalus</p>
                    <p className="text-slate-500 text-sm ">Calisthenics Expert</p>
                    </div>

                    <div className="px-4">
                    <div class="grid grid-cols-3 gap-4 items-center">
                        <div>
                        <StarIcon className="h-5 w-5 text-orange-700 group-hover:text-orange-200" aria-hidden="true" />
                        <p className="text-slate-500 text-sm ">25</p>
                        </div>
                        <div>
                        <HandThumbUpIcon className="h-5 w-5 text-orange-700 group-hover:text-orange-200" aria-hidden="true" />
                        <p className="text-slate-500 text-sm ">104</p>
                        </div>
                        <p className="text-indigo-500 text-xs ">View Profile</p>
                      </div>
                    </div>
                      
                    </div>

                    {/* Profile 2 */}
                    <div className="bg-slate-100 p-2 rounded-lg relative">
                    <img
                      className={`h-1/2 w-full object-cover rounded-lg`}
                      alt="Your Company"
                      src={require('../assets/backlever.jpg')}
                    />
                    <img
                      className={`h-16 w-16 object-cover rounded-lg border-2 border-white cursor-pointer duration 500 absolute top-24 left-5`}
                      alt="Your Company"
                      src={require('../assets/profile2.jpg')}
                    />
                    <div className="p-4">
                    <p className="text-slate-500 text-lg font-bold">Frank Medrano</p>
                    <p className="text-slate-500 text-sm ">Fitness Expert</p>
                    </div>

                    <div className="px-4">
                    <div class="grid grid-cols-3 gap-4 items-center">
                        <div>
                        <StarIcon className="h-5 w-5 text-orange-700 group-hover:text-orange-200" aria-hidden="true" />
                        <p className="text-slate-500 text-sm ">25</p>
                        </div>
                        <div>
                        <HandThumbUpIcon className="h-5 w-5 text-orange-700 group-hover:text-orange-200" aria-hidden="true" />
                        <p className="text-slate-500 text-sm ">104</p>
                        </div>
                        <p className="text-indigo-500 text-xs ">View Profile</p>
                      </div>
                    </div>
                      
                    </div>

                  </div>
                </div>

                <div className="flex-1">
                  <p className="text-2xl font-bold">Featured Diet</p>
                    <div className="grid grid-cols-1 grid-flow-col justify-items-center">
                      <div className="bg-slate-50	w-full h-11/12 p-5 rounded-lg m-5 ">

                      <div className="p-5 grid grid-cols-2 grid-flow-col bg-cyan-50 rounded-lg">
                            <div className="">
                              <p className="text-xl font-bold text-indigo-400">Breakfast</p>
                            </div>
                            <div className="justify-self-end">
                            <p className="text-xl font-bold">10:00am</p>
                            </div> 
                        </div>

                        <div className="p-5 grid grid-cols-2 grid-flow-col bg-white rounded-lg mt-5 justify-start">
                            <div className="w-24">
                            <img className="row-span-1 w-full h-full object-contain rounded-half" alt="myimage" src={require('../assets/placeholder.png')} />
                            </div>
                            
                            <div className="justify-start"><StackedBar/></div>
                            
                        </div>
                        <p className="text-sm text-right mt-2">See more...</p>
                    </div>
                  </div>
                </div>
                
              </div>

            </div>

    );
  }
}

export default DashboardContent;
