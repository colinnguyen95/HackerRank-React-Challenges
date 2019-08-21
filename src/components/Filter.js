import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';

class Filter extends Component {

    changeHandler = (value, id) => {
        if (value) {
          this.props.onSelect(id);
        } else {
          // handle de-select
        }
      };

    render() {
        const { rowData, selectedId, id } = this.props;
        const isChecked = id === selectedId; 

        return (
        <div className="checkboxes">
            <Checkbox 
                // id={`checkbox_${id}`}
                checked={isChecked}
                // onChange={e => this.changeHandler(e.target.checked, id)}
                onChange={e => this.props.onSelect('name')}

                // type="checkbox"
                // name="record"
                // onChange={this.props.onNameClick} 
                // checked={this.props.isNameChecked}
            />
            <label>Name</label>
            <Checkbox 
                checked={isChecked}
                // onChange={e => this.changeHandler(e.target.checked, 'age')}
                onChange={e => this.props.onSelect('age')}
                // onChange={this.props.onAgeClick} 
                // checked={this.props.isAgeChecked}
            />
            <label>Age</label>
        </div>
        // <div className="checkboxes">
        //     <Checkbox onChange={this.props.onNameClick} checked={this.props.isNameChecked}/>
        //     <label>Name</label>
        //     <Checkbox onChange={this.props.onAgeClick} checked={this.props.isAgeChecked}/>
        //     <label>Age</label>
        // </div>
        );
    }
}

export default Filter;