/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import axios from 'axios'
import RoundChart from './Charts/RoundChart';

class GoalsInstance extends React.Component {

 state = {
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      emailaddress: "",
      country: ["Strength","Cardio","Stretching"],
      street: "",
      city: "",
      state: "",
      zip: ""
    };
  
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onCountryChange = e => {
    this.setState({
      country: e.target.value
    });
  };

  onSignupClick = () => {
  
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      username: this.state.username,
      country: this.state.country,
      street: this.state.street
    };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render(){
    console.log(this.state.firstname + this.state.lastname + this.state.username + this.state.password)
    return (

      <div className="grid grid-cols-2 h-full w-full">

        <div className="grid grid-rows-3 grid-flow-col gap-0 mt-10">
                    <div className="grid grid-cols-4 grid-flow-col bg-white rounded-lg p-2">
                        <img className="row-span-1 w-14 h-14 object-contain rounded-half" alt="myimage" src={require('../assets/placeholder.png')} />
                        <div className="col-span-2">
                        <p className="font-bold text-base ">Pull Ups</p>
                        <p className="font-normal text-sm text-slate-500">1500/2000 Reps</p>
                        </div>
                        <div className="h-12"><RoundChart/></div>
                    </div>
                    <div className="grid grid-cols-4 grid-flow-col bg-white rounded-lg p-2">
                        <img className="row-span-1 w-14 h-14 object-contain rounded-half" alt="myimage" src={require('../assets/placeholder.png')} />
                        <div className="col-span-2">
                        <p className="font-bold text-base">Push Ups</p>
                        <p className="font-normal text-sm text-slate-500">1900/2000 Reps</p>
                        </div>
                        <div className="h-12"><RoundChart/></div>
                    </div>
                    <div className="grid grid-cols-4 grid-flow-col bg-white rounded-lg p-2">
                        <img className="row-span-1 w-14 h-14 object-contain rounded-half" alt="myimage" src={require('../assets/placeholder.png')} />
                        <div className="col-span-2">
                        <p className="font-bold text-base">Weight Progress</p>
                        <p className="font-normal text-sm text-slate-500">60/65 Kg</p>
                        </div>
                        <div className="h-12"><RoundChart/></div>
                    </div>
                    
                </div>
               

                
        <div className=" flex flex-col justify-center">
        <div className=" min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:grid md:grid-cols-2 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Add Goals</h3>
              <p className="mt-1 text-sm text-gray-600">More Goals More Results!</p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={this.handleSubmit}>
           
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">

                    
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Current Progress
                      </label>
                      <input
                        type="text"
                        name="firstname"
                        id="first-name"
                        autoComplete="given-name"
                        value={this.state.firstname}
                        onChange={this.onChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        End Goal
                      </label>
                      <input
                        type="text"
                        name="lastname"
                        id="last-name"
                        autoComplete="family-name"
                        value={this.state.lastname}
                        onChange={this.onChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="user-name" className="block text-sm font-medium text-gray-700">
                        Workout
                      </label>
                      <input
                        type="text"
                        name="username"
                        placeholder="Type of workout"
                        autoComplete="username"
                        value={this.state.username}
                        onChange={this.onChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                      />
                    </div>
        
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Practice
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        value={this.state.country}
                        onChange={this.onCountryChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                      >
                        <option>Calisthenics</option>
                        <option>Stretching</option>
                        <option>Cardio</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        Description
                      </label>
                      <input
                        type="text"
                        name="street"
                        id="street-address"
                        autoComplete="street-address"
                        value={this.state.street}
                        onChange={this.onChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button 
                    onClick={this.onSignupClick}
                    className="inline-flex justify-center rounded-md border border-transparent bg-orange-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  > Add Goal
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
        </div>
      </div>
    );
  }
}

export default GoalsInstance;
