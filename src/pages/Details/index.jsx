import { Container, Content, Links } from "./style";
import { Header } from "../../components/Header";
import { Button } from "../../components/Buttons";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonT";
import { useParams, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";


export function App(){

    const[ data, setData ]= useState(null);
    const params = useParams();
    const navigate = useNavigate();

    function handleBackButton(){
        navigate(-1)
    }

   async function handleRemove(){
        const confirm = window.confirm("Você quer mesmo apagar a sua Nota?");

        if(confirm){
            await api.delete(`/notes/${params.id}`)
            navigate(-1)
        }   
    }

    useEffect(() => {
        async function fetchNote(){
            
            const response = await api.get(`/notes/${params.id}`);
            
            setData(response.data)
        }
 
        
        fetchNote()
    }, [])

    return(
        <Container>
            <Header />
            {
                data &&     
                <main>
                    <Content>
                        <ButtonText title="Excluir Nota" onClick={handleRemove}/>

                        <h1>{data.title}</h1>
                        

                        <p>{data.description}</p>

                        {
                            data.links &&
                            <Section title="Links úteis">
                                <Links>
                                    {
                                        data.links.map(link => (
                                        <li key={String(link.id)}>
                                            <a href={link.url} target="_blank">
                                                {link.url}
                                            </a>
                                        </li>
                                        ))
                                    }
                                </Links>
                            </Section>
                        }

                        { 
                            data.tags &&
                            <Section title="Marcadores">
                                {
                                    data.tags.map(tag => (
                                        <Tag 
                                        key={String(tag.id)}
                                        title={tag.name}
                                         />
                                    ))
                                }
                            </Section>
                        }
                        
                        <Button title="voltar" onClick={handleBackButton}/>
                    </Content>
                </main>
            }   
        </Container>     
    )
}