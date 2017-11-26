import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import CountDown from './CountDown';
import NewItem from './NewItem';
import Items from './Items';

import './Application.css';

const defaultState = [
  { value: 'Pants', id: uniqueId(), packed: false },
  { value: 'Jacket', id: uniqueId(), packed: false },
  { value: 'iPhone Charger', id: uniqueId(), packed: false },
  { value: 'MacBook', id: uniqueId(), packed: false },
  { value: 'Sleeping Pills', id: uniqueId(), packed: true },
  { value: 'Underwear', id: uniqueId(), packed: false },
  { value: 'Hat', id: uniqueId(), packed: false },
  { value: 'T-Shirts', id: uniqueId(), packed: false },
  { value: 'Belt', id: uniqueId(), packed: false },
  { value: 'Passport', id: uniqueId(), packed: true },
  { value: 'Sandwich', id: uniqueId(), packed: true },
];

class Application extends Component {
  state = {
    items: defaultState || []
  };

  // How are we going to manipualte the state?
  // Ideally, users are going to want to add, remove,
  // and check off items, right?
 
  handleMarkAllUnpacked  = () => {
    this.setState(
      Object.assign({}, this.state, {
        items: this.state.items.map(item => {
          return Object.assign({}, item, { packed: false });
        })
      })
    );
  }

  handleAddItem = itemValue => {
    this.setState(
      Object.assign({}, this.state, {
        items: [].concat(this.state.items, {
          value: itemValue,
          id: uniqueId(),
          packed: false
        })
      })
    );
  }
  
  handleRemoveItem = id => {
    this.setState(
      Object.assign({}, this.state, {
        items: this.state.items.filter(item => item.id !== id)
      })
    );
  }

  handleToggleItem = id => {
    const { items } = this.state;
    this.setState(
      Object.assign({}, this.state, {
        items: items.map(item => {
          if(item.id === id) {
            return Object.assign({}, item, { packed: !item.packed });
          }
          return item;
        })
      })
    );
  }

  render() {
    const { items } = this.state;

    return (
      <div className="Application">
        <NewItem onSubmit={this.handleAddItem} />
        <CountDown />
        <Items 
          title="Unpacked Items"
          items={items}
          showPacked={false}
          onRemove={this.handleRemoveItem}
          onCheckboxChange={this.handleToggleItem}
        />
        <Items
          title="Packed Items"
          items={items}
          showPacked={true} 
          onRemove={this.handleRemoveItem}
          onCheckboxChange={this.handleToggleItem}
        />
        <button onClick={this.handleMarkAllUnpacked} className="button full-width">Mark All As Unpacked</button>
      </div>
    );
  }
}

export default Application;
