import React, { Component } from "react";
import ShoppingListForm from "./ShoppingListForm";
import uuid from "uuid/v4";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: "mold",
          qty: "2kg",
          id: uuid()
        },
        {
          name: "lice",
          qty: "3",
          id: uuid()
        }
      ]
    };
  }

  addItem = item => {
    let newItem = { ...item, id: uuid() };
    this.setState(st => ({
      // take old items add new item
      items: [...st.items, newItem]
    }));
  };

  renderItems = () => {
    return (
      <ul>
        {this.state.items.map(item => (
          <li key={item.id}>
            {item.name}: {item.qty}
          </li>
        ))}
      </ul>
    );
  };

  render() {
    return (
      <div>
        <h1>Shopping list</h1>
        {this.renderItems()}
        <ShoppingListForm addItem={this.addItem} />
      </div>
    );
  }
}
