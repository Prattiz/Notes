import { Background, Container, Form } from "./style";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { FiMail, FiLock} from "react-icons/fi";
import { Button } from "../../components/Buttons";
import { useState } from "react";


import { useAuth  } from "../../hooks/auth";

export function SignIn(){
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const { signIn } = useAuth();
    
    function handleSignIn(){
        signIn({email, password})

    }


    return(
        <Container>
            <Form>
                <h1>RocketNotes</h1>
                <p>Aplicação para salvar e gerenciar seus Links úteis</p>
                <h2>Faça seu Login</h2>

                <Input 
                placeholder="E-mail" 
                type="text"
                icon={FiMail}
                onChange={e => setEmail(e.target.value)}
                />

                <Input 
                placeholder="Senha" 
                type="password"
                icon={FiLock}
                onChange={e => setPassword(e.target.value)}
                />

                <Button title="Entrar" onClick={handleSignIn} />

                <Link to="/register">Criar Conta</Link>
            </Form>

            <Background />
        </Container>
    )
}