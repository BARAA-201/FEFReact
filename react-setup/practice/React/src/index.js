import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header';
import Home from './components/screen/Home';
import About from './components/About';
import Topics from './components/screen/Topics';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const App = () => {

    <Router>
        <div>
            <ul>
                <li>
                    <Route path='/' component={Home} />
                </li>
                <li>
                    <Route path='/about' component={About} />
                </li>
                <li>
                    <Route path='/topics' component={Topics} />
                </li>
            </ul>
        </div>
    </Router>

}





ReactDom.render(<App />, document.getElementById("root"))