import React from 'react';
import ResultsContainer from '../ResultContainer/resultcontainer';

import SearchBox from '../SearchBox/searchbox';
import Header from './../Header/header';
import './app.css';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            headerText: 'Name It!',
            headerExpanded: true,
            suggestedNames: [],

        };
    }

    handleInputChange = (inputText) => {

        this.setState({
            headerExpanded: !inputText,
            suggestedNames: inputText ? name(inputText) : [],


        });
    };

    render() {
        return (
            <div>
                <Header
                    headerExpanded={this.state.headerExpanded}
                    headTitle={this.state.headerText}
                />
                <SearchBox onInputChage={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        );
    }
}

export default App;