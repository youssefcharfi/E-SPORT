import React, { useEffect, useState } from 'react'
import { fetchLeagues } from '../fetch'
import { Pagination } from '@mui/material';
import { Link } from 'react-router-dom';


function Leagues() {

    const [leagues, setLeagues] = useState([])
    const [loading, setLoading] = useState(false)

    const [xTotal, setXTotal] = useState(0)

    const [page, setPage] = useState(1)

    async function fetchData() {
        setLoading(true);
        const data = await fetchLeagues();
        setXTotal(data.response.headers.get("x-total"))
        setLeagues(data.json);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])

    const changePage = async (event, value) => {
        setPage(value)
        const data = await fetchLeagues(value, 5);
        setLeagues(data.json);
    }


    return (
        <div>
            {
                !loading ? (
                    <div className="card mx-auto mt-4 mb-4" style={{ width: '18rem' }}>
                        <ul className="list-group list-group-flush">
                            {leagues.map(league => (
                                <Link className="list-group-item shadow my-2 " key={league.id} to={`/leagues/${league.id}`} >
                                    {league.image_url ? (
                                        <img className="mx-3" src={league.image_url} width="15%" alt="{league.name}" />
                                    ) : null}
                                    {league.name}
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

export default Leagues
