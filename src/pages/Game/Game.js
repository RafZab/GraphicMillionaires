import React, { useState } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { useHistory } from 'react-router';

import TableWin from './components/TableWin';
import ModelWon from './components/ModelWon';

import './Game.css';

const sumWon = [
    {
        question: 12,
        value: 1000000
    },
    {
        question: 11,
        value: 500000
    },
    {
        question: 10,
        value: 250000
    },
    {
        question: 9,
        value: 125000
    },
    {
        question: 8,
        value: 75000
    },
    {
        question: 7,
        value: 40000
    },
    {
        question: 6,
        value: 20000
    },
    {
        question: 5,
        value: 10000
    },
    {
        question: 4,
        value: 5000
    },
    {
        question: 3,
        value: 2000
    },
    {
        question: 2,
        value: 1000
    },
    {
        question: 1,
        value: 500
    }
]

const Game = (props) => {
    const history = useHistory();
    const [countQuestion, setCountQuestion] = useState(1);
    const [modalShow, setModalShow] = useState(false);

    const modalHideHandler = () => {
        setModalShow(false);
        history.push('/');
    }

    return (
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col xs={8}>
                    <div className="panel-game">
                        <Row className="justify-content-md-center" style={{ marginTop: '370px' }}>
                            <Col xs lg="10">
                                <div className="panel-question m-2">
                                    <p className="m-1"><h5>Pytanie {countQuestion}</h5></p>
                                    <p>Treść pytania?</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs lg="5">
                                <div className="panel-button m-2">
                                    <p><h5 className="m-1">A:</h5> Cos cos cos tam </p>
                                </div>
                            </Col>
                            <Col xs lg="5">
                                <div className="panel-button m-2">
                                    <p><h5 className="m-1">B:</h5>Cos cos cos tam</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs lg="5">
                                <div className="panel-button m-2">
                                    <p><h5 className="m-1">C:</h5>Cos cos cos tam</p>
                                </div>
                            </Col>
                            <Col xs lg="5">
                                <div className="panel-button m-2">
                                    <p><h5 className="m-1">D:</h5>Cos cos cos tam</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col>
                    <div className="panel-win">
                        <Table responsive="sm" className="mt-5">
                            <thead className="colors-white">
                                <tr>
                                    <th>#</th>
                                    <th>Tablica wygranej </th>
                                </tr>
                            </thead>
                            <tbody>
                                {sumWon.map((item) =>
                                    <TableWin
                                        key={item.question}
                                        question={countQuestion}
                                        index={item.question}
                                        sumWon={item.value} />
                                )}
                            </tbody>
                        </Table>
                        <Row className="justify-content-md-center">
                            <Col xs lg="5">
                                <div className="panel-button m-2" onClick={() => setModalShow(true)}>
                                    <h5 className="m-1">Zrezygnuj</h5>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <ModelWon
                money={1000}
                show={modalShow}
                onHide={modalHideHandler} />
        </Container >
    );
}

export default Game;