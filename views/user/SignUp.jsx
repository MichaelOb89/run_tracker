const React = require('react')
const Default = require('../layouts/Default')

class SignUp extends React.Component {
  render () {
    return (
      <Default title='Sign Up' authPage>
        <div className='sign-up-container'>
          <form action='/user/signup' method='POST'>
            <fieldset id='sign-up'>
              <div className='sign-up'>
                <legend>New User</legend>
                <label> Username: <input type='text' name='username' required /></label>
                <label>Password: <input type='text' name='password' /></label>
                <input id='create' type='submit' value='Create Account' />
              </div>
              <a href='/user/login'>Click here sign in with an existing user</a>
            </fieldset>
          </form>
        </div>
      </Default>
    )
  }
}

module.exports = SignUp
