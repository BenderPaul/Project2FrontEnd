import React from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody, CardLink, ListGroupItem, ListGroup} from 'reactstrap';
import { IUser } from '../interfaces';


export const ActiveUserCard: React.FC<IUser> = (props: IUser) => {

    return(
        <Card style={{ width: '18rem' }}>
        <CardImg variant="top" src="https://s3.console.aws.amazon.com/s3/buckets/the-react-project-profile-info?region=us-west-2&tab=objects" />
        <CardBody>
            <CardTitle>{props.username}</CardTitle>
            <CardText>
                {props.bio}
            </CardText>
        </CardBody>
        <ListGroup className="list-group-flush">
            <ListGroupItem>{props.firstName}</ListGroupItem>
            <ListGroupItem>{props.lastName}</ListGroupItem>
            <ListGroupItem>{props.dob}</ListGroupItem>
        </ListGroup>
        <CardBody>
            <CardLink href="/profile/edit">Edit Profile</CardLink>
        </CardBody>
        </Card>
    )
}