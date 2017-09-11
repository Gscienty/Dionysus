import { getSelfTicket, getTicket } from '../services/ticket/get';
import { createTicket } from '../services/ticket/create';
import { deleteTicket } from '../services/ticket/delete';

export default {
    namespace: 'ticket',
    state: {
        ticketCode: '',
        createTime: -1,
        expireTime: -1,
        name: ''
    },
    effect: {
        *requestCreateTicket({ payload: { after } }, { call, put }) {
            let responseCode = yield call(createTicket);
            after(responseCode);
        },
        *getTicket({ }, { call, put }) {
            let entity = yield call(getSelfTicket);
            yield put('saveTicket', {
                payload: {
                    ticketCode: entity.ticketCode,
                    createTime: entity.createTime,
                    expireTime: entity.expireTime,
                    name: entity.name
                }
            });
        },
        *deleteTicket({ }, { call, put }) {
            yield call(deleteTicket);
            yield put('forgetTicket');
        }
    },
    reducers: {
        saveTicket(state, { payload: { ticketCode, createTime, expireTime, name } }) {
            return { ticketCode, createTime, expireTime, name };
        },
        forgetTicket(state, { }) {
            return { ticketCode: '', createTime: -1, expireTime: -1, name: '' };
        }
    }
}