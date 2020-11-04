import * as React from 'react';
import { IUser } from '../type';

//This component renders a form in order to register a new user

type Props = {
    saveUser: (user: IUser | any) => void
}

//This is clerical stuff to pass information to the store.... I think
export const AddUser: React.FC<Props> = ({ saveUser }) => {
    const [user, setUser] = React.useState<IUser | {}>()

    const handleUserData = (e: React.FormEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [e.currentTarget.id]: e.currentTarget.value,
        })
    }

    const addNewUser = (e: React.FormEvent) => {
        e.preventDefault()
        saveUser(user);
    }

        //This is the part thats rendered
    return (
        <form onSubmit = {addNewUser} className = "addUser">
            <input
                type = "text"
                id = "username"
                placeholder = "Username"
                onChange={handleUserData}
            />
            <br/>
            <input
                type = "text"
                id = "password"
                placeholder = "Password"
                onChange={handleUserData}
            />
            <br/>
            <input
                type = "text"
                id = "firstName"
                placeholder = "First Name"
                onChange={handleUserData}
            />
            <br/>
            <input
                type = "text"
                id = "lastName"
                placeholder = "Last Name"
                onChange={handleUserData}
            />
            <br/>
            <input
                type = "text"
                id = "email"
                placeholder = "Email"
                onChange={handleUserData}
            />
            <br/>
            <button disabled = {user === undefined ? true : false}>
                Register New User
            </button>
        </form>
    )
}