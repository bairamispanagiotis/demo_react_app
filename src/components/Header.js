import React from 'react';
import logo, { ReactComponent } from '../logo.svg';
import Body, {Body2} from '../components/Body';

function Header(data) {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt={data.title} />
            <Body />
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
        </a>
        </header>
    );
}

export default Header;