const React = require('react')
const Default = require('../layouts/Default')

class Index extends React.Component {
  render () {
    const { activities, events } = this.props
    let weeklyMileage = 0

    for (let i = 0; i < activities.length; i++) {
      if ((new Date() - activities[i].date) / (1000 * 60 * 60 * 24) < 7) {
        weeklyMileage += activities[i].distance
      }
    }
    return (
      <Default title='Home'>
        <h1>Run tracker home page</h1>
        {events[0] ? <h2 className='event'>Your next event is {events[0].title} on {events[0].date.toDateString()}. You have {Math.round((events[0].date-new Date())/(1000*60*60*24))} days remaining to prepare</h2> : ''}
        <div className='index-container'>
          <div className='index-activitiess'>
            <h2>Here are your past activities:</h2>
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
          </div>
          <div className='index-stats'>
            <h2>You've ran a total of {weeklyMileage} miles over the past 7 days</h2>

          </div>
        </div>
      </Default>
    )
  }
}

module.exports = Index
