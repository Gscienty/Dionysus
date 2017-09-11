import { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


export default class TicketComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dialogDisplayFlag: false,
            dialogTitle: '',
            dialogMessage: ''
        };
    }
    render() {
        return <div>
            <MuiThemeProvider>
                <List>
                    <ListItem
                        primaryText="Name"
                        secondaryText={ this.props.name === '' ? 'Unknow' : this.props.name } />
                    <ListItem
                        primaryText="Ticket"
                        secondaryText={ this.props.ticketCode === '' ? 'Unknow' : this.props.ticketCode } />
                    <ListItem
                        primaryText="Create timestamp"
                        secondaryText={ this.props.createTime === -1 ? 'Unknow' : this.props.createTime } />
                    <ListItem
                        primaryText="Expire timestamp"
                        secondaryText={ this.props.expireTime === -1 ? 'Unknow' : this.props.expireTime } />
                </List>
            </MuiThemeProvider>
            {
                this.props.ticketCode === '' ?
                <MuiThemeProvider>
                    <RaisedButton
                        style={{ marginTop: 30 }}
                        label="Request create a ticket"
                        primary
                        fullWidth
                        onClick={
                            () => {
                                let dialogEntity = this.props.createTicket();
                                this.setState({
                                    dialogTitle: dialogEntity.title,
                                    dialogMessage: dialogEntity.message,
                                    dialogDisplayFlag: true
                                })
                            }
                        } />
                </MuiThemeProvider>
                :
                <MuiThemeProvider>
                    <RaisedButton style={{ marginTop: 30 }} label="delete the ticket" secondary fullWidth />
                </MuiThemeProvider>
            }

            <MuiThemeProvider>
                <Dialog
                    open={ this.state.dialogDisplayFlag }
                    title={ this.state.dialogTitle }
                    onRequestClose={ () => this.setState({ dialogDisplayFlag: false }) }
                    actions={ [
                        <FlatButton
                            label="Okay"
                            primary
                            onClick={ () => this.setState({ dialogDisplayFlag: false }) }
                        />
                    ] }>
                    { this.state.dialogMessage }
                </Dialog>
            </MuiThemeProvider>
        </div>;
    }
}