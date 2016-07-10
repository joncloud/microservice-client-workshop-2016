import React, { PropTypes } from 'react';

const Quote = quote =>
{
    const text = (quote ? quote.text : '');
    const author = (quote ? quote.author : '');
    return (<div className="well well-sm"><p>{text}</p><p><i>{author}</i></p></div>);
}

Quote.propTypes = {
  quote: PropTypes.object.isRequired
};

export default Quote;
