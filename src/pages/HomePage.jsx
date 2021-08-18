import { React, useEffect, useState } from "react";
import { getAllTeams } from "../api/callTeam";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TeamCard } from "../components/TeamCard";

export const HomePage = () => {
  const [teams, setTeams] = useState();

  useEffect(() => {
    const readTeams = async () => {
      getAllTeams().then((newTeams) => setTeams(newTeams));
    };
    readTeams().catch(console.error);
    console.log(teams);
  }, [teams]);

  if (!teams) {
    return <h1>Teams not found</h1>;
  }

  return (
    <Container className="home-page">
      <Row className="mt-5">
        <Col>
          <h1 className="mx-3">IPL Dashboard</h1>
        </Col>
      </Row>
      <Row>
        {teams.map((team) => (
          <TeamCard key={team.id} teamName={team.teamName} />
        ))}
      </Row>
    </Container>
  );
};
