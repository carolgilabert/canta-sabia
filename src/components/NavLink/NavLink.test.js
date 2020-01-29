import React from 'react';
import { Link } from 'gatsby';
import { shallow } from 'enzyme';
import NavLink from '.';

describe('NavLink tests', () => {
    const link = shallow(<NavLink to='/hi' />);

    test('it should return a Link element', () => {
        expect(link.find(Link)).toHaveLength(1);
    });

    test('it should say Hello', () => {
        expect(link.text()).toEqual('Hello');
    });

    test('it should pass the to prop through', () => {
        expect(link.prop('to')).toBeDefined();
        expect(link.prop('to')).toEqual('/hi');
    });
});