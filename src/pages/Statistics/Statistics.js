import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import axios from "../../axios";
import Statistic from './components/Statistic/Statistic';

import top from './top.jpg'
import backArrow from './arrow-left-circle.svg'

import './Statistics.css';

const Statistics = () => {
    const [statistics, setStatistics] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchStatistics = async () => {
        try {
            await axios.get('/result').then((response) => {
                setStatistics(response.data);
            });
            setLoading(false)
        } catch {
            console.log("Error in fetch statistics!")
        }
    }

    useEffect(() => {
        fetchStatistics()
    }, [])

    const contextStatistics = loading ? null : statistics.map((statistic, index) =>
        <Statistic
            key={statistic.id}
            number={index + 1}
            nick={statistic.nick}
            win={statistic.winMoney}
            date={statistic.date}
        />
    )

    return (
        <div className="container mt-3">
            <div className="card">
                <Card>
                    <Card.Body>
                        <Row>
                            <Col xs="2">
                                <NavLink to="/" className="text-back">
                                    <span><img src={backArrow} alt="back" /> powrót do menu</span>
                                </NavLink>
                            </Col>
                            <Col xs="8" className="d-flex align-items-center justify-content-center">
                                <img src={top} alt="TOP 10" />
                            </Col>
                            <Col xs="2">
                            </Col>
                        </Row>

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
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Statistics;