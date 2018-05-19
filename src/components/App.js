import React, { Component } from 'react';
import Nav from './Nav';
import LoginForm from './LoginForm';
import MembersArea from './MembersArea'

/*
*   App is entry point of our actual components. It renders all 
*   other top level components inside of the root div of our 
*   index.html file.
*
*    state.mode:    this is a flag that we can pass into other 
*                   components so that they can render different
*                   content based on what state the app is in.
*
*    state.db:      this is an object that is representng our 
*                   database since we have no backend at this
*                   point. It has a 'users' table containing
*                   user/password pairs that we can check against
*                   for login demo purposes.                                                             
*/
class App extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            mode: 'sign in',
            db: {
                users: {
                    'user': 'pass'
                }
            }
        };
        this.loginHandler = this.loginHandler.bind(this);
    }

    // loginHandler compares the password passed in through the
    // form with the password in the "database" for the given user. 
    // If they match it sets the 'mode' to 'logged in'. If not, it 
    // alerts the user. In a real situation this would likely POST 
    // these values to the server who would compare them and then 
    // prompt some sort of action. 
    loginHandler(username, password) {

        if (this.state.db.users[username] === password) {
            this.setState({
                mode: 'logged in'
            });
            return true;
        } else {
            alert('Uh oh, that username/password combination is not valid.\nPlease check your entries and try again!')
            return false;
        }        
    }

    // render renders our outermost divs to the screen. The ternary 
    // if inside decides whether to display the members are or the 
    // log in form. This decision would probably be made by the server 
    // by means of a redirect rather than this way, but this allows 
    // the demo to work a little bit. 
    render() {
        return (
            <div>
                <Nav mode={this.state.mode} onPageChange={this.pageChangeHandler} />
                <div className="page-content card-container">
                    {
                        this.state.mode === 'logged in' ? 
                        <MembersArea /> : 
                        <LoginForm onLogin={this.loginHandler}/>
                    }
                </div>
            </div>
        );
    }
}

export default App;
