export async function deleteTicket(ticketCode) {
    return fetch(`/api/ticket/${ticketCode}`, {
        method: 'DELETE',
        credentials: 'include'
    }).then(response => response.status);
};