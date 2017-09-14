import { Component } from 'react';


export default class MessageContainerComponent extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.refs.container.scrollTop = this.refs.container.scrollHeight;
    }
    render() {
        return <div ref="container" style={{
            ...this.props.style,
            height: `calc(${window.screen.availHeight}px - 263px)`,
            position: 'relative',
            zIndex: 10,
            transition: 'all .25s ease-in-out',
            overflow: 'scroll'
        }}>
            { this.props.children }
        </div>
    }
}