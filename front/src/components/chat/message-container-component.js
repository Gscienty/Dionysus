import { Component } from 'react';


export default class MessageContainerComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div style={{
            ...this.props.style,
            height: 'calc((' + window.innerHeight + 'px - 142px) - 0px)',
            position: 'relative',
            zIndex: 10,
            transition: 'all .25s ease-in-out',
            overflow: 'scroll'
        }}>
            { this.props.children }
        </div>
    }
}