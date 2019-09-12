import React, { Component } from 'react';
import '../App.css';
// import { login, logout, isLoggedIn } from '../utils/AuthService';
import $ from 'jquery';

class TopNav extends Component {
  constructor(props) {
      super(props);
      this.state = {
        home: this.props.home,
        about: this.props.about,
        gallery: this.props.gallery
      };
  }
  componentDidMount () {

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
                    <img src="https://i.imgur.com/I4mggYx.png" alt="king bean" onClick={this.props.home}/>
                  </div>
                </a>
                  <a className="item" onClick={this.props.about}>
                    About King Bean
                  </a>
                  <a className="item" onClick={this.props.gallery}>
                    Gallery
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
