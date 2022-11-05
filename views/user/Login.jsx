const React = require('react')
const Default = require('../layouts/Default')

class Login extends React.Component {
  render () {
    return (
      <Default title='Login' authPage>
        <div className='sign-up-container'>
          <form action='/user/login' method='POST'>
            <fieldset>
              <div className='sign-up'>
                <label>Username: <input type='text' name='username' required /></label>
                <label>Password: <input type='text' name='password' required /></label>
                <input id='login' type='submit' value='Login' />
              </div>
              <a href='/user/signup'>Click here to create a new user</a>
            </fieldset>
          </form>
        </div>
      </Default>
    )
  }
}

module.exports = Login
