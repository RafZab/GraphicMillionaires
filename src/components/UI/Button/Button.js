import './Button.css';

const Button = props => {

    return (
        <nav>
            <ul
                className={props.className}
                onClick={props.onClick}
                disabled={props.disabled}
            >
                <li>
                    {props.children}
                    <span></span><span></span><span></span><span></span>
                </li>
            </ul>
        </nav>
    );
}

export default Button;