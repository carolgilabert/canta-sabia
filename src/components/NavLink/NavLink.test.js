import React from 'react';
import { shallow } from 'enzyme';
import NavLink from './NavLink';

const link = shallow(<NavLink />);

test('it should return a Link element', () => {
    expect(link.type()).toEqual('Link');
});