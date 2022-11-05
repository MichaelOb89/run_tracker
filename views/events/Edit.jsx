const React = require('react')
const Default = require('../layouts/Default')

class Edit extends React.Component {
  render () {
    const { event } = this.props
    let month = ''
    let day = ''
    if (event.date.getMonth() + 1 < 10) {
      month = `0${event.date.getMonth() + 1}`
    } else {
      month = event.date.getMonth()
    }
    if (event.date.getDate() < 10) {
      day = `0${event.date.getDate()}`
    } else {
      day = event.date.getDate()
    }
    return (
      <Default title={`Edit ${event.title}`}>
        <h1>Edit {event.title}</h1>
        <form method='POST' action={`/events/${event._id}?_method=PUT`}>
          Title: <input type='text' name='title' defaultValue={event.title} /><br />
          Date: <input type='datetime-local' name='date' value={`${event.date.getUTCFullYear()}-${month}-${day}T${event.date.getHours()}:${event.date.getMinutes()}AM`} /><br />
          Distance(miles): <input type='number' name='distance' step='0.1' defaultValue={event.distance} /><br />
          <input type='submit' value='Submit Activity' />
        </form>
      </Default>
    )
  }
}

module.exports = Edit
