import React, { useEffect, useState } from 'react'
import { fetchTeams } from '../fetch'
import { Pagination } from '@mui/material';
import { Link } from 'react-router-dom';


function Teams() {

    const [teams, setTeams] = useState([])
    const [loading, setLoading] = useState(false)

    const [xTotal, setXTotal] = useState(0)

    const [page, setPage] = useState(1)

    async function fetchData() {
        setLoading(true);
        const data = await fetchTeams();
        setXTotal(data.response.headers.get("x-total"))
        setTeams(data.json);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])

    const changePage = async (event, value) => {
        setPage(value)
        const data = await fetchTeams(value, 5);
        setTeams(data.json);
    }


    return (
        <div>
            {
                !loading ? (
                    <div className="card mx-auto mt-4 mb-4" style={{ width: '18rem' }}>
                        <ul className="list-group list-group-flush">
                            {teams.map(team => (
                                <Link className="list-group-item shadow my-2 " key={team.id} to={`/teams/${team.id}`} >
                                    {team.image_url ? (
                                        <img className="mx-3" src={team.image_url} width="15%" alt={team.name} />
                                    ) : null}
                                    {team.name}
                                </Link>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <center className="mt-4">
                        <div class="spinner-grow text-primary" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    </center>
                    
                )
            }
            <Pagination className="mt-4 d-flex justify-content-center" page={page} count={Math.ceil(xTotal / 5)} onChange={changePage} />
        </div>
    )
}

export default Teams
