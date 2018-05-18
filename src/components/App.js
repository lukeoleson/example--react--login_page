import React, { Component } from 'react';
import Nav from './Nav';
import LoginForm from './LoginForm';
import MembersArea from './MembersArea'

class App extends Component {
  
    constructor() {
        super();
        this.state = {
            mode: 'sign in'
        };
        this.pageChangeHandler = this.pageChangeHandler.bind(this);
        console.log('mode set to sign in by constructor');
    }

    pageChangeHandler(dest) {
        console.log('content received: ' + dest);
        this.setState({
            mode: dest
        });
        console.log('this.state.mode set to ' + this.state.mode);
    }

    loginHandler() {
        this.setState({
            mode: 'logged in'
        })
    }

    // <Body mode={this.state.mode} onPageChange={this.pageChangeHandler} onLogin={this.loginHandler.bind(this)}/>

    render() {
        console.log('rendering the app');
        return (
            <div>
                <Nav mode={this.state.mode} onPageChange={this.pageChangeHandler} />
                <div className="page-content card-container">
                    {true ? <LoginForm /> : <MembersArea />}
                </div>
            </div>
        );
    }
}

export default App;
