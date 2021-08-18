import { React } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { teamRoute } from "../routes";

export const MatchSmallCard = ({ teamName, match }) => {
  if (!match) return null;

  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;

  return (
    <Col xs="12" md="6" lg="4">
      <Card className="my-3">
        <Card.Header className="p-3">
          <Card.Title>
            vs <Link to={`${teamRoute}/${otherTeam}`}>{otherTeam}</Link>
          </Card.Title>
        </Card.Header>
        <Card.Body className="p-3">
          <Card.Text>
            {match.matchWinner} won by {match.resultMargin} {match.result}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
