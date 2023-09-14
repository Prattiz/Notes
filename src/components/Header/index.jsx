import { Conteiner, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from "../../hooks/auth"


export function Header(){
    
    const { signOut } = useAuth()

    return(
        <Conteiner>
            <Profile to="/profile">
                <img src="https://github.com/Prattiz.png" alt="Foto do Usuário" />
                <div>
                    <span>Bem Vindo, </span>
                    <strong>Thiago</strong>
                </div>
            </Profile>
            <Logout onClick={signOut}>
                <RiShutDownLine />
            </Logout>
            
        </Conteiner>
    )
}