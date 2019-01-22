import React from 'react';
import ReactDOM from 'react-dom';
import { Cat } from './components/Cat'

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Cats Please</h1>
                <Cat />
            </div>
        );
    }
}
ReactDOM.render(<App/>, document.getElementById('app'));