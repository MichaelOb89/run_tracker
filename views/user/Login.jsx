const React = require('react')
const Default = require('../layouts/Default')

class Login extends React.Component{
    render(){
        return(
            <Default>
                <div className='sign-up-container'>
                    <form action="/user/login" method='POST'>
                        <fieldset>
                            <div className='sign-up'>
                            <label>Username: <input type="text" name='username' required/></label>
                            <label>Password: <input type="text" name='password' required/></label>
                            <input id="login" type="submit" value='Login'/>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </Default>
        )
    }
}

module.exports = Login