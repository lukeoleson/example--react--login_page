import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import './css/grid.css';
import './css/media-queries.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
