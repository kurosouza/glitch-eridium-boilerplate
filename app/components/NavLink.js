import React, {Component} from 'react';
import { Anchor } from 'grommet';
import { BrowserRouter as Router } from 'react-router-dom';
import history from '../utils/history';

export default class extends Component {

    constructor() {
        super();
        this._click = this._click.bind(this);

    }

    _click(e) {
        
        const { to } = this.props;
        e.preventDefault();
        history.push(to);
    }

    render() {
        
        return (<Anchor onClick={this._click} href='#' {...this.props}>{this.props.children}</Anchor>);
    }
}