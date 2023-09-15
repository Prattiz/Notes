import { Container, Form, Avatar} from "./styles";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Buttons";
import { Link } from "react-router-dom";

export function Profile(){
    const { user, updateProfile } = useAuth();
    const [ name, setName ] = useState(user.name);
    const [ password, setPassword ] = useState();
    const [ newPass, setNew ] = useState();
    const [ email, setEmail ] = useState(user.email);
    const [ avatar, setAvatar] = useState(null)

    async function handleUpdate(){
        const user = { name, email, password: newPass, oldPassword: password,}
        await updateProfile({ user })
    }
    
    return(
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft />
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img 
                    src={avatar} 
                    alt="Foto do Usuário" 
                    />

                    <label htmlFor="avatar"><FiCamera /></label>
                    

                    <input 
                    id="avatar"
                    type="file"
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