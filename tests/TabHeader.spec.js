import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import TabHeader from '../src/components/TabHeader.jsx';

describe('Component: TabHeader', () => {
  const testFunction = () => true;
  const minProps = {
    data: [
      {
        picture: 'mockPics1',
        name: 'mockName1',
        index: 0
      },
      {
        picture: 'mockPics2',
        name: 'mockName2',
        index: 1
      },
    ],
    onClick: testFunction,
    activeId: 1
  }
  it('correctly pass props into TabHeader', () => {
    expect(shallow(<TabHeader {...minProps} />).length).toEqual(1);
  });

  it('should render correctly', () => {
    const component = shallow(
      <TabHeader {...minProps} />
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('renders an `.__active`', () => {
    const component = shallow(<TabHeader {...minProps} />);
    expect(component.find('.__active').length).toEqual(0);
  });
});
