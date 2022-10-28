const React = require('react')

class Edit extends React.Component {
    render(){
        const { activity } = this.props
        return(
            <>
                <h1></h1>    
                <form method='POST' action={`/runs/${activity._id}?_method=PUT`}>
                    Title: <input type="text" name='title' defaultValue={activity.title}/><br />
                    Distance: <input type="number" name='distance' defaultValue={activity.distance}/><br />
                    Pace (minutes:seconds): <input type="number" name='minutesPace' defaultValue={activity.minutesPace}/>: <input type="number" name='secondsPace' defaultValue={activity.secondsPace}/><br />
                    <input type="Submit" value='Submit Activity'/>
                </form>
            </>
        )
    }
}

module.exports = Edit