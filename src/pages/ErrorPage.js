import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div className="content container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1 className="mt-3 text-white bs-light bs-light-text-emphasis">Oops!</h1>
                    <p className="text-white bs-light bs-light-text-emphasis">Sorry, an unexpected error has occurred.</p>
                    <p className="text-white bs-light bs-light-text-emphasis">
                        <em>{error.statusText || error.message}</em>
                    </p>
                </div>
            </div>
        </div>
    )
}
