import React, { useState } from 'react';
import { Card, CardText, CardTitle, CardBody, CardLink, ListGroupItem, ListGroup, Collapse} from 'reactstrap';
import { IUser } from '../interfaces';


export const ActiveUserCard: React.FC<IUser> = (props: IUser) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <Card style={{ width: '18rem' }}>
        <img width="250" src={props.profilePicture} alt=""/>
        {/* <CardImg height="30%" width="30%" variant="top" src={props.profilePicture} /> */}
        <CardBody>
            <CardTitle>{props.username}</CardTitle>
            <CardTitle onClick={toggle} >Bio:</CardTitle>
            <Collapse isOpen={!isOpen}>
                <CardText>
                    {props.bio}
                </CardText>
            </Collapse>
        </CardBody>
        <ListGroup className="list-group-flush">
            <ListGroupItem>{props.firstname} {props.lastname}</ListGroupItem>
            <ListGroupItem>{props.dob}</ListGroupItem>
        </ListGroup>
        <CardBody>
            <CardLink href="/profile/edit">Edit Profile</CardLink>
        </CardBody>
        </Card>
    )
}