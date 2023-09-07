import { Conteiner } from "./styles";

export function ButtonText({ title, Active = false, ...rest }){
    return(
        <Conteiner 
        type="button" 
        active={Active}
        {...rest}
        >
            {title}
        </Conteiner>
    )
}