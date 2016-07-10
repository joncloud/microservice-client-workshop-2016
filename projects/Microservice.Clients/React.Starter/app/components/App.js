import React, { Component } from 'react';
import Navbar from './Navbar';
import RandomQuote from './RandomQuote';
import QuoteList from './QuoteList';

export default class App extends Component {
    state = {
        activeLink: 'Home'
    };

    setActiveLink = (link) => {
        this.setState({ activeLink: link });
    };

    render() {
        let content;

        switch (this.state.activeLink) {
            case 'Home':
                content = (<RandomQuote />);
                break;
            case 'Quotes':
                content = (<QuoteList />);
                break;
            default:
                content = (<h4>Unknown state</h4>);
                break;
        }

        return (
            <div>
                {Navbar(this.setActiveLink, this.state.activeLink)}
                {content}
            </div>
        );
    }
}
