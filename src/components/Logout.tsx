import React from 'react';
import { Button } from 'reactstrap';
import { clearState } from '../Store';
import '../style sheets/Logout.scss'

export const Logout: React.FC = () => {
    clearState();

    return (
        <div className="logout">
            <h1>You have logged out</h1>
            <Button outline className="danger" href="/" >Return Home</Button>
        </div>
    )
}