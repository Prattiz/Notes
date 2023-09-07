import { Background, Container, Form } from "./style";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { FiMail, FiLock} from "react-icons/fi";
import { Button } from "../../components/Buttons"

export function SignIn(){
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
                />

                <Input 
                placeholder="Senha" 
                type="password"
                icon={FiLock}
                />

                <Button title="Entrar" />

                <Link to="/register">Criar Conta</Link>
            </Form>

            <Background />
        </Container>
    )
}