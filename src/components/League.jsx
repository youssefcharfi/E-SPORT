import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function League() {
  const [league, setLeague] = useState({ series: [] });

  let { leagueId } = useParams();

  useEffect(() => {
    fetch("https://api.pandascore.co/leagues" + "/" + leagueId, {
      mode: "cors",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + "Ri33FURQcwndvlwisGO-7iR-bwOPI2d2VlTnF5A_Uq9J-_VrQRw",
      },
    })
      .then((response) => response.json())
      .then((response) => setLeague(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <center>
      <div className="card my-4" style={{ width: "18rem" }}>
        <img src={league.image_url} alt="" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{league.name}</h5>
          {league.videogame ? (
            <p className="card-text">{league.videogame.name}</p>
          ) : null}
        </div>
      </div>
      <div style={{ width: "35rem" }}>
        <ul className="list-group list-group-flush">
          {league.series.map((serie) => (
            <li className="list-group-item my-2 shadow">
              <h6 className="mx-5">{serie.full_name}</h6>
              <h6>
                From: {serie.begin_at} - To: {serie.end_at}
              </h6>
            </li>
          ))}
        </ul>
      </div>
    </center>
  );
}

export default League;
