export const fetchLeagues = async (
  page = 1,
  per_page = 5,
  gameVideo = "all"
) => {
  if (gameVideo === "all") {
    const response = await fetch(
      "https://api.pandascore.co/leagues" +
        "?page=" +
        page +
        "&per_page=" +
        per_page,
      {
        mode: "cors",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer Ri33FURQcwndvlwisGO-7iR-bwOPI2d2VlTnF5A_Uq9J-_VrQRw",
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
        mode: "cors",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer Ri33FURQcwndvlwisGO-7iR-bwOPI2d2VlTnF5A_Uq9J-_VrQRw",
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
      "https://api.pandascore.co/teams" +
        "?page=" +
        page +
        "&per_page=" +
        per_page,
      {
        mode: "cors",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer Ri33FURQcwndvlwisGO-7iR-bwOPI2d2VlTnF5A_Uq9J-_VrQRw",
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
        mode: "cors",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer Ri33FURQcwndvlwisGO-7iR-bwOPI2d2VlTnF5A_Uq9J-_VrQRw",
        },
      }
    );

    const json = await response.json();
    return { json, response };
  }
};
