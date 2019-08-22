import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';

class Filter extends Component {
    // constructor(props) {
    //     super(props);
    
    //     this.state = {
    //     id: ''
    //     //   isChecked: false 
    //     };
    
    //     // this.state={
    //     //   isNameClicked: 'name',
    //     //   isAgeClicked: 'age',
    //     // }; 
    //   }

    // changeHandler = (value, id) => {
        
    //     console.log(id)
    //     console.log(value)
    //     if (value) {
    //       this.props.onSelect(id);
    //       this.setState({id: id})
    //     } else {
    //       // handle de-select
    //     }
    //     // this.props.onSelect(id);
    //     // this.setState({isChecked: value})
    //   };

    render() {
        // const isChecked
        // const { selectedId } = this.props;
        // const isChecked = this.state.id === selectedId; 

        return (
        <div className="checkboxes">
            <Checkbox 
                // id={`checkbox_${id}`}
                // checked={isChecked}
                // onChange={e => this.changeHandler(e.target.checked, id)}
                onChange={() => this.props.onSelect('name')}

                // type="checkbox"
                // name="record"
                // onChange={this.props.onNameClick} 
                // checked={this.props.isNameChecked}
            />
            <label>Name</label>
            <Checkbox 
                // checked={isChecked}
                onChange={() => this.props.onSelect('age')}
                // onChange={e => this.changeHandler(e.target.checked, 'age')}
                // onChange={e => this.changeHandler(e.target.checked, 'age')}
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