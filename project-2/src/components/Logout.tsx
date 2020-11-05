import React from 'react';
import { clearState } from '../Store';

export const Logout: React.FC = () => {
    clearState();

    return (
        <div>
            <h1>You have logged out</h1>
        </div>
    )
}