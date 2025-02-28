import { FC } from 'react'
import { Container, ButtonDownload, IconButtonDownload } from './style'
import handleDownload from './handleDownload'

interface IProps {
    data: ArrayBuffer
}

const Docx: FC<IProps> = ({ data }) => {
    if (data) {
        return (
            <Container>
                <div id="docx"/>
                <ButtonDownload onClick={() => handleDownload(data)}>
                    <IconButtonDownload xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g>
                            <rect fill="none" height="24" width="24"/>
                        </g>
                        <g>
                            <path d="M5,20h14v-2H5V20z M19,9h-4V3H9v6H5l7,7L19,9z"/>
                        </g>
                    </IconButtonDownload>
                </ButtonDownload>
            </Container>
        )
    } else {
        return null
    }
}

export default Docx