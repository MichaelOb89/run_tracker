const React = require('react')

class Default extends React.Component {
  render () {
    const { activity, title, event, authPage } = this.props
    return (
      <html>
        <head>
          <link rel='stylesheet' href='/css/style.css' />
          <title>{title}</title>
        </head>
        <body>
          <nav className={authPage ? 'auth-page' : ''}>
            <a href='/runs'>Go to Home page</a>
            <a href='/events'>View all Upcoming Events</a>
            <a href='/runs/new'>Add a new activity</a>
            <a href='/events/new'>Create a new Event</a>
            {activity ? <a href={`/runs/${activity._id}/edit`}>Edit this Activity</a> : ''}
            {event ? <a href={`/events/${event._id}/edit`}>Edit this Event</a> : ''}
            <div className='nav-auth'><a href='/user/logout'>Logout</a>
            </div>
          </nav>
          {this.props.children}
        </body>
      </html>
    )
  }
}

module.exports = Default
