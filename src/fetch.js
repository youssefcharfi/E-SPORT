export const fetchLeagues = async (
  page = 1,
  per_page = 5,
  gameVideo = "all"
) => {
  if (gameVideo === "all") {
    const response = await fetch(
      process.env.REACT_APP_LEAGUES_API_URL +
        "?page=" +
        page +
        "&per_page=" +
        per_page,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.REACT_APP_LEAGUES_API_TOKEN,
        },
      }
    );

    const json = await response.json();
    return { json, response };
  } else {
    const response = await fetch(
      "https://api.pandascore.co/" +
        gameVideo +
        "/leagues" +
        "?page=" +
        page +
        "&per_page=" +
        per_page,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.REACT_APP_LEAGUES_API_TOKEN,
        },
      }
    );

    const json = await response.json();
    return { json, response };
  }
};

export const fetchTeams = async (page = 1, per_page = 5, gameVideo = "all") => {
  if (gameVideo === "all") {
    const response = await fetch(
      process.env.REACT_APP_TEAMS_API_URL +
        "?page=" +
        page +
        "&per_page=" +
        per_page,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.REACT_APP_LEAGUES_API_TOKEN,
        },
      }
    );

    const json = await response.json();
    return { json, response };
  } else {
    const response = await fetch(
      "https://api.pandascore.co/" +
        gameVideo +
        "/teams" +
        "?page=" +
        page +
        "&per_page=" +
        per_page,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.REACT_APP_LEAGUES_API_TOKEN,
        },
      }
    );

    const json = await response.json();
    return { json, response };
  }
};
