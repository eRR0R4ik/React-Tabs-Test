import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Tab extends Component {

  /**
   * @param {number} index
   * handle click and pass index as param
   */
  handleClick(index) {
    this.props.onClick(index);
  }

  render() {
    const {
      activeClass,
      index,
      name
    } = this.props;
    return (
      <li>
        <a
          data-phase={index + 1}
          className={activeClass}
          onClick={this.handleClick.bind(this, index)}
        >
          {name}
        </a>
      </li>
    );
  }
}

Tab.propTypes = {
  activeClass: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tab;
