import { Conteiner, Profile } from "./styles"

export function Header(){
    return(
        <Conteiner>
            <Profile>
                <img src="https://github.com/Prattiz.png" alt="Foto do Usuário" />
                <div>
                    <span>Bem Vindo, </span>
                    <strong>Thiago</strong>
                </div>
            </Profile>
            
        </Conteiner>
    )
}