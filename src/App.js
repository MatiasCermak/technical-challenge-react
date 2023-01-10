import './App.css';
import ClientList from "./component/ClientList";
import KpiCard from "./component/KpiCard";
import ClientForm from "./component/ClientForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {listClients, retreveKpis} from "./api/springbootApi";
import {updateClients, updateKpis} from "./state/reducers/apiDataSlice";

function App() {
    const dispatch = useDispatch();
    const [refresh, toggleRefresh] = useState(false);
    useEffect(() => {
        listClients().then(res => res.json()).then(res => {
                if(res.code === "I1") {
                    dispatch(updateClients(res.data))
                }
            }
        )
        retreveKpis().then(res => res.json()).then(res => {
                if(res.code === "I1") {
                    dispatch(updateKpis(res.data))
                }
            }
        )
    }, [refresh])

    return (
        <div className="body justify-content-between">
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active"><b>AmazingApp</b></a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="m-1">
                <div className="">
                    <div className="col d-flex justify-content-center">
                        <ClientForm refresh={refresh} toggleRefresh={toggleRefresh}/>
                    </div>
                </div>
                <div className="d-flex ">
                    <div className="col d-flex justify-content-center h-25">
                        <KpiCard/>
                    </div>
                    <div className="col d-flex justify-content-center h-25">
                        <ClientList/>
                    </div>
                </div>
            </div>
            <footer>
                <div
                    className="text-center p-4"
                    style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}
                >
                    © 2023 Copyright
                </div>
            </footer>
        </div>

    );
}

export default App;
