const React = require('react')
const Default = require('../layouts/Default')

class Show extends React.Component {
  render () {
    const { activity } = this.props
    let start = 0
    let seconds = 0
    for (let i = 0; i < activity.mapLink.length; i++) {
      if (activity.mapLink[i] === '?') {
        start = i + 1
      }
    }
    if (activity.secondsPace < 10) {
      seconds = `0${activity.secondsPace}`
    } else {
      seconds = activity.secondsPace
    }
    console.log(activity.date)
    return (
      <Default title={`${activity.title}`} activity={this.props.activity}>
        <h1>{activity.title} on {activity.date ? activity.date.toDateString() : ''}</h1>
        <h2>{`This run was ${activity.distance} miles long, and was done at a pace of ${activity.minutesPace}:${seconds} per mile`}</h2>
        <form method='POST' action={`/runs/${activity._id}?_method=DELETE`}>
          <input type='submit' value={`Delete ${activity.title}`} />
        </form>
        <div className='map'>
          {activity.mapLink ? <iframe src={`https://www.google.com/maps/d/u/0/embed?${activity.mapLink.substring(start)}`} width='640' height='480' /> : ''}
        </div>
      </Default>
    )
  }
}

module.exports = Show
