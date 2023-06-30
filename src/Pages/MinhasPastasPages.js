import Container from 'react-bootstrap/Container';
import { ListGroup } from '../components/ListGroup';
import { useAppContext } from '../storage/AppContext';

export const MinhasPastasPage = () => {
  // const value = useAppContext();
  return (
    <Container>
      <ListGroup items={[
        {
          title: 'Matemática',
          total: 0
        },
        {
          title: 'Ciências',
          total: 4
        },
        {
          title: 'Literatura',
          total: 3
        }]} />
    </Container>
  )
}