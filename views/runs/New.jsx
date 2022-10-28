const React = require('react')

class New extends React.Component{
    render(){
        return(
            <>
                <h1>Create new Activity</h1>
                <form method='POST' action='/runs'>
                    Title: <input type="text" name='title'/><br />
                    Distance: <input type="number" name='distance'/><br />
                    Pace (minutes:seconds): <input type="number" name='minutesPace'/>: <input type="number" name='secondsPace'/><br />
                    <input type="Submit" value='Submit Activity'/>
                </form>
            </>
        )
    }
}

module.exports = New