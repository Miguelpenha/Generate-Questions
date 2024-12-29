import { Dispatch, SetStateAction, FC } from 'react'
import { useForm } from 'react-hook-form'
import { IRequestQuestions } from '../../pages/api/questions'
import onQuestions from './onQuestions'
import { Container, Label, Input } from './style'
import ButtonSubmit from './ButtonSubmit'

interface IProps {
    setData: Dispatch<SetStateAction<ArrayBuffer>>
}

const Form: FC<IProps> = ({ setData }) => {
    const { handleSubmit, register } = useForm<IRequestQuestions>()
    const { onSubmit, loading } = onQuestions(setData)

    return (
        <Container onSubmit={handleSubmit(onSubmit)}>
            <Label>Quantidade de questões</Label>
            <Input {...register('count', { required: true, valueAsNumber: true })}/>
            <Label>Assunto das questões</Label>
            <Input {...register('subject', { required: true })}/>
            <Label>Série dos alunos</Label>
            <Input {...register('class', { required: true })}/>
            <ButtonSubmit loading={loading}/>
        </Container>
    )
}

export default Form