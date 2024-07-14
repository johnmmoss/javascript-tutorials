import React, { useState } from "react";
import UserCard from "./UserCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { User } from "./RandomUsers"; // Assuming the User interface is imported from './types'

const App: React.FC = () => {
  const [users, setUsers] = useState<User[] | null>(null);

  const fetchUsers = () => {
    // https://randomuser.me/documentation
    fetch("https://randomuser.me/api?results=10")
      .then((response) => response.json())
      .then((json) => json.results)
      .then((users) => {
        console.log(users);
        setUsers(users); // Update the users state with the fetched data
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Row>
        <Col className="justify-content-center">
          <div className="text-center">
            <h1>Random Users</h1>
            <Button onClick={fetchUsers}>Load Users</Button>
          </div>
        </Col>
      </Row>
      <Row className="mt-5 gx-5 gy-5">
        {users ? (
          users.map((user) => (
            <Col key={user.login.uuid} xs={12} sm={6} md={4} lg={3}>
              <UserCard user={user} />
            </Col>
          ))
        ) : (
          <div>no users</div>
        )}
      </Row>
    </Container>
  );
};

export default App;
