import { Container, Form, Avatar} from "./styles";
import { useState } from "react";
import  avatarPlaceH  from "../../../assets/user.svg";
import { useAuth } from "../../hooks/auth";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Buttons";
import { ButtonText } from "../../components/ButtonT";
import { api } from "../../services/api"


export function Profile(){
    const { user, updateProfile } = useAuth();
    const [ name, setName ] = useState(user.name);
    const [ password, setPassword ] = useState();
    const [ newPass, setNew ] = useState();
    const [ email, setEmail ] = useState(user.email);
    const avatarURL = user.avatar ? `${ api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceH;
    const [ avatar, setAvatar] = useState(avatarURL);
    const [ avatarFile, setAvatarFile] = useState(null);
 


    async function handleUpdate(){
        const user = { name, email, password: newPass, oldPassword: password,}
        await updateProfile({ user, avatarFile })
    }


    function handleChangeAvatar(event){
        const file = event.target.files[0];
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview)
    }

    function backButton(){
        navigate(-1)
      }

    return(
        <Container>
            <header>
                <ButtonText title={<FiArrowLeft />} onClick={backButton}/>
            </header>

            <Form>
                <Avatar>
                    <img 
                    src={avatarURL} 
                    alt="Foto do Usuário" 
                    />

                    <label htmlFor="avatar"><FiCamera /></label>
                    

                    <input 
                    id="avatar"
                    type="file"
                    onChange={handleChangeAvatar}
                    />

                </Avatar>
                <Input 
                placeholder="Nome de Usuário"
                icon={FiUser}
                type="text"
                value={name}
                onChange={ e => setName(e.target.value)}
                />
                <Input 
                placeholder="E-mail"
                icon={FiMail}
                type="text"
                value={email}
                onChange={ e => setEmail(e.target.value)}
                />
                <Input 
                placeholder="Senha Atual"
                icon={FiLock}
                type="password"
                onChange={ e => setPassword(e.target.value)}
                />
                <Input 
                placeholder="Nova Senha"
                icon={FiLock}
                type="password"
                onChange={ e => setNew(e.target.value)}
                />

                <Button title="Salvar" onClick={ handleUpdate }/>


            </Form>
        </Container>
    )
    
}