import React, { Component } from "react";

export default class ShoppingListForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", qty: "" };
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.addItem(this.state);
    this.state({ name: "", qty: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label htmlFor="qty">Quantity:</label>
        <input
          type="text"
          id="qty"
          name="qty"
          value={this.state.qty}
          onChange={this.handleChange}
        />
        <input type="submit" name="" id="" />
      </form>
    );
  }
}
