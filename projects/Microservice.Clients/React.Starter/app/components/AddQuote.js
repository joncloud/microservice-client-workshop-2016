import React, {Component} from 'react';
import QuoteService from '../common/js/forge/services/quote';
import Quote from './Quote';

export default class AddQuote extends Component{
    state = {
        author: undefined,
        text: undefined
    };

    addQuote = (e) => {
        e.preventDefault();
        QuoteService.addQuote(this.state.text, this.state.author);
    };

    handleAuthorChange = (e) => {
        this.setState({
            author: e.target.value
        });
    };
    
    handleQuoteChange = (e) => {
        this.setState({
            text: e.target.value
        });
    };

    render(){
        return (
            <div className="container-fluid">
                <h2>Add a Quote</h2>

                <form>
                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input id="author" className="form-control" type="text" value={this.state.author} onChange={this.handleAuthorChange} placeholder="Author" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="quote">Quote</label>
                        <textarea id="quote" className="form-control" placeholder="Quote" onChange={this.handleQuoteChange}>{this.state.text}</textarea>
                    </div>
                    <button className="btn btn-primary" onClick={this.addQuote}>Add Quote</button>
                </form>

                <h3>Preview</h3>

                {Quote({author: this.state.author, text: this.state.text})}
            </div>
        );
    }
}
