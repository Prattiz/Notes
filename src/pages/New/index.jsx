import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Buttons";
import { Link } from "react-router-dom";
import { useState } from "react";


export function New(){

    const [ links, setLinks ] = useState([]);
    const [ newLink, setNewL ] = useState("");
    const [ tag, setTag ] = useState([]);
    const [ newTag, setNewT ] = useState("");
    
    
    function handleSetLinks() {
        setLinks(prevState => [...prevState, newLink])
        setNewL("")
    }

    function handleRemoveLink(deleted){
        setLinks(prevState => prevState.filter(link => link !== deleted))

    }

    function handleSetTags(){
        setTag(prevState => [...prevState, newTag])
        setNewT("")
    }

    function handleRemoveT(deleted){
        setTag(prevState => prevState.filter(tag => tag !== deleted))
    }

    return(
        <Container>
            <Header />
            <main>
                <Form>
                    <header>
                        <h1>Criar Notas</h1>
                        <Link to="/">Voltar</Link>
                    </header>

                    <Input placeholder="Título"/>
                    <Textarea placeholder="Observaçôes"/>    

                    <Section title="Links Úteis">

                        {
                          links.map((link, index) => (
                            <NoteItem
                              key={String(index)}
                              value={link}
                              onClick={() => handleRemoveLink(link)}
                            />     
                                ))
                        }

                        <NoteItem
                         isNew 
                         placeholder = "Novo Link"
                         value={newLink}
                         onChange={e => setNewL(e.target.value)}
                         onClick={handleSetLinks}
                        />  

                        
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            {
                              tag.map((tag, index) =>(
                                <NoteItem 
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => handleRemoveT(tag)}
                                />
                              ))
                            }
                        
                        <NoteItem 
                        isNew 
                        placeholder="Nova Tag"
                        onChange={ e => setNewT(e.target.value)}
                        value={newTag}
                        onClick={handleSetTags}
                        />  
                        </div>


                    </Section>
                    <Button title="Salvar" />
                </Form>  
                
            </main>
        </Container>
    )
}