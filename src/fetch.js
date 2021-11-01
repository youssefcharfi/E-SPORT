export const fetchLeagues = async (
  page = 1,
  per_page = 5,
  gameVideo = "all"
) => {
  if (gameVideo === "all") {
    console.log("j'ai all " + gameVideo);
    const response = await fetch(
      process.env.REACT_APP_LEAGUES_API_URL +
        "?page=" +
        page +
        "&per_page=" +
        per_page,
      {
        mode: "cors",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.REACT_APP_LEAGUES_API_TOKEN,
        },
      }
    );

    const json = await response.json();
    return { json, response };
  } else {
    console.log("j'ai autre " + gameVideo);
    const response = await fetch(
      "https://api.pandascore.co/" +
        gameVideo +
        "/leagues" +
        "?page=" +
        page +
        "&per_page=" +
        per_page,
      {
        mode: "cors",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.REACT_APP_LEAGUES_API_TOKEN,
        },
      }
    );

    const json = await response.json();
    return { json, response };
  }
};

export const fetchTeams = async (page = 1, per_page = 5, gameVideo = "all") => {
  if (gameVideo === "all") {
    console.log("j'ai all " + gameVideo);
    const response = await fetch(
      process.env.REACT_APP_TEAMS_API_URL +
        "?page=" +
        page +
        "&per_page=" +
        per_page,
      {
        mode: "cors",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.REACT_APP_LEAGUES_API_TOKEN,
        },
      }
    );

    const json = await response.json();
    return { json, response };
  } else {
    console.log("j'ai autre " + gameVideo);
    const response = await fetch(
      "https://api.pandascore.co/" +
        gameVideo +
        "/teams" +
        "?page=" +
        page +
        "&per_page=" +
        per_page,
      {
        mode: "cors",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.REACT_APP_LEAGUES_API_TOKEN,
        },
      }
    );

    const json = await response.json();
    return { json, response };
  }
};
