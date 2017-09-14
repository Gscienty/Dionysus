import { Component } from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import SendIcon from 'material-ui/svg-icons/content/send';

export default class MessageInputComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div style={{
            background: '#f5f1ee',
            padding: '5px',
            display: 'flex'
        }}>
            <MuiThemeProvider>
                <TextField ref="messageInput" style={{
                    background: '#ffffff',
                    fontSize: 16,
                    width: 'calc(100% - 65px)',
                    overflow: 'hidden',
                    border: 'none',
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopRightRadius: 10,
                    padding: '5px',
                    marginLeft: '1em',
                    marginRight: '1em'
                }} />
            </MuiThemeProvider>
            <MuiThemeProvider>
                <IconButton
                    style={{ width: 56, height: 56 }}
                    iconStyle={{ width: 28, height: 28 }}
                    onClick={
                        () => {
                            this.refs.messageInput.focus();
                        }
                    }><SendIcon /></IconButton>
            </MuiThemeProvider>
        </div>;
    }
}