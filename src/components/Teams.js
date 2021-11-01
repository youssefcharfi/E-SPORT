import React, { useContext, useEffect, useState } from "react";
import { fetchTeams } from "../fetch";
import { Pagination } from "@mui/material";
import { Link } from "react-router-dom";
import { leaguesContext } from "../LeaguesContext";

function Teams() {
  let gameVideo = useContext(leaguesContext);

  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);

  const [xTotal, setXTotal] = useState(0);

  const [page, setPage] = useState(1);

  async function fetchData(leaguePage = 1, leaguePerPage = 5, gameV = "all") {
    setLoading(true);
    const data = await fetchTeams(leaguePage, leaguePerPage, gameV);
    setXTotal(data.response.headers.get("x-total"));
    setTeams(data.json);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData(1, 5, gameVideo);
  }, [gameVideo]);

  const changePage = async (event, value) => {
    setPage(value);
    const data = await fetchTeams(value, 5, gameVideo);
    setTeams(data.json);
  };

  return (
    <div>
      {!loading ? (
        <div className="card mx-auto mt-4 mb-4" style={{ width: "18rem" }}>
          <ul className="list-group list-group-flush">
            {teams.map((team) => (
              <Link
                className="list-group-item shadow my-2 "
                key={team.id}
                to={`/teams/${team.id}`}
              >
                {team.image_url ? (
                  <img
                    className="mx-3"
                    src={team.image_url}
                    width="15%"
                    alt={team.name}
                  />
                ) : null}
                {team.name}
              </Link>
            ))}
          </ul>
        </div>
      ) : (
        <center className="mt-4">
          <div className="spinner-grow text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </center>
      )}
      <Pagination
        className="mt-4 d-flex justify-content-center"
        page={page}
        count={Math.ceil(xTotal / 5)}
        onChange={changePage}
      />
    </div>
  );
}

export default Teams;
