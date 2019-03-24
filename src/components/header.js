import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const linkStyles = {
    textDecoration: `none`,
    color: `white`
};

const Separator = () => <span style={{ margin: '0 10px' }}>|</span>;

const Header = ({ siteTitle }) => (
    <div
        style={{
            background: `rebeccapurple`,
            marginBottom: `1.45rem`,
            color: `white`
        }}
    >
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `1.45rem 1.0875rem`
            }}
        >
            <h1 style={{ margin: 0, display: 'inline-block' }}>
                <Link to='/' style={linkStyles}>
                    {siteTitle}
                </Link>
            </h1>
            <div style={{ float: 'right' }}>
                <Link to='/' style={linkStyles}>
                    Home
                </Link>
                <Separator />
                <Link to='/all-songs' style={linkStyles}>
                    All Songs
                </Link>
                <Separator />
                <Link to='/tags' style={linkStyles}>
                    Tags
                </Link>
                <Separator />
                <Link to='/authors' style={linkStyles}>
                    Authors
                </Link>
            </div>
        </div>
    </div>
);

Header.propTypes = {
    siteTitle: PropTypes.string
};

Header.defaultProps = {
    siteTitle: ``
};

export default Header;
