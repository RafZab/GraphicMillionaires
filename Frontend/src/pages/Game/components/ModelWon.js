import { Modal, Button, Row, Col } from 'react-bootstrap';
import fireworks from './fireworks.gif'
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
                    <Row>
                        <Col xs='3' >
                            <img src={fireworks} alt="fireworks" />
                        </Col>
                        <Col xs="6" >
                            <div className="d-flex align-items-center justify-content-center">
                                <div className="text-center">
                                    <h4 className="mt-5">Gratulacje {props.nick}!</h4>
                                    <p className={`mt-3`}>
                                        Wygrywasz <strong> {props.money} PLN! </strong>
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col xs="3">
                            <img src={fireworks} alt="fireworks" />
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer className="bg-light">
                    <Button onClick={props.onHide}>Zamknij</Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}

export default ModelWon;