import { Conteiner } from "./style";
import { Button } from "../components/Buttons";
import { Header } from "../components/Header";

export function App(){
    return(
        <Conteiner>
            <Header />
            

            <Button title="voltar"/>
        </Conteiner>
        
    )
}