import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './Nick.css'

const Nick = () => {
    const history = useHistory();
    const [nick, setNick] = useState('')
    const [isValid, setIsValid] = useState(true)

    const submitHandler = (e) => {
        e.preventDefault();
        if (nick.trim()) {
            sessionStorage.removeItem("nick")
            sessionStorage.setItem("nick", JSON.stringify(nick))
            history.push('/game');
        } else {
            setIsValid(false)
        }
    }

    const textValid = <div id="emailHelp" className="form-text" style={{ color: "red" }}>Pole pseudonim nie może być puste!</div>

    return (
        <div className="d-flex align-items-center justify-content-center">
            <div className="panel-nick">
                <form onSubmit={submitHandler}>
                    <div class="mt-5 me-5 ms-5">
                        <h4 for="exampleInputEmail1" className="form-label">Twój pseudonim</h4>
                        <input onChange={(event) => {
                            setNick(event.target.value)
                        }} type="text" placeholder="Pseudonim" value={nick} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        {isValid ? null :textValid}
                    </div>
                    <div class="me-5 ms-5 mt-2">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Zapamiętaj mój pseudonim</label>
                    </div>
                    <div className="d-flex align-items-center justify-content-end me-5 ms-5 mt-2 mb-3">
                        <button type="submit" className="panel-button-game m-2" >
                            <h5 className="m-3">Start</h5>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Nick