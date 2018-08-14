import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab.jsx';


class TabHeader extends Component {
  render() {
    let activeClass = this.props.activeId;

    /**
     * render Tab for each element of data
     */
    let tabs = this.props.data.map((item, index) => {
      return (
        <Tab
          key={`content ${item.id}`}
          activeClass={`phase-${index + 1} ${activeClass === index ? '__active' : ''}`}
          name={item.name}
          index={index}
          onClick={this.props.onClick}
        />
      )
    });

    return (
      <ul className="phases-tabs">{tabs}</ul>
    )
  }
}

TabHeader.propTypes = {
  onClick: PropTypes.func.isRequired,
  activeId: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
};

export default TabHeader;
