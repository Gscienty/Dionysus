import React from 'react';
import { connect } from 'dva';
import DashboardComponent from '../components/user-dashboard/dashboard';
import HomeComponent from '../components/user-dashboard/home';
import { routerRedux } from 'dva/router';

export default connect()(({ dispatch }) => <DashboardComponent>
    <HomeComponent 
        chatting={
            () => {

            }
        }

        feedback={
            (message) => {

            }
        } />
</DashboardComponent>);