import { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"

export default function Users() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios('https://rickandmortyapi.com/api/character')
            .then(({ data }) => setUsers(data.results))
            .catch((e) => console.log(e))
    }, [])

    return (
        <section style={{ width: '100%', display: "grid", gridTemplateColumns: 'repeat(4, 1fr)' }} >
            {
                users?.map(user => (
                    <Link to={`/detail/${user.id}`}>
                        <div key={user.id}>
                            <h2>{user.name}</h2>
                            <img src={user.image} alt="" />
                        </div>
                    </Link>
                ))
            }
        </section>
    )
}