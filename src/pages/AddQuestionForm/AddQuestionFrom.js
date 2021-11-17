import { React, useState } from "react";
import { useHistory } from "react-router";
import ButtonInput from "../../components/UI/ButtonInput/ButtonInput";
import Input from "../../components/UI/Input/Input";
import axios from "../../axios";

import './AddQuestionFrom.css';

const AddQuestionForm = (props) => {
    const history = useHistory()

    const [question, setQuestion] = useState('')
    const [correctAnswer, setCorrectAnswer] = useState('')
    const [incorrectAnswer1, setIncorrectAnswer1] = useState('')
    const [incorrectAnswer2, setIncorrectAnswer2] = useState('')
    const [incorrectAnswer3, setIncorrectAnswer3] = useState('')

    const submitHandler = () => {
        const newQuestion = {
            asking: question,
            correctAnswer: correctAnswer,
            incorrectAnswer1: incorrectAnswer1,
            incorrectAnswer2: incorrectAnswer2,
            incorrectAnswer3: incorrectAnswer3,
        }
        axios.post('/question', newQuestion)

        history.push('/')
    }

    return (
        <div className="container mt-3 mb-3">
            <div className="d-flex align-items-center justify-content-center">
                <div className="cards">
                    {/* <form> */}
                    <div>
                        <h2>Dodaj pytanie</h2>
                        <div className="d-flex align-items-center justify-content-center">
                            <Input value={question} onChange={(event) => {
                                setQuestion(event.target.value);
                            }}>Pytanie</Input>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <Input value={correctAnswer} onChange={(event) => {
                                setCorrectAnswer(event.target.value);
                            }}>Prawidłowa odpowiedź</Input>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <Input value={incorrectAnswer1} onChange={(event) => {
                                setIncorrectAnswer1(event.target.value);
                            }}>Nieprawidłowa odpowiedź</Input>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <Input value={incorrectAnswer2} onChange={(event) => {
                                setIncorrectAnswer2(event.target.value);
                            }}>Nieprawidłowa odpowiedź</Input>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <Input value={incorrectAnswer3} onChange={(event) => {
                                setIncorrectAnswer3(event.target.value);
                            }}>Nieprawidłowa odpowiedź</Input>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <ButtonInput type="submit" onClick={submitHandler}>Zatwierdź</ButtonInput>
                        <ButtonInput type="button" onClick={() => { history.push('/') }}>Wróć</ButtonInput>
                    </div>
                    {/* </form> */}
                </div>

            </div>
        </div>
    );
}

export default AddQuestionForm;