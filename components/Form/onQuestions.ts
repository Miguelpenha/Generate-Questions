import { useState } from 'react'
import { IRequestQuestions } from '../../pages/api/questions'
import api from '../../services/api'
import { renderAsync } from 'docx-preview'

function onQuestions() {
    const [loading, setLoading] = useState(false)

    async function onSubmit(fields: IRequestQuestions) {
        setLoading(true)
        
        const { data } = await api.post<ArrayBuffer>('/questions', fields, {
            responseType: 'arraybuffer'
        })

        setLoading(false)
    
        const container = document.getElementById('docx')
    
        if (container) {
            await renderAsync(data, container)
        }
    }

    return { onSubmit, loading }
}


export default onQuestions