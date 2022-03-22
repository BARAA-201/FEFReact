import React from 'react';
import ReactDOM from 'react-dom';

const color1 = React.createElement('li', {}, 'Black');
const color2 = React.createElement('li', {}, 'Gray');
const color3 = React.createElement('li', {}, 'white');

const musicType1 = React.createElement('li', {}, 'House Music');
const musicType2 = React.createElement('li', {}, 'EDM');
const musicType3 = React.createElement('li', {}, 'Hip-Hop');

const food1 = React.createElement('li', {}, 'Pizza');
const food2 = React.createElement('li', {}, 'Fettuccine Alfredo');
const food3 = React.createElement('li', {}, 'Burger');

const website1 = React.createElement(
    'li', {},
    React.createElement('a', { href: 'https://www.instagram.com' }, 'www.instagram.com')
);
const website2 = React.createElement(
    'li', {},
    React.createElement(
        'a', { href: 'https://www.reddit.com/' },
        'www.reddit.com'
    )
);
const website3 = React.createElement(
    'li', {},
    React.createElement(
        'a', { href: 'https://www.youtube.com' },
        'www.youtube.com'
    )
);

ReactDOM.render(
    React.createElement(
        'div', {},
        React.createElement('h1', {}, 'My Favorite Things'),
        React.createElement(
            'ul', {},
            React.createElement(
                'li', {},
                'My Favorite Colors',
                React.createElement('ol', {}, color1, color2, color3)
            ),
            React.createElement(
                'li', {},
                'My Favorite Music Type',
                React.createElement('ol', {}, musicType1, musicType2, musicType3)
            ),
            React.createElement(
                'li', {},
                'My Favorite Food',
                React.createElement('ol', {}, food1, food2, food3)
            ),
            React.createElement(
                'li', {},
                'My Favorite Websites',
                React.createElement('ol', {}, website1, website2, website3)
            )
        )
    ),
    document.getElementById('root')
);