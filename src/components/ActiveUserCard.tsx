import React, { useState } from 'react';
import { Card, CardText, CardTitle, CardBody, CardLink, ListGroupItem, ListGroup, Collapse} from 'reactstrap';
import { IUser } from '../interfaces';
import '../style sheets/ActiveUserCard.scss';


export const ActiveUserCard: React.FC<IUser> = (props: IUser) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <Card style={{ backgroundColor: '#ba55d3', width: '18rem' }}>
        <img width="250" src={props.profilePicture} alt=""/>
        {/* <CardImg height="30%" width="30%" variant="top" src={props.profilePicture} /> */}
        <CardBody>
            <CardTitle>{props.username}</CardTitle>
            <CardTitle>BIO: <i className="arrow down" onClick={toggle}></i>
            </CardTitle>
            <Collapse isOpen={!isOpen}>
                <CardText>
                    {props.bio}
                </CardText>
                <br/>
            </Collapse>
            <ListGroup className="list-group-flush">
                <CardTitle>Fist and Last Name:</CardTitle>
                <ListGroupItem style={{ backgroundColor: '#ba55d3' }}>{props.firstname} {props.lastname}</ListGroupItem>
                <CardTitle>Address:</CardTitle>
                <ListGroupItem style={{ backgroundColor: '#ba55d3' }}>{props.address}</ListGroupItem>
                <CardTitle>Phone Number:</CardTitle>
                <ListGroupItem style={{ backgroundColor: '#ba55d3' }}>{props.phoneNumber}</ListGroupItem>
            </ListGroup>
        </CardBody>
        <CardBody>
        <form action="/profile/edit" method="get">
            <button type="submit" className="activeUserCardButton">Edit Profile</button>
        </form>
        </CardBody>
        </Card>
    )
}