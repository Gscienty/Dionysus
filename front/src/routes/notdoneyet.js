import React from 'react';
import { connect } from 'dva';
import DontDoItComponent from '../components/user-dashboard/havenotdoit';
import DashboardComponent from '../components/user-dashboard/dashboard';
import { routerRedux } from 'dva/router';

export default connect()( ({ dispatch }) => <DashboardComponent dispatch={ dispatch }>
    <DontDoItComponent />
</DashboardComponent>);