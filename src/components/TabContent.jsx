import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Description from './Description.jsx';
import Details from './Details.jsx';


class TabContent extends Component {
  render() {
    let activeClass = this.props.activeId;

    /**
     * render TabContent for each element of data
     */
    let content = this.props.data.map((item, index) => {
      return (
        <div
          key={`content ${item.id}`}
          className={`phases-tabbox ${activeClass === index ? '__active' : ''}`}
        >
          <div className="phases-content">
            <Description
              picture={item.picture}
              name={item.name}
              description={item.description}
            />
            <hr />
            <Details />
          </div>
        </div>
      )
    });

    return (
      <div className="phases-container">{content}</div>
    );
  }
}

TabContent.propTypes = {
  activeId: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
};

export default TabContent;
