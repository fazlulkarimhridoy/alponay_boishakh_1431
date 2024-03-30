import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            From error ErrorPage
            <Link to="/"><button>Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;