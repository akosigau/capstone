/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import LineGraph from './Charts/LineGraph';
import LineChart from './Charts/LineChart';
import Donut from './Charts/Donut';
import SemiCircle from './Charts/SemiCircle';
import { BoltIcon } from '@heroicons/react/20/solid';
import { BeakerIcon } from '@heroicons/react/20/solid';
import { HeartIcon } from '@heroicons/react/24/solid';
import GoalsInstance from './GoalsInstance';
// import {Link} from 'react-router-dom';

class GoalsContent extends React.Component {
    

  render(){
    return (
        
            <div className="font-semibold overflow-hidden px-8 ">
            <p className="text-2xl font-bold my-10">Your Goal</p>

            <div className="grid grid-cols-4 grid-flow-col gap-0 justify-items-center">
            <div className="bg-teal-500	w-full h-44 p-5 rounded-lg relative">
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
                <GoalsInstance/>
            </div>
      

    );
  }
}

export default GoalsContent;
