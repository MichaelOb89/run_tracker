const React = require('react')

class New extends React.Component{
    render(){
        return(
            <>
                <h1>Create new Activity</h1>
                <form method='POST' action='/runs'>
                    Title: <input type="text" name='title'/><br />
                    Date: <input type="date" name='date'/><br />
                    Distance(Miles): <input type="number" name='distance'/><br />
                    Pace {`(minutes:seconds)`}: <input type="number" name='minutesPace'/>: <input type="number" name='secondsPace'/><br />
                    Link to Map: <input type="text" name='mapLink' /><br />
                    <input type="submit" value='Submit Activity'/>
                </form>
            </>
        )
    }
}

module.exports = New