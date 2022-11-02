const React = require('react')
const Default = require('../layouts/Default')

class Index extends React.Component {
  render () {
    console.log(this.props)
    const { activities, events } = this.props
    return (
      <Default title='Home'>
        <h1>Run tracker home page</h1>
        {events ? <h2>Next event is {events[0].title} on {events[0].date.toDateString()}</h2> : ''}
        <h2>Your Past activities are:</h2>
        <ul>
          {
                        activities.map((activity) => {
                          return (
                            <li key={activity._id}>
                              <a href={`/runs/${activity._id}`}>{activity.title} done on {activity.date.toDateString()}</a>
                            </li>
                          )
                        })
                    }
        </ul>
      </Default>
    )
  }
}

module.exports = Index
