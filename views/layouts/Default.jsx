const React = require('react')

class Default extends React.Component {
    render(){
        const { activity, title } = this.props
        return(
            <html>
                <head>
                    <link rel="stylesheet" href='/css/style.css' />
                    <title>{title}</title>
                </head>
                <body>
                    <nav>
                        <a href="/runs"></a>
                        <a href="/runs/new">Add a new activity</a>
                    </nav>
                    {this.props.children}
                </body>
            </html>
        )
    }
}