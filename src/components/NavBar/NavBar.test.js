import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '.';

describe('NavBar tests', () => {
    const navbar = shallow(<NavBar />);

    test('it should return a nav element', () => {
        expect(navbar.find('nav')).toHaveLength(1);
    });
    
    test('it should have 4 NavLinks', () => {
        expect(navbar.find('NavLink')).toHaveLength(4);
    });

    test('it should have all the expected links', () => {
        const expectedLinks = [
            { name: 'Home', location: '/' },
            { name: 'All Songs', location: '/all-songs' },
            { name: 'Tags', location: '/tags' },
            { name: 'Authors', location: '/authors' }
        ];

        navbar.find('NavLink').map((link, index) => {
            expect(link.children().text()).toEqual(expectedLinks[index].name);
            expect(link.prop('to')).toEqual(expectedLinks[index].location);
        });
    });
});