import { Background, Container, Form } from "./style";
import { Input } from "../../components/Input";
import { FiMail, FiUser, FiLock} from "react-icons/fi";
import { Button } from "../../components/Buttons"

export function SignUp(){
    return(
        <Container>
            <Background />
            <Form>
                <h1>RocketNotes</h1>
                <p>Aplicação para salvar e gerenciar seus Links úteis</p>
                <h2>Crie Sua Conta</h2>

                <Input 
                placeholder="Nome de Usuário" 
                type="text"
                icon={FiUser}
                />
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

                <Button title="Cadastrar" />

                <a href="#">Fazer Login</a>
            </Form>

            
        </Container>
    )
}