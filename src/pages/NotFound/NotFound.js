import { useLocation } from "react-router";


const NotFound = () => {
    let location = useLocation();
    return (
        <h1 className="d-flex align-items-center justify-content-center mt-5">
            Error 404: page not found "<code>{location.pathname}</code>".
        </h1>
    );
}

export default NotFound;