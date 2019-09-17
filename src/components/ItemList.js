import React, { Component } from 'react';
import Item from './Item.js';
import '../App.css';

class ItemList extends Component {
  constructor() {
      super();
      this.state = {

      };


  }

  componentDidMount(){
    console.log("item list props", this.props);
  }

  render() {
    const items = this.props.items.map((item) => (
      <Item
        id={item.id}
      />
    ));
          console.log("items", items);
    return (
      <div id="body">
        <div id ="gallerybody">
          <h1>Gallery</h1>
          <div id="list">
            <div className="ui two stackable cards">
              {items}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemList;
