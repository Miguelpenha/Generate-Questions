import { useState, useEffect } from 'react'

function useTitle(loading: boolean) {
    const [title, setTitle] = useState('Gerar')

    useEffect(() => {
        if (loading) {
            setTitle('Gerando.')

            const interval = setInterval(() => {
                setTitle(title => {
                    const countPoints = title.split('.').length - 1

                    if (countPoints < 3) {
                        return title + '.'
                    } else {
                        return 'Gerando.'
                    }
                })
            }, 500)

            return () => clearInterval(interval)
        } else {
            setTitle('Gerar')
        }
    }, [loading])

    return title
}

export default useTitle