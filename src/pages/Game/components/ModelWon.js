import { Modal, Button } from 'react-bootstrap';

function ModelWon(props) {
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton className="bg-light">
                    <Modal.Title id="contained-modal-title-vcenter" >
                        Milionerzy
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-light">
                    <div className="text-center">
                        <h4>Gratulacje!</h4>
                        <p>
                            Wygrałeś {props.money}
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer className="bg-light">
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}

export default ModelWon;