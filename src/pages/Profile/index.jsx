import { Container, Form, Avatar} from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Buttons"

export function Profile(){
    return(
        <Container>
            <header>
                <a href="/">
                    <FiArrowLeft />
                </a>
            </header>

            <Form>
                <Avatar>
                    <img 
                    src="https://github.com/Prattiz.png" 
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
                />
                <Input 
                placeholder="E-mail"
                icon={FiMail}
                type="text"
                />
                <Input 
                placeholder="Senha Atual"
                icon={FiLock}
                type="password"
                />
                <Input 
                placeholder="Nova Senha"
                icon={FiLock}
                type="password"
                />

                <Button title="Salvar"/>


            </Form>
        </Container>
    )
    
}