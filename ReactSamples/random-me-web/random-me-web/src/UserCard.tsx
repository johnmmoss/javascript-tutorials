import React from "react";
import Card from "react-bootstrap/Card";
import { User } from "./RandomUsers";

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={user.picture.large} />
      <Card.Body>
        <Card.Title>{`${user.name.first} ${user.name.last}`}</Card.Title>
        <Card.Subtitle>{user.email}</Card.Subtitle>
        <Card.Text>Gender: {user.gender}</Card.Text>
        <Card.Text>
          Location: {`${user.location.city}, ${user.location.country}`}
        </Card.Text>
        <Card.Text>Phone: {user.phone}</Card.Text>
        <Card.Text>Cell: {user.cell}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
