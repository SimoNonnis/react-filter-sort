import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import HotelData from '../components/HotelData';

describe('<HotelData/>', () => {

  it('should have props for: Name, Stars, Facilities', () => {
    const wrapper = shallow(<HotelData/>);

    expect(wrapper.props().hotel).to.be.defined;
})
});
