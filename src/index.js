import React from 'react';
import {createRoot} from 'react-dom/client';
//import ReactDOM from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css'
import './styles/Normalize.css';
import './styles/GeneralStyles.css';
import App from './App';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);


/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
 */
