import React from 'react';
import { Router, Route } from 'dva/router';

function RouterConfig({ history }) {
    return (
        <Router history={history}>
            <Route path="/" component={ require('./routes/hello') } />
            <Route path="/home" component={ require('./routes/home') } />
            <Route path="/not-done-yet" component={ require('./routes/notdoneyet') } />
        </Router>
    );
}

export default RouterConfig;
