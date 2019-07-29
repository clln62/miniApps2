import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Table from './components/table.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            DBTable: [],
            count: 0,
        };
        this.getDBTable = this.getDBTable.bind(this);
        this.changeCell = this.changeCell.bind(this);
        this.fieldSquareClicked = this.fieldSquareClicked.bind(this);
        this.getDBTable();
    }
    
    getDBTable () {
        axios.get('/getTable') 
            .then ( response => {
                this.setState({
                    DBTable: response.data
                })
            })
            .catch ( err => {
                console.error(err);
            })
    }

    changeCell (id, className) {
        axios.post( '/changeCell',  {changeInfo: {id: id, className: className}, table: this.state.DBTable})
            .then ( () => {
                // console.log(response);
                // this.getDBTable();
                // window.location.reload();
                // should update what appears on page.
                console.log('hey')
                // if (this.state.count === 0) {
                //     console.log('hello')
                //     this.changeCell(id+1, className);
                //     this.state.count++;
                // }
            })
    }

    fieldSquareClicked (event) {
        event.preventDefault();
        // console.log(event.target.id)
        // console.log(event.target.className)
        this.changeCell(event.target.id, event.target.className);
        // event.target.innerHTML = 'Cool'
    }

    render() {
        return (
        <div>
            <Table DBTable={this.state.DBTable} getMineTable={this.getDBTable} clickField={this.fieldSquareClicked}/>
        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))


