import React, { Component } from 'react';
import '../App.css';
import TopNav from './TopNav.js';


class App extends Component {
  constructor() {
      super();
      this.state = {
        data: [],
        index : [],
        home: true,
        gallery: false,
        about: false
      };
      this.gallery = this.gallery.bind(this);
      this.home = this.home.bind(this);
      this.about = this.about.bind(this);


  }
  componentWillMount() {
    console.log(this.state);
  }

  home() {
    this.setState({
      home: true,
      gallery: false,
      about: false
    })

  }

  gallery() {
    this.setState({
      home: false,
      gallery: true,
      about: false
    })
    console.log(this.state);
  }

  about() {
    this.setState({
      home: false,
      gallery: false,
      about: true
    })
  }
  render() {
    if (this.state.home === true) {
      return (
        <div className="background">
          <TopNav
            home = {this.home}
            gallery = {this.gallery}
            about = {this.about}
           />
          <div className="pusher">
            <div className="ui vertical masthead center aligned segment">
              <div id ="body">
              <div id="textbackground">
                <div className="ui text container">
                  <h1 className="ui header">
                    King Bean
                  </h1>
                  <h2>
                    Portect Your Bean
                  </h2>
                  <div id="textbox">
                  </div>
                  <div id="hometext">
                    <h2>
                    </h2>
                  </div>
                </div>
                <div id="homeboxfeatured">
                  <h1> Featured Items </h1>
                    <div id="homegridfeatured">
                      <div className="ui two column grid">
                        <div className="column">
                        </div>
                        <div className="column">
                        </div>
                      </div>
                    </div>
                </div>
                <div id="homeboxabout">
                  <div className="ui grid">
                    <div className="six wide column">
                      <img src="" alt="">
                      </img>
                    </div>
                    <div className="ten wide column">
                      <h1 className="ui header">
                      T
                      </h1>
                      <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                      </p>
                      <h3>
                      </h3>
                    </div>
                  </div>
                </div>
                <div id="homeboxbypa">
                  <div className="ui grid">
                    <div className="eight wide column">
                      <h1 className="ui header">

                      </h1>
                      <h2>
                      Mission Statement:
                      </h2>
                      <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                      </p>
                      <h3>
                      </h3>
                    </div>
                    <div className="eight wide column">
                      <img src="" alt="">
                      </img>
                    </div>

                  </div>
                </div>
                <div id="homeboxcontact">
                  <div className="ui grid">
                    <div className="three wide column"></div>
                    <div className="ten wide column">
                      <h1 className="ui header">
                        Contact Me
                      </h1>
                      <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                      </p>
                      <h3>
                      </h3>
                    </div>
                    <div className="three wide column">
                    </div>

                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    else if (this.state.gallery === true) {
      return (
        <div className="background">
          <TopNav
            home = {this.home}
            gallery = {this.gallery}
            about = {this.about}
           />
          <div className="pusher">
            <div className="ui vertical masthead center aligned segment">
              <div id ="body">
              <div id="textbackground">
                <div className="ui text container">
                  <h1 className="ui header">
                    Gallery
                  </h1>
                  <h2>
                    Bean
                  </h2>
                  <div id="textbox">
                  </div>
                  <div id="hometext">
                    <h2>
                    </h2>
                  </div>
                </div>
                <div id="homeboxfeatured">
                  <h1> Featured Items </h1>
                    <div id="homegridfeatured">
                      <div className="ui two column grid">
                        <div className="column">
                        </div>
                        <div className="column">
                        </div>
                      </div>
                    </div>
                </div>
                <div id="homeboxabout">
                  <div className="ui grid">
                    <div className="six wide column">
                      <img src="" alt="">
                      </img>
                    </div>
                    <div className="ten wide column">
                      <h1 className="ui header">
                      T
                      </h1>
                      <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                      </p>
                      <h3>
                      </h3>
                    </div>
                  </div>
                </div>
                <div id="homeboxbypa">
                  <div className="ui grid">
                    <div className="eight wide column">
                      <h1 className="ui header">

                      </h1>
                      <h2>
                      Mission Statement:
                      </h2>
                      <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                      </p>
                      <h3>
                      </h3>
                    </div>
                    <div className="eight wide column">
                      <img src="" alt="">
                      </img>
                    </div>

                  </div>
                </div>
                <div id="homeboxcontact">
                  <div className="ui grid">
                    <div className="three wide column"></div>
                    <div className="ten wide column">
                      <h1 className="ui header">
                        Contact Me
                      </h1>
                      <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                      </p>
                      <h3>
                      </h3>
                    </div>
                    <div className="three wide column">
                    </div>

                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    else if (this.state.about === true) {
      return (
        <div className="background">
          <TopNav
            home = {this.home}
            gallery = {this.gallery}
            about = {this.about}
           />
          <div className="pusher">
            <div className="ui vertical masthead center aligned segment">
              <div id ="body">
              <div id="textbackground">
                <div className="ui text container">
                  <h1 className="ui header">
                    About
                  </h1>
                  <h2>
                    Bean
                  </h2>
                  <div id="textbox">
                  </div>
                  <div id="hometext">
                    <h2>
                    </h2>
                  </div>
                </div>
                <div id="homeboxfeatured">
                  <h1> Featured Items </h1>
                    <div id="homegridfeatured">
                      <div className="ui two column grid">
                        <div className="column">
                        </div>
                        <div className="column">
                        </div>
                      </div>
                    </div>
                </div>
                <div id="homeboxabout">
                  <div className="ui grid">
                    <div className="six wide column">
                      <img src="" alt="">
                      </img>
                    </div>
                    <div className="ten wide column">
                      <h1 className="ui header">
                      T
                      </h1>
                      <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                      </p>
                      <h3>
                      </h3>
                    </div>
                  </div>
                </div>
                <div id="homeboxbypa">
                  <div className="ui grid">
                    <div className="eight wide column">
                      <h1 className="ui header">

                      </h1>
                      <h2>
                      Mission Statement:
                      </h2>
                      <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                      </p>
                      <h3>
                      </h3>
                    </div>
                    <div className="eight wide column">
                      <img src="" alt="">
                      </img>
                    </div>

                  </div>
                </div>
                <div id="homeboxcontact">
                  <div className="ui grid">
                    <div className="three wide column"></div>
                    <div className="ten wide column">
                      <h1 className="ui header">
                        Contact Me
                      </h1>
                      <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                      </p>
                      <h3>
                      </h3>
                    </div>
                    <div className="three wide column">
                    </div>

                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

}

export default App;
