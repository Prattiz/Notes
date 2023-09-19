import { Container, Brand, Search, Menu, Content, NewNote } from "./style";
import { FiPlus, FiSearch } from "react-icons/fi";
import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { ButtonText} from "../../components/ButtonT";
import { Input } from "../../components/Input";
import { Notes } from "../../components/Note";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function Home() {
    
    const [search, setSearch] = useState("");
    const [tags, setTags] = useState([]);
    const [tagsSelected, setTagsSelected] = useState([]);
    const [notes, setNotes] = useState([]);
    const navigate = useNavigate();
  

    function handleTagSelected(tagName) {
      const alreadySelected = tagsSelected.includes(tagName);

      if (tagName === "all") {
        return setTagsSelected([]);
      }
  
      if (alreadySelected) {
        const filteredTags = tagsSelected.filter(tag => tag !== tagName);
        setTagsSelected(filteredTags)
  
      } else {
        setTagsSelected(prevState => [...prevState, tagName]);
      }
    }
  
    function handleDetails(id) {
      navigate(`/app/${id}`);
    }
  
    useEffect(() => {
      async function fetchTags() {
        const response = await api.get("/tags");
        setTags(response.data)
      }
  
      fetchTags()
    }, [])
  
    useEffect(() => {
      async function fetchNotes() {
        const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
        setNotes(response.data)
      }
  
      fetchNotes()
    }, [tagsSelected, search])
  
    return (
      <Container>
        <Brand>
          <h1>Rocketnotes</h1>
        </Brand>
  
        <Header />
  
        <Menu>
          <li>
            <ButtonText
              title="Todos"
              onClick={() => handleTagSelected("all")}
              $Active={tagsSelected.length === 0}
            />
          </li>
          {
            tags && tags.map(tag => (
              <li key={String(tag.id)}>
                <ButtonText
                  title={tag.name}
                  onClick={() => handleTagSelected(tag.name)}
                  $Active={tagsSelected.includes(tag.name)}
                />
              </li>
            ))
          }
        </Menu>
  
        <Search>
          <Input
            placeholder="Pesquisar pelo título"
            onChange={(e) => setSearch(e.target.value)}
            icon={FiSearch}
          />
        </Search>
  
        <Content>
          <Section title="Minhas notas">
            {
              notes.map(note => (
                <Notes
                  key={String(note.id)}
                  data={note}
                  onClick={() => handleDetails(note.id)}
                />
              ))
            }
          </Section>
        </Content>
  
        <NewNote to="/new">
          <FiPlus />
          Criar nota
        </NewNote>
      </Container >
    )
  }