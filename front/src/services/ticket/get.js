export async function getSelfTicket() {
    return fetch('/api/ticket', {
        method: 'GET',
        credentials: 'include'
    }).then(response => {
        if(response.status === 200) {
            return response.json();
        }
        else {
            Promise.reject(response.status);
        };
    }).catch(error => error);
};

export async function getTicket(ticketCode) {
    return fetch(`/api/ticket/${ticketCode}`, {
        method: 'GET',
        credentials: 'include'
    }).then(response => {
        if(response.status === 200) {
            return response.json();
        }
        else {
            Promise.reject(response.status);
        };
    }).catch(error => error);
};