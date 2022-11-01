const React = require('react')

class Edit extends React.Component {
    render(){
        const { event } = this.props
        let month = ""
        {if(event.date.getMonth()+1<10){
            month = `0${event.date.getMonth()+1}`
        } else {
            month = event.date.getMonth()
        }}
        return(
            <>
                <h1>Edit {event.title}</h1>    
                <form method='POST' action={`/events/${event._id}?_method=PUT`}>
                    Title: <input type="text" name='title' defaultValue={event.title}/><br />
                    Date: <input type="date" name='date' value={`${event.date.getUTCFullYear()}-${month}-${event.date.getDate()}`}/><br />
                    Distance{`(miles)`}: <input type="number" name='distance' step="0.1" defaultValue={event.distance}/><br />
                    <input type="submit" value='Submit Activity'/>
                </form>
            </>
        )
    }
}

module.exports = Edit