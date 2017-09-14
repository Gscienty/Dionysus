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
            padding: '10px 19px',
            display: 'flex'
        }}>
            <MuiThemeProvider>
                <TextField style={{
                    background: '#ffffff',
                    fontSize: 21,
                    width: 'calc(100% - 65px)',
                    overflow: 'hidden',
                    border: 'none',
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopRightRadius: 10,
                    padding: '5px 5px 5px 5px'
                }} />
            </MuiThemeProvider>
            <MuiThemeProvider>
                <IconButton
                    style={{ width: 36, height: 36 }}
                    iconStyle={{ width: 36, height: 36 }}><SendIcon /></IconButton>
            </MuiThemeProvider>
        </div>;
    }
}