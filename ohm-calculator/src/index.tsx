import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ErrorHandler from './components/errorHandler/ErrorHandler';
import Home from './components/home/Home';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

function MainView () {
  return ( 
    <div>
      <ErrorHandler errorMessage="Sorry an error occurred.  Please contact support.">
        <Home />
      </ErrorHandler>
    </div>
  );
}

ReactDOM.render(
  <MainView />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
