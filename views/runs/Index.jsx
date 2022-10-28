const React = require('react')

class Index extends React.Component{
    render(){
        const { activities } = this.props
        return(
            <>
                <h1>Index Page</h1>
                <ul>
                    {
                        activities.map((activity) => {
                            return(
                                <li key={activity._id}>
                                    <a href={`/runs/${activity._id}`}>{activity.title}</a>
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