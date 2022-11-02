const React = require('react')
const Default = require('../layouts/Default')

class New extends React.Component {
  render () {
    return (
      <Default title='Create new Event'>
        <h1>Create new Event</h1>
        <form method='POST' action='/events'>
          Title: <input type='text' name='title' /><br />
          Date: <input type='datetime-local' name='date' /><br />
          Distance(Miles): <input type='number' step='0.1' name='distance' /><br />
          <input type='submit' value='Submit Activity' />
        </form>
      </Default>
    )
  }
}

module.exports = New
