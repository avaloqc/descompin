import Container from 'react-bootstrap/Container';
import { ListGroup } from '../components/ListGroup';
import { useAppContext } from '../storage/AppContext';

export const MinhasPastasPage = () => {
  const { state } = useAppContext();

  const items = state.folders.map(folder => (
    {
      title: folder.name,
      total: folder.pins.length
    }
  ))

  return (
    <Container>
      <ListGroup items={items} />
    </Container>
  )
}