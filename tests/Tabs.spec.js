import React from 'react';
import { shallow } from 'enzyme';
import Tabs from '../src/containers/Tabs.jsx';
import TabHeader from '../src/components/TabHeader.jsx';
// import TabContent from '../src/components/TabContent.jsx';

describe('Component: Tabs', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Tabs />);
  });

  it('should render a <section />', () => {
    expect(wrapper.find('section.phases').length).toEqual(1);
  });

  it('Check state.activeTab starts with 0', () => {
    let activeTab = wrapper.state().activeTab;
    expect(activeTab).toEqual(0);
  });

  // it('Should render <TabHeader /> && <TabContent /> components', () => {
  //   expect(wrapper.find(TabHeader)).to.have.length(1);
  // });

  // it('should render the TabHeader Component', () => {
  // 	const testFunction = () => true;
  // 	const tabHeaderProps = {
  // 		data: [],
  // 		onClick: testFunction,
  // 		activeId: 1
  // 	}

  // 	expect(wrapper.containsMatchingElement(
  // 		<TabHeader { ...tabHeaderProps } />));
  // });

  // it('should render the TabContent Component', () => {
  // 	expect(wrapper.containsMatchingElement(
  // 		<TabContent
  // 			data={ [1, 2, 3, 4, 5] }
  // 			activeId={ 0 }
  // 		/>)).toEqual(true);
  // });

});