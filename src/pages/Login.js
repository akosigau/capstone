/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {Link, Navigate} from 'react-router-dom';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import axios from 'axios';


class Login extends React.Component {

    state = {
      username: "",
      password: "",
      
    };
  
    onUserChange = e => {
      this.setState({
        username: e.target.value
      });
    };
  
    onPassChange = e => {
      this.setState({
        password: e.target.value
      });
    };
    

    handleSubmit = e => {
      e.preventDefault();
      const data = {
        username: this.state.username,
        password: this.state.password
      };
      axios
        .post("https://jsonplaceholder.typicode.com/posts", data)
        .then(res => console.log(res))
        .catch(err => console.log(err));
       
        if(data.username === 'akosigau'){
          <Navigate to="/dashboard"/>
        } else {
          console.log('wrong user')
        }
    };

    onLoginClick = () => {
      <Navigate to="/dashboard" replace="true" />
    }


 
  render(){
    console.log(this.state.username + " " + this.state.password)
    return (
      
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-screen">
        <div className="hidden sm:block">
            <img className="w-full h-full object-cover" alt="myimage" src={require('../assets/loginimg.jpg')} />
        </div>
        <div className="bg-gray-200 flex flex-col justify-center">
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-auto w-full"
              alt="Your Company"
              src={require('../assets/logo.png')}
            />
            <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-700">
              Sign in to your account
            </h2>
          </div>
          <form onSubmit={this.handleSubmit} className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter user name"
                  autoComplete="username"
                  value={this.state.username}
                  onChange={this.onUserChange}
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={this.state.password}
                  onChange={this.onPassChange}
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me 
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-orange-400 hover:text-orange-500 transition delay-75">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
        
              <button
                type="submit"
                className="transition delay-75 group relative flex w-full justify-center rounded-md border border-transparent bg-orange-400 py-2 px-4 text-sm font-medium text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                onClick={this.onLoginClick}
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-orange-700 group-hover:text-orange-200" aria-hidden="true" />
                </span>
                
                Sign in
              </button>
            
              <div className="text-sm">
                <p className="mt-2 text-center text-sm text-gray-600">Don't have an Accout?
                <Link to='/signup'>
                <a href="#" className="m-1 font-medium text-orange-400 hover:text-orange-500 transition delay-75">
                  Click here
                </a>
                </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
        </div>
      </div>
    );
  }
}

export default Login;
