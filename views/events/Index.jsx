const React = require('react')
const Default = require('../layouts/Default')

class Index extends React.Component{
    render(){
        const { events } = this.props
        return(
            <Default title='Event Home'>
                <h1>Upcoming Events</h1>
                <ul>
                    {
                        events.map((event) => {
                            return(
                                <li key={event._id}>
                                    <a href={`/events/${event._id}`}>{event.title}</a>
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