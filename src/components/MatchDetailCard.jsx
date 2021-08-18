import { React } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { teamRoute } from "../routes";
import { Link } from "react-router-dom";

export const MatchDetailCard = ({ team, match, numOfCol }) => {
  if (!match) return null;

  const otherTeam = match.team1 === team.teamName ? match.team2 : match.team1;

  return (
    <Col md={numOfCol}>
      <Card className="my-3">
        <Card.Header className="pt-3">
          <Card.Title>Latest Matches</Card.Title>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md="8" sm="6">
              <Card.Title>
                vs <Link to={`${teamRoute}/${otherTeam}`}>{otherTeam}</Link>
              </Card.Title>
              <Card.Subtitle className="py-3">{match.date}</Card.Subtitle>
              <Card.Text>@ {match.venue}</Card.Text>
              <Card.Text>
                {match.matchWinner} won by {match.resultMargin} {match.result}
              </Card.Text>
            </Col>
            <Col>
              <Card.Subtitle>First Innings</Card.Subtitle>
              <Card.Text>{match.team1}</Card.Text>
              <Card.Subtitle>Second Innings</Card.Subtitle>
              <Card.Text>{match.team2}</Card.Text>
              <Card.Subtitle>Man of the match</Card.Subtitle>
              <Card.Text>{match.playerOfMatch}</Card.Text>
              <Card.Subtitle>Umpires</Card.Subtitle>
              <Card.Text>
                {match.umpire1}, {match.umpire2}
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};
