import React from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody, CardLink, ListGroupItem, ListGroup} from 'reactstrap';
import { IUser } from '../interfaces';


export const ActiveUserCard: React.FC<IUser> = (props: IUser) => {

    return(
        <Card style={{ width: '18rem' }}>
        <img width="250" src={props.profilePicture}/>
        {/* <CardImg height="30%" width="30%" variant="top" src={props.profilePicture} /> */}
        <CardBody>
            <CardTitle>{props.username}</CardTitle>
            <CardText>
                {props.bio}
            </CardText>
        </CardBody>
        <ListGroup className="list-group-flush">
            <ListGroupItem>{props.firstname}</ListGroupItem>
            <ListGroupItem>{props.lastname}</ListGroupItem>
            <ListGroupItem>{props.dob}</ListGroupItem>
        </ListGroup>
        <CardBody>
            <CardLink href="/profile/edit">Edit Profile</CardLink>
        </CardBody>
        </Card>
    )
}