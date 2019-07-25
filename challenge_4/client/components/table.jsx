import React from 'react';
import TableRow from './tableRow.jsx';

const Table = (props) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th colSpan="10">Minesweeper</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Once table is set up in database, map 
                    through it to create a new table row for each 
                    row in the database table. Will need to pass 
                    down props of the values to go in each cell*/}
                </tbody>
            </table>
        </div>
    )
}

export default Table;