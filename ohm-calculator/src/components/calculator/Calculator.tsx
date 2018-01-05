import * as React from 'react';
import OhmCalculator from '../../ohmValueCalculator';
import { ACOLORS } from '../../mockStyles';
import { BCOLORS } from '../../mockStyles';
import { CCOLORS } from '../../mockStyles';
import { DCOLORS } from '../../mockStyles';

interface MyState {
    bandAState: string;
    bandBState: string;
    bandCState: string;
    bandDState: string;
    bandAProgressStyle: string;
    bandBProgressStyle: string;
    bandCProgressStyle: string;
    bandDProgressStyle: string;
    resist: string;
}
/// Loads select options from a provided 
function loadSelectOptions(colors: any, defaultSelect: string): object[] {
    var i: number = 0;

    var items = new Array();
    for (i = 0; i <= colors.length - 1; i++) {
        var c = colors[i];
        if (c.name === defaultSelect) {
            items.push(<option key={i.toString()} selected={true}>{c.name}</option>);
        } else {
            items.push(<option key={i.toString()}>{c.name}</option>);
        }

    }

    return items;
}
/// Calculator component 
export default class Calculator extends React.Component<{}, MyState> {
    calc: OhmCalculator;
    temp: number;
    aoptions: object[];
    boptions: object[];
    coptions: object[];
    doptions: object[];

    constructor(props: object) {
        super(props);
        this.state = {
            resist: null,
            bandAState: 'Blue',
            bandBState: 'Violet',
            bandCState: 'Red',
            bandDState: 'Gold',
            bandAProgressStyle: 'progress-bar progress-bar-striped progress-bar-animated bg-primary',
            bandBProgressStyle: 'progress-bar progress-bar-striped progress-bar-animated bg-purple',
            bandCProgressStyle: 'progress-bar progress-bar-striped progress-bar-animated bg-danger',
            bandDProgressStyle: 'progress-bar progress-bar-striped progress-bar-animated bg-amber'
        };
        this.aoptions = loadSelectOptions(ACOLORS, 'Blue');
        this.boptions = loadSelectOptions(BCOLORS, 'Violet');
        this.coptions = loadSelectOptions(CCOLORS, 'Red');
        this.doptions = loadSelectOptions(DCOLORS, 'Gold');
        this.calc = new OhmCalculator();

    }

    /// initialize default calculations
    componentWillMount() {
        var ohmValue = this.calc.CalculateOhmValue(this.state.bandAState, this.state.bandBState, this.state.bandCState, this.state.bandDState).toString();
        var minResist = this.calc.CalculateMinResist(this.state.bandAState, this.state.bandBState, this.state.bandCState, this.state.bandDState).toString();
        var maxResist = this.calc.CalculateMaxResist(this.state.bandAState, this.state.bandBState, this.state.bandCState, this.state.bandDState).toString();

        var curResist = 'The resistance is ' + ohmValue + ' ohms. ' + 'It has an overall rating of ' + minResist + ' - ' + maxResist + ' ohms. ';
        this.setState({ resist: curResist });
    }

    /// Handles onchange events for band colors
    public handleOnClick(event: any): void {
        var eventTargetId = event.target.id;
        var eventTargetValue = event.target.value;

        var style = this.calc.GetStyle(eventTargetValue);
        var curAState = this.state.bandAState;
        var curBState = this.state.bandBState;
        var curCState = this.state.bandCState;
        var curDState = this.state.bandDState;

        switch (eventTargetId) {
            case 'bandASelect': {
                curAState = eventTargetValue;
                this.setState({ bandAState: eventTargetValue });
                this.setState({ bandAProgressStyle: style });
                break;
            }
            case 'bandBSelect': {
                curBState = eventTargetValue;
                this.setState({ bandBState: eventTargetValue });
                this.setState({ bandBProgressStyle: style });
                break;
            }
            case 'bandCSelect': {
                curCState = eventTargetValue;
                this.setState({ bandCState: eventTargetValue });
                this.setState({ bandCProgressStyle: style });
                break;
            }
            case 'bandDSelect': {
                curDState = eventTargetValue;
                this.setState({ bandDState: eventTargetValue });
                this.setState({ bandDProgressStyle: style });
                break;
            }
            default: {
                style = null;
                break;
            }
        }
        
        var ohmValue = this.calc.CalculateOhmValue(curAState, curBState, curCState, curDState).toString();
        var minResist = this.calc.CalculateMinResist(curAState, curBState, curCState, curDState).toString();
        var maxResist = this.calc.CalculateMaxResist(curAState, curBState, curCState, curDState).toString();

        var curResist = 'The resistance is ' + ohmValue + ' ohms. ' + 'It has an overall rating of ' + minResist + ' - ' + maxResist + ' ohms. ';
        this.setState({ resist: curResist });

    }
    render() {
        return (
            <div className="container">
                <form>
                    <div className="progress">
                        <div className={this.state.bandAProgressStyle} id="bandAProgress" role="progressbar" style={{ width: '25%' }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" />
                        <div className={this.state.bandBProgressStyle} id="bandBProgress" role="progressbar" style={{ width: '25%' }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" />
                        <div className={this.state.bandCProgressStyle} id="bandCProgress" role="progressbar" style={{ width: '25%' }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" />
                        <div className={this.state.bandDProgressStyle} id="bandDProgress" role="progressbar" style={{ width: '25%' }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" />
                    </div>

                    <p />
                    <div className="row">
                        <div className="form-group col-md-3">
                            <label>Band A Color</label>
                            <select className="form-control" id="bandASelect" onChange={e => this.handleOnClick(e)} aria-describedby="bandAHelp">

                                {this.aoptions}
                            </select>

                            <small id="bandAHelp" className="form-text text-muted">Color of the first significant digit of component value band.</small>
                        </div>
                        <div className="form-group col-md-3">
                            <label >Band B Color</label>
                            <select className="form-control" id="bandBSelect" onChange={e => this.handleOnClick(e)} aria-describedby="bandBHelp">
                                {this.boptions}
                            </select>

                            <small id="bandBHelp" className="form-text text-muted">Color of the second significant digit of component value band.</small>
                        </div>
                        <div className="form-group col-md-3">
                            <label >Band C Color</label>
                            <select className="form-control" id="bandCSelect" onChange={e => this.handleOnClick(e)} aria-describedby="bandCHelp">
                                {this.coptions}
                            </select>

                            <small id="bandCHelp" className="form-text text-muted">Color of the decimal multiplier band.</small>
                        </div>
                        <div className="form-group col-md-3">
                            <label >Band D Color</label>
                            <select className="form-control" id="bandDSelect" onChange={e => this.handleOnClick(e)} aria-describedby="bandDHelp">
                                {this.doptions}
                            </select>

                            <small id="bandDHelp" className="form-text text-muted">Color of the tolerance value band.</small>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-9">
                            <label >Resistance</label>
                            <input className="form-control" type="text" id="inputResist" readOnly={true} placeholder={this.state.resist} />

                        </div>

                    </div>

                </form>
            </div>

        );

    }

}