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


  componentWillMount(){
    console.log(this.props)
  }


  render() {
      return (
        <div id="box">
          <div id="itemcover">



          </div>
        </div>
      )

  }
}

export default Item;
