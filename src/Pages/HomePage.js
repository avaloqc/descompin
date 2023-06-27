import { Container, Row, Col } from 'react-bootstrap'
import { Card } from '../components/Card'

export const HomePage = () =>
(
	<Container fluid>
		<Row>
			<Col xs={12} md={2}><Card title="Título" image="https://picsum.photos/seed/picsum/200/200" total={3}/></Col>
		</Row>
	</Container>
)
