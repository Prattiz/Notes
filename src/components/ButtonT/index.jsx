import { Container } from './styles';

export function ButtonText({ title, $Active = false, ...rest }) {
  return (
    <Container
      type="button"
      $Active={$Active}
      {...rest}
    >

      {title}
      
    </Container>
  )
}