import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Description from '../src/components/Description.jsx';

describe('Component: Description', () => {
  const minProps = {
    picture: 'mockPics',
    name: 'mockName',
    description: 'mockDescription'
  }

  it('should render <Description /> components', () => {
    expect(shallow(<Description {...minProps} />).length).toEqual(1);
  });

  it('should render correctly', () => {
    const component = shallow(
      <Description {...minProps} />
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
