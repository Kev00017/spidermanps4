import React, { useContext } from "react";
import { UserContext } from "../../contexts/userContexts";

function Profile(){
    const {login} = useContext(UserContext);

    return (
        <div>
            {login ? 'Informações do usuário' : 'Faça login para ver suas informações'}
        </div>
    )
}

export default Profile;