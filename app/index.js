import React from 'react';
import { render } from 'react-dom';

import { Anchor, Box, Grommet, Heading, Text } from 'grommet';
import { Apps, Archive } from 'grommet-icons';

import { Route, BrowserRouter, hashHistory } from 'react-router-dom';

import { Main } from './screens/Main';
import { About } from './screens/About';
import Home from './screens/Home';

const theme = {
    global: {
        colors: {
            brand: '#228be6'
        },
        font: {
            family: 'Roboto',
            size: '14px',
            height: '20px',
        }
    }
};

render(
    <Grommet theme={theme}>
        <Box direction='column' full>
            <Box direction='row' justify='between' background='brand'>

                <Box margin='small'><Apps /></Box>
                <Box direction='row'>
                    <Box margin='small'><Anchor label={<Text bold>messages</Text>} href='/' alignSelf='center' /></Box>
                    <Box margin='small'><Anchor label={<Text bold>stats</Text>} href='/about' alignSelf='center' /></Box>
                </Box>
                <Box margin='small'><Archive /></Box>
            </Box>
            <Box margin='small'>

                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/main" component={Main} />
                        <Route path='/about' component={About} />
                    </div>
                </BrowserRouter>

            </Box>
        </Box>
    </Grommet>
    ,
    document.getElementById('app'));