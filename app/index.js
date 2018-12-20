import React from 'react';
import { render } from 'react-dom';

import { Box, Grommet, Heading, Text } from 'grommet';
import { Apps, Archive } from 'grommet-icons';

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
        <Box direction='column' full>
            <Box direction='row' justify='between' background='brand'>
                <Box margin='small'><Apps /></Box>
                <Text margin='small'>my app</Text>
                <Box margin='small'><Archive /></Box>
            </Box>
            <Box margin='small'>

                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={Main} />
                        <Route path='/about' component={About} />
                    </div>
                </BrowserRouter>

            </Box>
        </Box>
    </Grommet>
    ,
    document.getElementById('app'));