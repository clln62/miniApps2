import React from 'react';

const TableRow = (props) => {
    return (
        <tr height="33">
            <td width="33" onClick={props.clickField} id={props.row.id} className="column1">{props.row.column1Value}</td>
            <td width="33" onClick={props.clickField} id={props.row.id} className="column2">{props.row.column2Value}</td>
            <td width="33" onClick={props.clickField} id={props.row.id} className="column3">{props.row.column3Value}</td>
            <td width="33" onClick={props.clickField} id={props.row.id} className="column4">{props.row.column4Value}</td>
            <td width="33" onClick={props.clickField} id={props.row.id} className="column5">{props.row.column5Value}</td>
            <td width="33" onClick={props.clickField} id={props.row.id} className="column6">{props.row.column6Value}</td>
            <td width="33" onClick={props.clickField} id={props.row.id} className="column7">{props.row.column7Value}</td>
            <td width="33" onClick={props.clickField} id={props.row.id} className="column8">{props.row.column8Value}</td>
            <td width="33" onClick={props.clickField} id={props.row.id} className="column9">{props.row.column9Value}</td>
            <td width="33" onClick={props.clickField} id={props.row.id} className="column10">{props.row.column10Value}</td>
        </tr>
    )
}

export default TableRow;