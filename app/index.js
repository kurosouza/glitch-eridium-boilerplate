import React from 'react';
import { render } from 'react-dom';

import { Route, BrowserRouter, hashHistory } from 'react-router-dom';

import { Main } from './components/Main';
import { About } from './components/About';

render(<BrowserRouter>
<div>
    <Route exact path="/" component={Main}/>
    <Route path='/about' component={About} />
</div>
</BrowserRouter>,
document.getElementById('app'));