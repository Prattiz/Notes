import { Conteiner } from "./style";
import { Button } from "../components/Buttons";
import { Header } from "../components/Header";
import { Section } from "../components/Section";
import { Tag } from "../components/Tag";
import { ButtonText } from "../components/ButtonT";


export function App(){
    return(
        <Conteiner>
            <Header />

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
        </Conteiner>
        
    )
}