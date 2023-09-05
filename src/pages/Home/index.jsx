import { Conteiner, Brand, Search, Menu, Content, NewNote } from "./style";
import { FiPlus } from "react-icons/fi";
import { Header } from "../../components/Header";
import { ButtonText} from "../../components/ButtonT";
import { Input } from "../../components/Input";

export function Home() {
    return(
        <Conteiner>
            <Brand>
                <h1>Rocket Notes</h1>
            </Brand>

            <Header />

            <Menu>
                
                <li><ButtonText title="Todos"/></li>
                <li><ButtonText title="Todos"/></li>
                <li><ButtonText title="Todos"/></li>
                
                
                
            </Menu>

            <Search>
                <Input placeholder="Pesquisar" />
            </Search>

            <Content>

            </Content>
            
            <NewNote><FiPlus /> Criar Nota</NewNote>
        </Conteiner>
    )
}