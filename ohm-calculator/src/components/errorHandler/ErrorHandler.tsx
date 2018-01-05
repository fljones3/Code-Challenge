import * as React from 'react';

interface MyProps {
    errorMessage: string;
}

interface MyState {
    hasError: boolean;
}
/// Error boundary for wrapping child component issues.
export default class ErrorHandler extends React.Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    componentDidCatch(error: any, info: any) {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <h1>{this.props.errorMessage}</h1>;
        }
        return this.props.children;
    }
}