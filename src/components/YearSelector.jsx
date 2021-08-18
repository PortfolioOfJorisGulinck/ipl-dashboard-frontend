import { React } from "react";
import Nav from "react-bootstrap/Nav";
import { teamRoute, matchRoute } from "../routes";

export const YearSelector = ({ teamName, year }) => {
  let years = [];
  const startYear = process.env.REACT_APP_DATA_START_YEAR;
  const endYear = process.env.REACT_APP_DATA_END_YEAR;

  for (let i = startYear; i <= endYear; i++) {
    years.push(i);
  }

  return (
    <Nav
      variant="pills"
      defaultActiveKey={`${teamRoute}/${teamName}${matchRoute}/${year}`}
    >
      {years.map((year) => (
        <Nav.Item>
          <Nav.Link href={`${teamRoute}/${teamName}${matchRoute}/${year}`}>
            {year}
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};
