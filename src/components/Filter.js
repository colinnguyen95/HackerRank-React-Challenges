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
        const { rowData, selectedId } = this.props;
        // const { id, name, url } = rowData;
        const isChecked = 'age' === selectedId; 

        return (
        <div className="checkboxes">
            <Checkbox 
                // id={`checkbox_${id}`}
                checked={isChecked}
                onChange={e => this.changeHandler(e.target.checked, 'age')}

                // type="checkbox"
                // name="record"
                // onChange={this.props.onNameClick} 
                // checked={this.props.isNameChecked}
            />
            <label>Name</label>
            <Checkbox 
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