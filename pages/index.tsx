import Head from '../components/Head'
import { Container, Docx } from '../styles/pages'
import Form from '../components/Form'

function Home() {
    return <>
        <Head/>
        <Container>
            <Form/>
            <Docx id="docx"/>
        </Container>
    </>
}

export default Home