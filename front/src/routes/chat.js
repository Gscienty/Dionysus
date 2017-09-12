import React from 'react';
import { connect } from 'dva';
import DashboardComponent from '../components/user-dashboard/dashboard';
import Message from '../components/chat/message-component';
import MessageContainer from '../components/chat/message-container-component';
import { routerRedux } from 'dva/router';

export default connect()(({ dispatch }) => <DashboardComponent dispatch={ dispatch }>
    <MessageContainer style={{ background: '#efefef' }}>
        <Message nickname='Alice' message='hi' />
        <Message other nickname='Bob' message='hello' />
        <Message nickname='Alice' message='this is Alice' />
        <Message other nickname='Bob' message='this is Bob' />
    </MessageContainer>
</DashboardComponent>);