import { Conteiner, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";
import { useAuth} from "../../hooks/auth";
import { api } from "../../services/api";
import avatarPlaceH from "../../../assets/user.svg";
import { useNavigate } from "react-router-dom";



export function Header(){
    
    const { signOut, user} = useAuth();
    const avatarURL = user.avatar ? `${ api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceH
    const navigate = useNavigate()

    function handleSignOut(){
        navigate("/")
        signOut()  
    }
    return(
        <Conteiner>
            <Profile to="/profile">
                <img src= {avatarURL} alt="foto do usuário" />
                <div>
                    <span>Bem Vindo, </span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>
            <Logout onClick={handleSignOut}>
                <RiShutDownLine />
            </Logout>
            
        </Conteiner>
    )
}