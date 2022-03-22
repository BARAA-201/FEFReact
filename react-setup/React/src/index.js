import React from 'react';
import ReactDom from 'react-dom';


ReactDom.render(
    React.createElement(
        'ul', {},
        React.createElement('li', {}, 'Apple'),
        React.createElement('li', {}, 'oranges'),
        React.createElement('li', {}, 'nothing')),
    document.getElementById('root')
);