import React from 'react';
import ReactDOM from 'react-dom';
import {App} from 'core/app';

const render = () => {
    let element = document.createElement("div");
    const root = document.body.appendChild(element);
    ReactDOM.render(<App />, root);
};

window.addEventListener('load', render);