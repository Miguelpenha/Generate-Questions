import type { NextApiRequest, NextApiResponse } from 'next'
import apiQuestions from '../../services/apiQuestions'

export interface IRequestQuestions {
    count: number
    class: string
    subject: string
}

export type IResponseQuestions = { error?: any }

interface IRequestAPIQuestions extends IRequestQuestions {
    
}

async function questions(req: NextApiRequest, res: NextApiResponse<IResponseQuestions>) {
    if (req.method === 'POST') {
        const { count, subject, class: classSchool } = req.body as unknown as IRequestQuestions

        try {
            const { data } = await apiQuestions.post('/questions', {
                count,
                subject,
                class: classSchool
            } as IRequestAPIQuestions, { responseType: 'arraybuffer' })

            res.send(data)
        } catch (error) {
            res.status(500).json({ error })
        }
    } else {
        res.status(404)
    }
}

export default questions