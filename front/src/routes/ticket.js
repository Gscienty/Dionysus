import React from 'react';
import { connect } from 'dva';
import DashboardComponent from '../components/user-dashboard/dashboard';
import TicketComponent from '../components/ticket/index';
import { routerRedux } from 'dva/router';

export default connect(({ ticket }) => ({ ticket }))(({ ticket, dispatch }) => <DashboardComponent dispatch={ dispatch }>
    <TicketComponent
        { ...ticket }
        createTicket={
            () => {
                return {
                    title: "failure",
                    message: "cannot create a new ticket."
                }
            }
        } />
</DashboardComponent>);