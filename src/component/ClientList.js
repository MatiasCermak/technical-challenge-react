import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {clientsSelector} from "../state/reducers/apiDataSlice";
import {format, parseISO} from 'date-fns';

export default function ClientList() {
    const clients = useSelector(clientsSelector);

    return (
        <div className="card col-5" style={{height: "300px"}}>
            <div className="card-header">
                <div className="col d-flex justify-content-center"><b>Lista de Clientes</b></div>
            </div>
            <div className="card-body d-flex justify-content-center overflow-auto">
                {clients.length !== 0 ?
                    <ul>{clients.map(client => <li>{client.firstName} {client.lastName}, edad {client.age}, fecha
                        nac. {format(parseISO(client.birthDate), "dd/MM/yyyy")}, fecha est. de muerte {format(parseISO(client.estimatedDeathDate), "dd/MM/yyyy")}</li>)}</ul> :
                    <div>Lista de clientes vacía</div>}
            </div>
        </div>

    );
}