import { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { feedbackMessage: '', drawerOpenFlag: false };
    }

    render() {
        return <div>
            <MuiThemeProvider>
                <RaisedButton
                    onClick={ () => this.props.chatting() }
                    style={{ height: 48, marginTop: 20 }}
                    label="chatting with someone"
                    primary
                    fullWidth
                />
            </MuiThemeProvider>
            <MuiThemeProvider>
                <Card style={{ marginTop: 20, marginBottom: 313 }}>
                    <CardHeader
                        style={{ fontWeight: 900 }}
                        title="Could you help us?"
                    />
                    <CardText>
                        <p style={{ lineHeight: 2, textIndent: 18 }}>Do not do anything WRONG. Much better if you can give any advices to us.</p>
                        
                    <TextField
                        hintText="Message"
                        floatingLabelText="Feedback message."
                        multiLine
                        value={ this.state.feedbackMessage }
                        onChange={ e => this.setState({ feedbackMessage: e.target.value }) }
                    />
                    </CardText>
                    <CardActions>
                        <FlatButton
                            label="Feedback"
                            onClick={ () => this.props.feedback(this.state.feedbackMessage) }
                        />
                    </CardActions>
                </Card>
            </MuiThemeProvider>
        </div>
    }
}