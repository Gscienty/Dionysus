import { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CloudIcon from 'material-ui/svg-icons/file/cloud';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ReceiptIcon from 'material-ui/svg-icons/action/receipt';
import PowerSettingsNewIcon from 'material-ui/svg-icons/action/power-settings-new';
import MailIcon from 'material-ui/svg-icons/content/mail';
import FlagIcon from 'material-ui/svg-icons/content/flag';
import SecurityIcon from 'material-ui/svg-icons/hardware/security';
import ChatIcon from 'material-ui/svg-icons/communication/chat';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

export default class DashboardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { feedbackMessage: '', drawerOpenFlag: false };
    }

    render() {
        return <div>
            <MuiThemeProvider>
                <Drawer
                    docked={ false }
                    width={ 200 }
                    open={ this.state.drawerOpenFlag }
                    onRequestChange={ () => this.setState({ drawerOpenFlag: false }) }>
                    <h1 style={{ textAlign: 'center', color: 'rgba(0, 0, 0, 0.4)' }}>DIONYSUS</h1>
                    <Divider />
                    <MenuItem leftIcon={ <ChatIcon /> }>Chat</MenuItem>
                    <MenuItem leftIcon={ <ReceiptIcon /> }>Ticket</MenuItem>
                    <MenuItem leftIcon={ <MailIcon /> }>Mail</MenuItem>
                    <MenuItem leftIcon={ <SecurityIcon /> }>Security</MenuItem>
                    <MenuItem leftIcon={ <FlagIcon /> }>FAQ</MenuItem>
                    <MenuItem leftIcon={ <PowerSettingsNewIcon /> }>Quit</MenuItem>
                </Drawer>
            </MuiThemeProvider>
            <MuiThemeProvider>
                <AppBar
                    title="Dionysus"
                    iconElementLeft={ <IconButton><CloudIcon /></IconButton> }
                    iconElementRight={<IconButton onClick={ () => this.setState({ drawerOpenFlag: true }) }><MoreVertIcon /></IconButton> } />
            </MuiThemeProvider>
            <div>
                { this.props.children }
                <p style={{ textAlign: 'center', color: 'rgba(0, 0, 0, 0.4)' }}>Developed by Dionysvs</p>
            </div>
        </div>
    }
}