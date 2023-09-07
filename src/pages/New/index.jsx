import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Buttons";

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
                    <Textarea placeholder="Observaçôes"/>    

                    <Section title="Links Úteis">

                        <NoteItem value="https://yourLink.com" />
                        <NoteItem isNew />  

                        
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                        <NoteItem value="Tag" />
                        <NoteItem isNew />  
                        </div>


                    </Section>
                    <Button title="Salvar" />
                </Form>  
                
            </main>
        </Container>
    )
}