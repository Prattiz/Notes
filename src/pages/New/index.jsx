import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input"

export function New(){
    return(
        <Container>
            <Header />
            <main>
                <Form>
                    <header>
                        <h1>Criar Notas</h1>
                        <a href="/">Voltar</a>
                    </header>

                    <Input placeholder="Título"/>
                </Form>
            </main>
        </Container>
    )
}