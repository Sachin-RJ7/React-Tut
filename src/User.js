
// import React from "react";
import {useLocation,
    useNavigate,
    useParams} from 'react-router-dom'

function User(prop)
{
    const params = useParams();
    console.warn(params.id);

    return(
        <div>
            <h1>Hlo, this is user no.{params.id} </h1>
            <h1>Hlo, my name is {params.name} </h1>
        </div>
    )
}

export default User;