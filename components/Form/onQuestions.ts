import { Dispatch, SetStateAction, useState } from 'react'
import { IRequestQuestions } from '../../pages/api/questions'
import api from '../../services/api'
import { renderAsync } from 'docx-preview'

function onQuestions(setData: Dispatch<SetStateAction<ArrayBuffer>>) {
    const [loading, setLoading] = useState(false)
    
    async function onSubmit(fields: IRequestQuestions) {
        setLoading(true)
        
        const { data } = await api.post<ArrayBuffer>('/questions', fields, {
            responseType: 'arraybuffer'
        })

        setLoading(false)

        setData(data)
    
        setTimeout(async () => {
            const container = document.getElementById('docx')
    
            if (container) {
                await renderAsync(data, container, null, { ignoreWidth: true, inWrapper: false })
            }
        }, 100)
    }

    return { onSubmit, loading }
}


export default onQuestions