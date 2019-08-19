import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';

class Filter extends Component {

    render() {
        return (
        <div className="checkboxes">
            <Checkbox onClick={this.props.isClicked}/>
            <label>Name</label>
            <Checkbox/>
            <label>Age</label>
        </div>
        );
    }
}

export default Filter;