import React, { Component } from 'react';
import Item from './Item';
import Filter from './Filter';

class Items extends Component {
  state = {
    searchTerm: ''
  };

  updateSearchTerm = searchTerm => {
    this.setState(
      Object.assign({}, this.state, { searchTerm })
    );
  };

  render() {
    const { title, items, onRemove, onCheckboxChange } = this.props;
    const { searchTerm } = this.state || '';
    return (
      <section className="Items">
        <h2>
          {title} ({items.length})
        </h2>
        <Filter searchTerm={searchTerm} onChange={this.updateSearchTerm} />
        {items
          .filter(item => item.value.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(item => (
            <Item
              key={item.id}
              onCheckboxChange={onCheckboxChange}
              item={item}
              onRemove={onRemove}
            />
          ))}
      </section>
    );
  }
}

export default Items;
