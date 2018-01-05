import * as React from 'react';

export default class About extends React.Component {

    render() {
        return(
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        Ohm Ratings Calculator
  </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p>This application was written using Reactjs and TypeScript. The project was scalffolded using the create-react-app tool. It leverages Bootstrap and JQuery for user interface element style and functionality.</p>
                            <p>Jest and Enzyme are used for component and unit testing purposes.</p>
                            <p>The following standard NPM commands can be used to run this application in development.</p>
                            <span>
                                <ul>
                                    <li>npm start run - loads application in default browser on port 3000</li>
                                    <li>npm run test - runs all configured unit tests</li>
                                    <li>npm build - bundles the application for deployment to a higher environment.</li>
                                </ul>
                            </span>
                        </blockquote>
                    </div>
                </div>
            </div>
        );
    }

}