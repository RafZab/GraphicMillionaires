import './Input.scss';

const Input = (props) => {
    return (
        <div className="form__group field">
            <input onChange={props.onChange} value={props.value} type="input" className="form__field" placeholder={props.children} required />
            <label htmlFor="name" className="form__label">{props.children}</label>
        </div>
    );
}

export default Input;