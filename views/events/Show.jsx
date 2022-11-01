const React = require('react')
const Default = require('../layouts/Default')

class Show extends React.Component{
    render(){
        const {event} = this.props
        return(
            <Default title={event.title} event={this.props.event}>
                <h1>{event.title} takes place on {new Date(event.date.toLocaleDateString()).toDateString()}</h1>
                <h3>The distance for {event.title} is {event.distance} miles. You have {Math.floor((event.date-Date.now())/(24*60*60*1000))} days left to prepare</h3>
                <form method='POST' action={`/events/${event._id}?_method=DELETE`}>
                    <input type="submit" value={`Delete ${event.title}`}/>
                </form>
            </Default>
        )
    }
}

module.exports = Show