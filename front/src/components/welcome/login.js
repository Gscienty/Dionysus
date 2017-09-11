import { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PowerSettingsNewIcon from 'material-ui/svg-icons/action/power-settings-new';
import RaisedButton from 'material-ui/RaisedButton';

export default class LoginComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            <h1 style={{
                textAlign: 'center',
                color: 'rgba(0, 0, 0, 0.4)',
                paddingTop: 120,
                paddingBottom: (window.innerHeight - 300)
            }}>DIONYSUS</h1>
            <MuiThemeProvider>
                <RaisedButton
                    onClick={ () => this.props.onEnter() }
                    style={{ height: 48 }}
                    label="Enter"
                    secondary
                    fullWidth
                    icon={ <PowerSettingsNewIcon /> }
                />
            </MuiThemeProvider>
        </div>
    }
}