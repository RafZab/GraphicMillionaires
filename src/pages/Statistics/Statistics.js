import React, { useState, useEffect } from 'react';
import axios from "../../axios";
import Statistic from './components/Statistic/Statistic';

const Statistics = (props) => {
    const [statistics, setStatistics] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchStatistics = async () => {
        try {
            await axios.get('/result').then((response) => {
                setStatistics(response.data)
            });
            setLoading(true)
        } catch {
            console.log("Error in fetch statistics!")
        }
    }

    useEffect(() => {
        fetchStatistics()
    }, [])

    const contextStatistics = loading ? null : statistics.Map((statistic, index) => {
        <Statistic
            key={statistic.id}
            number={index}
            nick={statistic.nick}
            win={statistic.win}
            data={statistic.date}
        />
    })

    return (
        <div className="container mt-3">
            <div className="card">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Nick</th>
                            <th scope="col">Kwota</th>
                            <th scope="col">Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contextStatistics}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Statistics;