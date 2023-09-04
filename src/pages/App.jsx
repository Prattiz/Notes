import { Conteiner } from "./style";
import { Button } from "../components/Buttons";
import { Header } from "../components/Header";
import { Section } from "../components/Section";

export function App(){
    return(
        <Conteiner>
            <Header />

            <Section title="Links úteis">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </Section>
            

            <Button title="voltar"/>
        </Conteiner>
        
    )
}