import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import TabContent from '../src/components/TabContent.jsx';

describe('Component: TabContent', () => {
  const minProps = {
    data: [
      {
        picture: 'mockPics1',
        name: 'mockName1',
        description: 'mockDescription1'
      },
      {
        picture: 'mockPics2',
        name: 'mockName2',
        description: 'mockDescription2'
      },
    ],
    activeId: 1
  }

  it('should render <TabContent /> components', () => {
    expect(shallow(<TabContent {...minProps} />).length).toEqual(1);
  });

  it('should render correctly', () => {
    const component = shallow(
      <TabContent {...minProps} />
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('renders an `.__active`', () => {
    const component = shallow(<TabContent {...minProps} />);
    expect(component.find('.__active').length).toEqual(1);
  });
});
