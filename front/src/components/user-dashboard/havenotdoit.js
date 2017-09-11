import { Component } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class HaveNotDoItComponent extends Component {
    render() {
        return <MuiThemeProvider>
            <Card>
                <CardHeader
                    style={{ fontWeight: 900 }}
                    title="ah~ Sorry..." />
                
                <CardText>
                    <p style={{ lineHeight: 2, textIndent: 18 }}>We have not done it yet, wait a minute. : }</p>
                </CardText>
            </Card>
        </MuiThemeProvider>
    }
}