export const listClients = async () => {
    return fetch(process.env.REACT_APP_BASE_API_URL + "listclientes");
}

export const retreveKpis = async () => {
    return fetch(process.env.REACT_APP_BASE_API_URL + "kpideclientes");
}

export const createClient = async (client) => {
    return fetch(process.env.REACT_APP_BASE_API_URL + "creacliente", {
        method: "POST", body: JSON.stringify(client), headers: {
            'Content-Type': 'application/json'
        },
    })
}