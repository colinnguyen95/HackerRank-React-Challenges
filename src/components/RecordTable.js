import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class RecordTable extends Component {
    constructor() {
        super();
        this.people = [
            {
                name: "Veronica Mize",
                dob: "11/29/2011"
            }, {
                name: "Cecilia Olsson",
                dob: "09/16/1992"
            }, {
                name: "Peter Parker",
                dob: "01/16/1992"
            }, {
                name: "Jimmy Shergil",
                dob: "12/12/2001"
            }, {
                name: "Alexander Alfred",
                dob: "02/09/1891"
            }, {
                name: "Janice Shroyer",
                dob: "12/01/1982"
            }, {
                name: "Ralph White",
                dob: "11/30/2011"
            }, {
                name: "Deborah T. Decker",
                dob: "10/31/1999"
            }
        ];
    }

    render() {
        const { name, age } = this.props;
        const sorted = this.people.sort((a,b) => {
            const da = new Date(a.dob);
            const db = new Date(b.dob);
            // const isReversed = (name === true) ? 1 : (age === true) ? 1 : -1;
            const ageSort = da > db ? 1 : -1;
            const nameSort = a.name.localeCompare(b.name);

            return (name === true) ? nameSort : (age === true) ? ageSort : -1;
        })

        // const sortedAge = this.people.sort((a,b) => {
        //     const da = new Date(a.dob);
        //     const db = new Date(b.dob);
        //     const isReversed = (name === true) ? 1 : -1;
        //     return isReversed * da > db ? 1 : -1;
        // })
        return (
            <Paper className="width">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className="table-header">Name</TableCell>
                            <TableCell className="table-header">Date of Birth</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                        sorted.map((person, index) => {
                            return ( 
                                <TableRow>
                                    <TableCell> 
                                        <p>{person.name}</p>
                                    </TableCell>
                                    <TableCell> 
                                        <p>{person.dob}</p>
                                    </TableCell>
                                </TableRow>  
                            )
                        })
                    }
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default RecordTable;
