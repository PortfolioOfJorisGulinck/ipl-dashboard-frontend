import { React, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { getTeam } from "../api/callTeam";
import { getMatchesOfTeamByYear } from "../api/callMatch";
import { useParams, Link } from "react-router-dom";
import { MatchDetailCard } from "./../components/MatchDetailCard";
import { YearSelector } from "../components/YearSelector";
import { homeRoute } from "../routes";

//const teamName = "Delhi%20Capitals";
//const year = 2018;

export const MatchPage = () => {
  const { teamName, year } = useParams();
  const [matches, setMatches] = useState();
  const [team, setTeam] = useState({ matches: [] });

  useEffect(() => {
    const readMatchesOf = async () => {
      getMatchesOfTeamByYear(teamName, year).then((newMatches) =>
        setMatches(newMatches)
      );
    };
    readMatchesOf().catch(console.error);

    const readTeam = async () => {
      getTeam(teamName).then((newTeam) => setTeam(newTeam));
    };
    readTeam().catch(console.error);
  }, [teamName, year]);

  if (!matches) {
    return <h1>Matches not found</h1>;
  }
  return (
    <Container className="match-page">
      <Row className="mt-5">
        <Col>
          <h1 className="mx-3">Match Page</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <YearSelector teamName={teamName} year={year}/>
        </Col>
      </Row>
      <Row>
        {matches.map((match) => (
          <MatchDetailCard
            key={match.id}
            team={team}
            match={match}
            numOfCol={6}
          />
        ))}
      </Row>
      <Row>
        <Col
          md={{ span: 3, offset: 9 }}
          className="d-flex flex-row-reverse mb-5"
        >
          <Link to={homeRoute}>
            <Button>See all teams</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
