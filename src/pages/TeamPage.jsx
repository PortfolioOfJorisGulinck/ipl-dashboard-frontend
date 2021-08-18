import { React, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import { MatchSmallCard } from "../components/MatchSmallCard";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { getTeam } from "../api/callTeam";
import { Link, useParams } from "react-router-dom";
import { teamRoute, matchRoute, homeRoute } from "../routes";

const year = 2020;

export const TeamPage = () => {
  const { teamName } = useParams();
  const [team, setTeam] = useState({ matches: [] });

  useEffect(() => {
    const readTeam = async () => {
      getTeam(teamName).then((newTeam) => setTeam(newTeam));
    };
    readTeam().catch(console.error);
  }, [teamName]);

  const winpercentage = Math.round((team.totalWins / team.totalMatches) * 100);
  const verliespercentage = 100 - winpercentage;

  if (!team || !team.teamName) {
    return <h1>Team not found</h1>;
  }

  return (
    <Container className="team-page">
      <Row className="mt-5">
        <Col xs="4">
          <h1 className="mx-3">{team.teamName}</h1>
        </Col>
        <Col xs="8">
          <ProgressBar className="m-4">
            <ProgressBar
              striped
              variant="success"
              now={winpercentage}
              label={`${winpercentage}% wins of all matches`}
            />
            <ProgressBar striped variant="danger" now={verliespercentage} />
          </ProgressBar>
        </Col>
        <Col>
          <MatchDetailCard team={team} match={team.matches[0]} numOfCol={12} />
        </Col>
      </Row>
      <Row>
        {team.matches.slice(1).map((match) => (
          <MatchSmallCard
            key={team.id}
            teamName={team.teamName}
            match={match}
          />
        ))}
      </Row>
      <Row>
        <Col
          md={{ span: 3, offset: 9 }}
          className="d-flex flex-row-reverse mb-5"
        >
          <Link to={`${teamRoute}/${team.teamName}${matchRoute}/${year}`}>
            <Button>See all matches</Button>
          </Link>
          <Link to={homeRoute} >
            <Button className="mx-3">See all teams</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
