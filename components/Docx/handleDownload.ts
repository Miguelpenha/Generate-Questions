import { toast } from 'react-toastify'

function handleDownload(data: ArrayBuffer) {
    const blob = new Blob([data], {
        type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    })

    const url = window.URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'questions.docx')

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    toast('Questões baixadas!', {
        type: 'success'
    })
}

export default handleDownload