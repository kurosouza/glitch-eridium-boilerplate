import React, { Component } from 'react';
import { Box, Heading, TextInput, Button } from 'grommet';

import {Link} from 'react-router-dom';

class Home extends Component {

    render() {
        return (
            <Box full color='brand' direction='column' align='center'>
                <Box margin='xsmall'><Heading level={4}>Eridium React</Heading></Box>
            <Box margin='small'><Link to='/about'>Go to About page</Link></Box>
                <Box margin='small'><TextInput size='medium'/></Box>
                <Box margin='small'>
                    <Button label='check' color='accent-1'></Button>
                </Box>
            </Box>
        );
    }
}

export default Home;