import * as React from 'react';
import About from '../about/About';
import Calculator from '../calculator/Calculator';
import ErrorHandler from '../errorHandler/ErrorHandler';
import Jumbo from '../jumbo/Jumbo';

enum Tabs {
    Home = 1, About
}

interface MyProps {
    activeTab: number;
}

interface MyState {
    activeTab: number;
}

/// Function to conditionally render based upon tab selection.
function HomeView({ activeTab }: MyProps) {

    if (activeTab === Tabs.Home) {
        return (
            <div>
                <ErrorHandler errorMessage="Sorry an error occurred.  Please contact support.">
                    <Jumbo />
                    <Calculator />
                </ErrorHandler>
            </div>
        );
    }

    return (
        <div>
            <ErrorHandler errorMessage="Sorry an error occurred.  Please contact support.">
                <About />

            </ErrorHandler>
        </div>
    );

}

/// Home component 
export default class Home extends React.Component<{}, MyState> {

    constructor(props: object) {
        super(props);
        this.state = {
            activeTab: Tabs.Home
        };
    }
    /// Handles nav tab click events.
    handleOnClick(  event: any ): void {
        var eventTargetId = event.target.id;

        switch (eventTargetId) {
            case 'Home': {
                this.setState({activeTab: Tabs.Home});
                break;
            }
            case 'About': {
                this.setState({activeTab: Tabs.About});
                break;
            }
            default: {
                this.setState({activeTab: Tabs.Home});
                break;
            }
        }
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                    <a className="navbar-brand" href="#">Ohm Ratings Calculator</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#" id="Home" onClick={e => this.handleOnClick(e)}>Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" id="About" onClick={e => this.handleOnClick(e)}>About</a>
                            </li>

                        </ul>

                    </div>
                </nav>
                <HomeView activeTab={this.state.activeTab}/>
                
            </div>
        );
    }

    }
