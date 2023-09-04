import { Container, Content } from "./style";
import { Header } from "../../components/Header";
import { Button } from "../../components/Buttons";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonT";


export function App(){
    return(
        <Container>
            <Header />
            <main>
                <Content>
                    <ButtonText title="Excluir Nota"/>

                    <Section title="Links úteis">
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </Section>

                    <Section title="Marcadores">
                        <Tag title="Express"/>
                        <Tag title="Node.js"/>
                    </Section>
                    

                    <Button title="voltar"/>
                </Content>
            </main>
            
        </Container>
        
    )
}