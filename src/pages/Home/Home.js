import Logo from '../../logo.png';
import Money from '../../money.png';
import Button from '../../components/UI/Button/Button';
import './Home.css';
import { useHistory } from 'react-router';

function Home() {
    const history = useHistory()
    return (
        <div className="container mt-2">
            <div className="d-flex align-items-center justify-content-center">
                <img className="image mt-3 mb-3" src={Logo} alt="Logo" width="400" height="400" />
            </div>
            <div>
                <div className="d-flex justify-content-around">
                    <img className="" src={Money} alt="Logo" width="200" height="200" />
                    <div>
                        <div className="d-flex align-items-center justify-content-center">
                            <Button onClick={() => { history.push('/game') }}>Zacznij grę</Button>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <Button onClick={() => { history.push('/statistics') }}>Statystyki</Button>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <Button onClick={() => { history.push('/add-question') }}>Dodaj pytanie</Button>
                        </div>
                    </div>
                    <img className="" src={Money} alt="Logo" width="200" height="200" />
                </div>
            </div>
        </div>
    );
}

export default Home;