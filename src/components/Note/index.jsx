import { Conteiner } from "./styles";

export function Note({ data, ...rest}){
    return(
        <Conteiner {...rest}>
            <h1>{data.title}</h1>

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => {
                            <span key={tag.id}>
                                {tag.name}
                            </span>
                        })
                    }
                </footer>
            }
        </Conteiner>
    )
}