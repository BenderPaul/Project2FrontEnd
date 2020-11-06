import React from 'react';
import { Button } from 'reactstrap';
import { clearState } from '../Store';

export const Logout: React.FC = () => {
    clearState();

    return (
        <div>
            <h1>You have logged out</h1>
            <Button outline className="danger" href="/" >Return Home</Button>
        </div>
    )
}