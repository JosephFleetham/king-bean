import React, { Component } from 'react';
import '../App.css';
// import { login, logout, isLoggedIn } from '../utils/AuthService';
import $ from 'jquery';

class TopNav extends Component {
  constructor() {
    super();
    this.state = {
      dropdownOpen: false
    };
  }
  componentDidMount () {
    console.log(this.state.dropdownOpen)
  }
  toggleForm(e) {
    e.preventDefault();
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
    if (this.state.dropdownOpen === true) {
      $('#menu').slideUp();
    }
    else {
      $('#menu').slideDown();
    }
  }
  render() {
    return (
      <div id="topnav">
        <div className="ui vertical masthead center aligned segment">
          <div className="ui container">
            <div id="navtext">
              <div className="ui large secondary pointing menu">
                <a className="item">
                  <div id="logo">
                    <img src="https://i.imgur.com/I4mggYx.png" alt="king bean" />
                  </div>
                </a>
                  <a className="item">
                    About King Bean
                  </a>
                  <a className="item">
                    Products
                  </a>
                  <a className="item">
                    Contact
                  </a>
                <div className="column">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopNav;
