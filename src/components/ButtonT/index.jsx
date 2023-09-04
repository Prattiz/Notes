import { Conteiner } from "./styles";

export function ButtonText({ title, ...rest }){
    return(
        <Conteiner type="button" {...rest}>
            {title}
        </Conteiner>
    )
}