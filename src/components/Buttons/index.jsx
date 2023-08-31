import { Conteiner } from "./styles.js";

export function Button({ title, loading, ...rest }){
    return(
        <Conteiner 
        type="button" 
        disabled={loading}
        {...rest}
        >
            {loading? "Carregando..." : title}
        </Conteiner>
    );
    
} 