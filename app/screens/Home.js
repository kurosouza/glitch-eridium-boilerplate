import React, { Component } from 'react';
import { Box, Heading, TextInput, Button } from 'grommet';

class Home extends Component {

    render() {
        return (
            <Box full color='brand' direction='column' align='center'>
                <Box margin='small'><Heading level={4}>Eridium React</Heading></Box>
                <Box margin='medium'><TextInput /></Box>
                <Box margin='small'>
                    <Button label='check' color='accent-1'></Button>
                </Box>
            </Box>
        );
    }
}

export default Home;