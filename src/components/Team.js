import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function Team() {
  const [team, setTeam] = useState({
    current_videogame: { name: "" },
    players: [],
  });

  let { teamId } = useParams();

  useEffect(() => {
    fetch("https://api.pandascore.co/teams" + "/" + teamId, {
      mode: "cors",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + "Ri33FURQcwndvlwisGO-7iR-bwOPI2d2VlTnF5A_Uq9J-_VrQRw",
      },
    })
      .then((response) => response.json())
      .then((response) => setTeam(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <center>
      <div className="card my-4" style={{ width: "18rem" }}>
        <img src={team.image_url} alt="" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{team.name}</h5>
          <h6>{team.current_videogame.name}</h6>
        </div>
      </div>
      <div>
        <h6>Players :</h6>
        <div className="d-flex justify-content-center">
          {team.players.map((player, index) => (
            <h6 className="mx-2" key={index}>
              {player.name}
            </h6>
          ))}
        </div>
      </div>
    </center>
  );
}

export default Team;
