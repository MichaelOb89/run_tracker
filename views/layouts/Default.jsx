const React = require('react')

class Default extends React.Component {
    render(){
        return(
            <html>
                <head>
                    <link rel="stylesheet" href='/css/style.css' />
                    <title>{title}</title>
                </head>
                <body>
                    <nav>
                        <a href="/runs"></a>
                    </nav>
                </body>
            </html>
        )
    }
}