import React, {Component} from 'react';
import QuoteService from '../common/js/forge/services/quote';
import Quote from './Quote';

export default class RandomQuote extends Component{
    state = {
        quote: undefined
    };
    
    componentWillMount(){
        if(!this.state.quote) {
            this.getRandomQuote();
        }
    }

    getRandomQuote = () => {
        QuoteService.setOptions({ baseUri: 'http://dev-forge.api.hdquotecenter.com' });
        QuoteService.getRandomQuote().then(quote => {
            this.setState({ quote: quote });
        });
    };

    render(){
        return (
            <div className="container-fluid">
                <h2>Random Quote</h2>
                {Quote(this.state.quote)}
                <button className="btn btn-primary" onClick={this.getRandomQuote}>Get Random Quote</button>
            </div>
        );
    }
}
