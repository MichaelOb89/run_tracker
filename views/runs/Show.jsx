const React = require('react')

class Show extends React.Component{
    render(){
        const {activity} = this.props
        let start = 0
        {for(let i =0;i<activity.mapLink.length;i++){
            if(activity.mapLink[i] == '?'){
                start = i+1
            }
        }}
        return(
            <>
                <h1>{activity.title} on {activity.date.toDateString()}</h1>
                <iframe src={`https://www.google.com/maps/d/u/0/embed?${activity.mapLink.substring(start)}`} width="640" height="480"></iframe>
            </>
        )
    }
}

module.exports = Show