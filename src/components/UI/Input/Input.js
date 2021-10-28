import './Input.scss';

const Input = (props) => {
    return (
        <div class="form__group field">
            <input type="input" class="form__field" placeholder={props.children} required />
            <label for="name" class="form__label">{props.children}</label>
        </div>
    );
}

export default Input;