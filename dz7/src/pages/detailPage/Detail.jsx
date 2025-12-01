import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Detail() {
    const { id } = useParams();
    const location = useNavigate();
    console.log(id);

    const [user, setUser] = useState(null);
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({data}) => setUser(data))
        .catch((e) => console.log(e))
    }, [id])
    
  return (
    <div>
      <button onClick={() => location(-1)}>Back</button>
        <h1>{user?.name}</h1>
        <img src={user?.image} alt="user" />
        <p>Status: {user?.status}</p>
        <p>species: {user?.species}</p>
        <p>gender: {user?.gender}</p>
    </div>
  )
}