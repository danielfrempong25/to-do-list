import React, { Component } from "react";
import TodoItems from "./TodoItems";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    e.preventDefault();
    if (this._inputElement.value !== "") {
      const newItem = {
        text: this._inputElement.value,
        key: Date.now(),
      };

      this.setState((prevState) => ({
        items: [...prevState.items, newItem],
      }));

      this._inputElement.value = "";
    }
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter((item) => item.key !== key);

    this.setState({
      items: filteredItems,
    });
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              ref={(a) => (this._inputElement = a)}
              placeholder="enter task"
            />
            <button type="submit">add</button>
          </form>
          <TodoItems entries={this.state.items} deleteItem={this.deleteItem} />
        </div>
      </div>
    );
  }
}

export default TodoList;
