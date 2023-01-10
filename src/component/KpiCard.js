import React from "react";
import {useSelector} from "react-redux";
import {kpisSelector} from "../state/reducers/apiDataSlice";


export default function KpiCard() {
    const kpis = useSelector(kpisSelector);

    return (
        <div className="card col-5">
            <div className="card-header">
                <div className="col d-flex justify-content-center"><b>KPIs</b></div>
            </div>
            <div className="card-body d-flex justify-content-center align-items-center">
                <div className="col-6">
                    <div className="col-12 d-flex justify-content-center">Promedio</div>
                    <div className="col-12 d-flex justify-content-center align-items-center">{kpis.ageAverage}</div>
                </div>
                <div className="col-6">
                    <div className="col-12 d-flex justify-content-center">Desviación Est.</div>
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        {kpis.ageStandardDeviation}
                    </div>
                </div>
            </div>
        </div>
    );
}