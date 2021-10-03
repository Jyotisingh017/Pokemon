
import React from 'react';
import {Pokemondashboard} from './components/Dashboard/Pokemondashboard';

import Enzyme, { shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })


it('renders correctly enzyme', () => {
  const wrapper = shallow(<Pokemondashboard />)

  expect(toJson(wrapper)).toMatchSnapshot();
});