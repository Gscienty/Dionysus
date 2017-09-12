import React from 'react';
import { Router, Route } from 'dva/router';

function RouterConfig({ history }) {
    return (
        <Router history={history}>
            <Route path="/" component={ require('./routes/hello') } />
            <Route path="/home" component={ require('./routes/home') } />
            <Route path="/ticket" component={ require('./routes/ticket') } />
            <Route path="/not-done-yet" component={ require('./routes/notdoneyet') } />
            <Route path="/chat" component={ require('./routes/chat') } />
        </Router>
    );
}

export default RouterConfig;
