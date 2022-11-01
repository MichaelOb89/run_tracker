const React = require('react')
const Default = require('../layouts/Default')

class Edit extends React.Component {
    render(){
        const { activity } = this.props
        let month = ""
        
        {if(activity.date){
            if(activity.date.getMonth()+1<10){
            month = `0${activity.date.getMonth()+1}`
        } else {
            month = activity.date.getMonth()
        }}
        }
        return(
            <Default title={`${activity.title} edit page`}>
                <h1>Edit {activity.title}</h1>    
                <form method='POST' action={`/runs/${activity._id}?_method=PUT`}>
                    Title: <input type="text" name='title' defaultValue={activity.title}/><br />
                    Date: <input type="date" name='date' value={`${activity.date.getUTCFullYear()}-${month}-${activity.date.getDate()}`}/><br />
                    Distance{`(miles)`}: <input type="number" name='distance' step='0.1' defaultValue={activity.distance}/><br />
                    Pace {`(minutes:seconds)`}: <input type="number" name='minutesPace' defaultValue={activity.minutesPace}/>: <input type="number" name='secondsPace' defaultValue={activity.secondsPace}/><br />
                    Link to Map: <input type="text" name='mapLink' defaultValue={activity.mapLink}/><br />
                    <input type="submit" value='Submit Activity'/>
                </form>
            </Default>
        )
    }
}

module.exports = Edit