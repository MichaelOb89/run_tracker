const React = require('react')

class Index extends React.Component{
    render(){
        const { events } = this.props
        return(
            <>
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
            </>
        )
    }
}

module.exports = Index