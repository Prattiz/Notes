import { Conteiner, Brand, Search, Menu, Content, NewNote } from "./style";
import { FiPlus, FiSearch } from "react-icons/fi";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { ButtonText} from "../../components/ButtonT";
import { Input } from "../../components/Input";
import { Notes } from "../../components/Note";

export function Home() {
    return(
        <Conteiner>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header />

            <Menu>
                
                <li><ButtonText title="Todos"/></li>
                <li><ButtonText title="Todos"/></li>
                <li><ButtonText title="Todos"/></li>
                
                
                
            </Menu>

            <Search>
                <Input placeholder="Pesquisar" icon={FiSearch} />
            </Search>

            <Content>
                <Section title="My Notes">
                    <Notes data={{
                         title:"Test",
                         tags:[
                            {id: '1', name: "rocketSeat"},
                            {id: '2', name: "Test2"}
                         ]
                }} />
                

                </Section>

            </Content>
            
            <NewNote><FiPlus /> Criar Nota</NewNote>
        </Conteiner>
    )
}