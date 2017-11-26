import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
  handleRemoveClick = () => {
    const { item, onRemove } = this.props;
    onRemove(item.id);
  }

  handleCheckboxChange = () => {
    const { item, onCheckboxChange } = this.props;
    onCheckboxChange(item.id);
  }

  render() {
    const { item } = this.props;
    return (
      <article className="Item">
        <label htmlFor={item.id}>
          <input
            type="checkbox"
            checked={item.packed}
            onChange={this.handleCheckboxChange}
            id={item.id}
          />
          {item.value}
        </label>
        <button className="Item-remove" onClick={this.handleRemoveClick}>
          Remove
        </button>
      </article>
    );
  }
}

export default Item;
