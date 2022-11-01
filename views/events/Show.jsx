const React = require('react')

class Show extends React.Component{
    render(){
        const {event} = this.props
        return(
            <>
                <h1>{event.title} takes place on {event.date.toDateString()}</h1>
                <h3>The distance for {event.title} is {event.distance} miles. You have {Math.floor((event.date-Date.now())/(24*60*60*1000))} days left to prepare</h3>
            </>
        )
    }
}

module.exports = Show