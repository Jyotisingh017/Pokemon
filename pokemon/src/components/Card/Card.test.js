import React from 'react';
import {CardLayout} from './Card';

import Enzyme, { shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })
const prop = {
    "abilities": [
      {
        "ability": {
          "name": "overgrow",
          "url": "https://pokeapi.co/api/v2/ability/65/"
        },
        "is_hidden": false,
        "slot": 1
      },
      {
        "ability": {
          "name": "chlorophyll",
          "url": "https://pokeapi.co/api/v2/ability/34/"
        },
        "is_hidden": true,
        "slot": 3
      } ],
    "height": 20,
     "sprites": {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
        "official-artwork": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
        }
      },
      "weight": 1000,
      "name": "bulbasaur",
      "types": [
      {
        "type": {
          "name": "overgrow",
          "url": "https://pokeapi.co/api/v2/ability/65/"
        }
      },
      {
        "type": {
          "name": "chlorophyll",
          "url": "https://pokeapi.co/api/v2/ability/34/"
        }
      } ],
  };
it('renders provided Image', () => {
    const wrapper = shallow(
        <CardLayout pokemon={prop} />
    );
     expect(wrapper.find('img').length).toEqual(1);
});