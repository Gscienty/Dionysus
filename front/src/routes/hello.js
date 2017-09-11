import React from 'react';
import { connect } from 'dva';
import LoginComponent from '../components/welcome/login';
import { routerRedux } from 'dva/router';

export default connect()(({ dispatch }) => <LoginComponent
    onEnter={
        () => { dispatch(routerRedux.push('/home')) }
    }
/>);