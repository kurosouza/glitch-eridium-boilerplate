import React from 'react';
import { render } from 'react-dom';
import { Grommet } from 'grommet';

import { Route, BrowserRouter, hashHistory } from 'react-router-dom';

import { Main } from './components/Main';
import { About } from './components/About';

const theme = {
    global: {
        font: {
            family: 'Roboto',
            size: '14px',
            height: '20px',
        }
    }
}

render(
    <Grommet theme={theme}>
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Main} />
                <Route path='/about' component={About} />
            </div>
        </BrowserRouter>
    </Grommet>
    ,
    document.getElementById('app'));