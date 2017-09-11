export async function createTicket() {
    return fetch('/api/ticket', {
        method: 'PUT',
        credentials: 'include'
    }).then(response => response.status);
};