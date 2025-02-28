import { FC } from 'react'
import useTitle from './useTitle'
import { Button } from './style'

interface IProps {
    loading: boolean
}

const ButtonSubmit: FC<IProps> = ({ loading }) => {
    const title = useTitle(loading)

    return (
        <Button type="submit" title={title} disabled={loading}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"/>
            </svg>
        </Button>
    )
}

export default ButtonSubmit