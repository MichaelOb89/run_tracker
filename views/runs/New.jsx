const React = require('react')
const Default = require('../layouts/Default')

class New extends React.Component{
    render(){
        return(
            <Default title='Create new Activity'>
                <h1>Create new Activity</h1>
                <form method='POST' action='/runs'>
                    Title: <input type="text" name='title'/><br />
                    Date: <input type="date" name='date'/><br />
                    Distance(Miles): <input type="number" step="0.1" name='distance'/><br />
                    Pace {`(minutes:seconds)`}: <input type="number" name='minutesPace'/>: <input type="number" name='secondsPace'/><br />
                    Link to Map: <input type="text" name='mapLink' /><br />
                    <input type="submit" value='Submit Activity'/>
                </form>
            </Default>
        )
    }
}

module.exports = New