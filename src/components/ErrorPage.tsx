import React from 'react';
import '../style sheets/Error.scss';

export const ErrorPage: React.FC = () => {
    return (
        <div className="full">
            <div className="container">
                <div className="error">
                    <div className="errorText">
                        <h1>Error 404</h1>
                        <h4>Page not found!</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}