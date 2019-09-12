import React, { Component } from 'react';


class Item extends Component {

  constructor(props) {
    super(props);
    this.state = {
      toBeUpdated: false,
      title: '',
      description: '',
      photo: ''
    }
  }


  componentDidMount(){
    console.log("item props", this.props)
  }


  render() {
      return (
        <div id="box">
          <h1>{this.props.id}</h1>

          <div id="imagecover">
            <img src='https://i.imgur.com/jESF2.jpg?1' alt="cover"></img>
          </div>
          <h2>PRICE</h2>
        </div>
      )

  }
}

export default Item;
