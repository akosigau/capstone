/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'

class Signup extends React.Component {

 state = {
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      emailaddress: "",
      country: ["Philippines","Canada","Mexico"],
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
      password: this.state.password,
      email: this.state.email,
      country: this.state.country,
      street: this.state.street,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip
    };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render(){
    console.log(this.state.firstname + this.state.lastname + this.state.username + this.state.password)
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-screen">
        <div className="hidden sm:block">
            <img className="w-full h-full object-cover" alt="myimage" src={require('../assets/loginimg.jpg')} />
        </div>
        <div className="bg-gray-200 flex flex-col justify-center">
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:grid md:grid-cols-2 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Sign Up</h3>
              <p className="mt-1 text-sm text-gray-600">Register once and be better everyday and every way.</p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={this.handleSubmit}>
           
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">

                    
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        First name
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
                        Last name
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
                        Username
                      </label>
                      <input
                        type="text"
                        name="username"
                        placeholder="Enter user name"
                        autoComplete="username"
                        value={this.state.username}
                        onChange={this.onChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="pass-word" className="block text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <input
                       type="password"
                       name="password"
                       placeholder="Enter password"
                       value={this.state.password}
                       onChange={this.onChange}
                       autoComplete="current-password"
                       required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                     />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="emailaddress"
                        autoComplete="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        value={this.state.country}
                        onChange={this.onCountryChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                      >
                        <option>Philippines</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        Street address
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

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        value={this.state.city}
                        onChange={this.onChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                        State / Province
                      </label>
                      <input
                        type="text"
                        name="state"
                        id="region"
                        autoComplete="address-level1"
                        value={this.state.state}
                        onChange={this.onChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                        ZIP / Postal code
                      </label>
                      <input
                        type="text"
                        name="zip"
                        id="postal-code"
                        autoComplete="postal-code"
                        value={this.state.zip}
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
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
            <div className="text-sm">
                <p className="mt-2 text-center text-sm text-gray-600">Already have an Account?
                <Link to='/'>
                <a href="#" className="m-1 font-medium text-orange-400 hover:text-orange-500 transition delay-75">
                  Click here
                </a>
                </Link>
                </p>
              </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    );
  }
}

export default Signup;
