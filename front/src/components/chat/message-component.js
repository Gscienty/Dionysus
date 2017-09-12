import { Component } from 'react';


export default class MessageComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div style={{
            display: 'flex'
        }}>
            <div
                style={{
                    marginTop: 5,
                    order: this.props.other ? 0 : 1
                }}>
                <div
                    className="avatar-container"
                    style={{
                        width: 39,
                        minWidth: 39,
                        height: 39,
                        minHeight: 39,
                        position: 'relative',
                        textAlign: 'center',
                        lineHeight: '39px',
                        fontWeight: 900
                    }}>
                    <div
                        className="avatar"
                        style={{
                            width: '100%',
                            height: '100%',
                            background: '#ffffff',
                            borderTopLeftRadius: '50%',
                            borderBottomLeftRadius: '50%',
                            borderBottomRightRadius: '50%',
                            borderTopRightRadius: '50%'
                        }}>
                        { this.props.nickname && this.props.nickname.length > 1 ? this.props.nickname.substring(0, 1) : 'D' }
                    </div>
                </div>
            </div>
            <div
                className="massage-box"
                style={{
                    padding: '0 10px',
                    width: '100%',
                    textAlign: this.props.other ? 'left' : 'right'
                }}>
                <span
                    className="message-nick-name"
                    style={{
                        padding: '5px 2px',
                        display: 'block',
                        fontSize: 14,
                        color: '#5f6265'
                    }}>{ this.props.nickname ? this.props.nickname : 'Dionysus' }</span>
                <div
                    className="message-content"
                    style={{
                        position: 'relative',
                        display: 'inline-block',
                        background: this.props.other ? '#ffffff' : '#00FF99',
                        textAlign: 'left',
                        padding: '6px 12px',
                        maxWidth: '90%',
                        minHeight: 35,
                        border: '1px solid #cccccc',
                        borderBottomLeftRadius: 8,
                        borderTopLeftRadius: 8,
                        borderBottomRightRadius: 8,
                        borderTopRightRadius: 8
                    }}>
                    <span>{ this.props.message }</span>
                    <span>
                        <div style={{
                                left: this.props.other ? -9 : 'auto',
                                right: this.props.other ? 'auto': -9,
                                borderRight: this.props.other ? '10px solid #cccccc' : 'none',
                                borderLeft: this.props.other ? 'none' : '10px solid #cccccc',
                                top: 5,
                                transform: this.props.other ? 'rotate(20deg)' : 'rotate(-20deg)',
                                position: 'absolute',
                                borderTop: '2px solid transparent',
                                borderBottom: '7px solid transparent'
                            }}></div>
                        <div style={{
                                left: this.props.other ? -7 : 'auto',
                                right: this.props.other ? 'auto': -7,
                                borderRight: this.props.other ? '10px solid #ffffff' : 'none',
                                borderLeft: this.props.other ? 'none' : '10px solid #00FF99',
                                top: 6,
                                transform: this.props.other ? 'rotate(20deg)' : 'rotate(-20deg)',
                                position: 'absolute',
                                borderTop: '2px solid transparent',
                                borderBottom: '7px solid transparent'
                            }}></div>
                    </span>
                </div>
            </div>
        </div>;
    }
}