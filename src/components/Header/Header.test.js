import React from 'react';
import { shallow } from 'enzyme';
import Header from '.';

describe('Header tests', () => {
    const header = shallow(<Header />);

    test('it should return a header element', () => {
        console.log(header.debug());
        
        expect(header.find('header')).toHaveLength(1);
    });
});