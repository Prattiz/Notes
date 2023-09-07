import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons"
export function NoteItem({ isNew, value, onClick, ...rest}){
    return(
        <Container isNew={isNew}>
            <input 
            type="text"
            value={value}
            readOnly={!isNew}
            {...rest}
            />

            <button
            onClick={onClick}
            type="button">

                {isNew? <FiPlus /> : <FiX />}
                
            </button>

        </Container>
    )
}