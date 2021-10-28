
import { useHistory } from "react-router";
import ButtonInput from "../../components/UI/ButtonInput/ButtonInput";
import Input from "../../components/UI/Input/Input";

import './AddQuestionFrom.css';

const AddQuestionForm = (props) => {
    const history = useHistory()
    return (
        <div className="container mt-3 mb-3">
            <div className="cards">
                {/* <form> */}
                <div>
                    <h2>Dodaj pytanie</h2>
                    <div className="d-flex align-items-center justify-content-center">
                        <Input>Question</Input>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <Input>Correct answer</Input>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <Input>Incorrect answer</Input>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <Input>Incorrect answer</Input>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <Input>Incorrect answer</Input>
                    </div>
                </div>
                <div>
                    <ButtonInput type="submit">Zatwierdź</ButtonInput>
                    <ButtonInput onClick={() => { history.push('/') }}>Wróć</ButtonInput>
                </div>

                {/* </form> */}
            </div>
        </div>
    );
}

export default AddQuestionForm;