import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';

class Filter extends Component {

    render() {
        return (
        <div className="checkboxes">
            <Checkbox onChange={this.props.onClick} checked={this.props.isNameChecked}/>
            <label>Name</label>
            <Checkbox onChange={this.props.onClick} checked={this.props.isAgeChecked}/>
            <label>Age</label>
        </div>
        );
    }
}

export default Filter;