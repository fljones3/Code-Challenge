import * as React from 'react';

export default class Jumbo extends React.Component {

    render() {
        return(
            <main role="main" className="container">
                <div className="jumbotron">
                    <h1>Ohm Ratings Calculator</h1>
                    <p className="lead">This is a simple calculator to determine the Ohm value of a standard resistor based on the band colors as defined by the Electronic Color Code.</p>
                    <a className="btn btn-lg btn-primary" href="http://en.wikipedia.org/wiki/Electronic_color_code" target="_blank" role="button">Learn more &raquo;</a>
                </div>
            </main>
        );
    }

}