import React, { Component } from 'react';

import TabHeader from '../components/TabHeader.jsx';
import TabContent from '../components/TabContent.jsx';
import data from '../../clubsInfo.json';


class Tabs extends Component {
  constructor() {
    super();

    this.state = {
      activeTab: 0,
      data: data
    }
  }

  /**
   * @param {number} index
   * method for getting clicked Tab index
   */
  changeTabOnClick = index => {
    this.setState({
      activeTab: index
    });
  }

  render() {
    const {
      data,
      activeTab
    } = this.state;
    return (
      <section className="phases">
        <div className="box foo">
          {data.length !== 0 ?
            <div className="phases-table">
              <TabHeader
                data={data}
                onClick={this.changeTabOnClick}
                activeId={activeTab}
              />
              <TabContent
                data={data}
                activeId={activeTab}
              />
            </div>
            : <h1>No Data</h1>
          }
        </div>
      </section>
    )
  }
}

export default Tabs;
