const React = require('react')

class New extends React.Component{
    render(){
        return(
            <>
                <h1>Create new Event</h1>
                <form method='POST' action='/events'>
                    Title: <input type="text" name='title'/><br />
                    Date: <input type="date" name='date'/><br />
                    Distance(Miles): <input type="number" step="0.1" name='distance'/><br />
                    <input type="submit" value='Submit Activity'/>
                </form>
            </>
        )
    }
}

module.exports = New