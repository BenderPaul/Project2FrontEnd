import React, { useState } from 'react';
import { Card, CardText, CardTitle, CardBody, ListGroupItem, ListGroup, Collapse} from 'reactstrap';
import { IUser } from '../interfaces';
import '../style sheets/ActiveUserCard.scss';


export const ActiveUserCard: React.FC<IUser> = (props: IUser) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <div id="cardContainer">
            <Card style={{ backgroundColor: '#c4a0e6', width: '18rem' }} id="card">
                <img width="250" src={props.profilePicture} alt='Missing: Profile Picture' id="profileImage"/>
                <CardBody>
                <CardTitle id="username">{props.username}</CardTitle>
                <CardTitle>BIO: <i className="arrow down" onClick={toggle}></i>
                </CardTitle>
                <Collapse isOpen={!isOpen}>
                    <CardText>
                        {props.bio}
                    </CardText>
                    <br/>
                </Collapse>
                <ListGroup className="list-group-flush">
                    <CardTitle>Name:</CardTitle>
                    <ListGroupItem style={{ backgroundColor: '#ba55d3' }}>{props.firstname} {props.lastname}</ListGroupItem>
                    <CardTitle>Occupation:</CardTitle>
                    <ListGroupItem style={{ backgroundColor: '#ba55d3' }}>{props.occupation}</ListGroupItem>
                    <CardTitle>Email:</CardTitle>
                    <ListGroupItem style={{ backgroundColor: '#ba55d3' }}>{props.email}</ListGroupItem>
                </ListGroup>
                </CardBody>
            </Card>
        </div>
    )
}