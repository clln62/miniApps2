import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import Table from './components/table.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            DBTable: [],
        };
    }
    
    getDBTable () {
        axios.get('/getTable') 
            .then ( response => {
                console.log(response);
                // set the tables array as DBTable in state
            })
    }

    changeRow () {
        axios.post( '/changeRow',  /*info*/)
            .then ( response => {
                console.log(response);
                // should update what appears on page.
            })
    }


    render() {
        return (
        <div>
            <Table DBTable={this.state.DBTable}/>
        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))

