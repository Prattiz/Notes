import { Conteiner, Brand, Search, Menu, Content, NewNote } from "./style";
import { FiPlus, FiSearch } from "react-icons/fi";
import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { ButtonText} from "../../components/ButtonT";
import { Input } from "../../components/Input";
import { Notes } from "../../components/Note";
import { api } from "../../services/api";

export function Home() {
    
    const [ tags, setTags ] = useState([]);

    useEffect(() => {
        async function fetchTags() {
            const response = await api.get("/tags");
            setTags(response.data)
        }

        fetchTags()
    }, []);


    return(
        <Conteiner>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li><ButtonText title="Ativo" /></li>

                {
                    tags && tags.map(tag => (
                    <li key={String(tag.id)}><ButtonText title={tag.name} /></li>
                    ))
                }
                

                
                
                
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
            
            <NewNote to="/new"><FiPlus /> Criar Nota</NewNote>
        </Conteiner>
    )
}