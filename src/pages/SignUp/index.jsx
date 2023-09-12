import { useState } from "react";
import { api } from "../../services/api";
import { Background, Container, Form } from "./style";
import { Input } from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiUser, FiLock} from "react-icons/fi";
import { Button } from "../../components/Buttons";

export function SignUp(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navegate = useNavigate()
    
  
    function handleSignUp() {
      if (!name || !email || !password) {
        return alert(' preencha todos os campos');
      }
  
      api
        .post('/users', { name, email, password })
        .then(() => {
          alert('usuario cadastrado com sucesso');
          navegate('/');
        })
        .catch(error => {
          if (error.response) {
            alert(error.response.data.message);
          } else {
            alert('nao foi possivel cadastrar');
          }
        });
    }
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
                onChange={e => setName(e.target.value)}
                />
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

                <Button title="Cadastrar" onClick={handleSignUp}/>

                <Link to="/">Fazer Login</Link>
            </Form>

            
        </Container>
    )
}