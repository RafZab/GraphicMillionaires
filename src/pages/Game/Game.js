import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { useHistory } from 'react-router';
import axios from "../../axios";
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
    const [questions, setSQuestions] = useState(null)
    const [question, setSQuestion] = useState(null)
    const [nick, setNick] = useState("Gosia")
    const [money, setMoney] = useState(0)
    const [countQuestion, setCountQuestion] = useState(0)
    const [modalShow, setModalShow] = useState(false)
    const [loading, setLoading] = useState(true)
    const [gameOver, setGameOver] = useState(false)

    const fetchQuestion = async () => {
        try {
            await axios.get('/question').then((response) => {
                setSQuestions(response.data);
            });
            setLoading(false)
        } catch {
            console.log("Error in fetch statistics!")
        }
    }

    useEffect(() => {
        fetchQuestion()
    }, [])

    useEffect(() => {
        if (questions) {
            const answers = [questions[countQuestion].correctAnswer, questions[countQuestion].incorrectAnswer1, questions[countQuestion].incorrectAnswer2, questions[countQuestion].incorrectAnswer3]
            const shuffledArray = answers.sort((a, b) => 0.5 - Math.random());
            const questionMake = {
                asking: questions[countQuestion].asking,
                answers: shuffledArray,
            }
            setSQuestion(questionMake)
        }
    }, [countQuestion, questions])

    if (loading) {
        return null;
    }

    const highlightCorrect = (answer) => {
        if (answer === questions[countQuestion].correctAnswer)
            return 'correct'
        return 'game'
    }

    const resignHandler = () => {
        if (countQuestion !== 0) {
            setMoney(sumWon.map(m => {
                if (m.question === countQuestion)
                    return m.value
            }))
        }
        setModalShow(true)
    }

    const saveResult = async () => {
        await axios.post('/result', { nick: nick, winMoney: money })
    }

    const modalHideHandler = () => {
        saveResult();
        setModalShow(false);
        history.push('/');
    }

    const checkAnswerHandler = (answer) => {
        if (answer === questions[countQuestion].correctAnswer) {
            if (countQuestion === 11)
                setModalShow(true);
            setCountQuestion((prevState) => prevState + 1);
        }
        else {
            setGameOver(true);
            if (countQuestion >= 2)
                setMoney(1000)
            else if (countQuestion >= 7)
                setMoney(40000)
            setModalShow(true)
        }
    }

    return (
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col xs={8}>
                    <div className="panel-game">
                        <Row className="justify-content-md-center" style={{ marginTop: '370px' }}>
                            <Col xs lg="10">
                                <div className="panel-question m-2">
                                    <p className="m-1"><h5>Pytanie {countQuestion + 1}</h5></p>
                                    <p>{question.asking}</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs lg="5">
                                <div className={`panel-button-${(!gameOver) ? 'game' : highlightCorrect(question.answers[0])} m-2`} onClick={() => checkAnswerHandler(question.answers[0])}>
                                    <p><h5 className="m-1">A:</h5>{question.answers[0]}</p>
                                </div>
                            </Col>
                            <Col xs lg="5">
                                <div className={`panel-button-${(!gameOver) ? 'game' : highlightCorrect(question.answers[1])} m-2`} onClick={() => checkAnswerHandler(question.answers[1])}>
                                    <p><h5 className="m-1">B:</h5>{question.answers[1]}</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col xs lg="5">
                                <div className={`panel-button-${(!gameOver) ? 'game' : highlightCorrect(question.answers[2])} m-2`} onClick={() => checkAnswerHandler(question.answers[2])}>
                                    <p><h5 className="m-1">C:</h5>{question.answers[2]}</p>
                                </div>
                            </Col>
                            <Col xs lg="5">
                                <div className={`panel-button-${(!gameOver) ? 'game' : highlightCorrect(question.answers[3])} m-2`} onClick={() => checkAnswerHandler(question.answers[3])}>
                                    <p><h5 className="m-1">D:</h5>{question.answers[3]}</p>
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
                                        question={countQuestion + 1}
                                        index={item.question}
                                        sumWon={item.value} />
                                )}
                            </tbody>
                        </Table>
                        <Row className="justify-content-md-center">
                            <Col xs lg="5">
                                <div className="panel-button-game m-2" onClick={resignHandler}>
                                    <h5 className="m-1">Zrezygnuj</h5>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <ModelWon
                nick={nick}
                money={money}
                show={modalShow}
                onHide={modalHideHandler} />
        </Container >
    );
}

export default Game;