import { React } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { teamRoute } from "../routes";

export const TeamCard = ({ teamName }) => {
  if (!teamName) return null;

  return (
    <Col xs="12" md="6" lg="4">
      <Card className="my-3">
        <Card.Header className="p-3">
          <Card.Title>{teamName}</Card.Title>
        </Card.Header>
        <Card.Body className="p-3">
          <Link to={`${teamRoute}/${teamName}`}>
            <Button>See matches</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};
