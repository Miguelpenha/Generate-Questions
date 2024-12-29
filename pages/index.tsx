import { useState } from 'react'
import Head from '../components/Head'
import { Container } from '../styles/pages'
import Form from '../components/Form'
import Docx from '../components/Docx'

function Home() {
    const [data, setData] = useState<ArrayBuffer>()

    return <>
        <Head/>
        <Container>
            <Form setData={setData}/>
            <Docx data={data}/>
        </Container>
    </>
}

export default Home