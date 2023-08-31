import { Teste } from "./style"
import { Button } from "../components/Buttons"

export function App(){
    return(
        <Teste>
            <h1>Hello World!!</h1>
            <Button title="my button" loading/>
            <Button title="my button"/>
        </Teste>
        
    )
}