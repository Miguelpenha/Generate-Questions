import styled from 'styled-components'

export const Container = styled.form`
    gap: 1em;
    width: 85%;
    padding: 2em;
    display: flex;
    max-width: 25em;
    margin-top: 5em;
    align-self: center;
    border-radius: 8px;
    box-shadow: #02AFEF 0px 2px 8px 1px;
`

export const Label = styled.label `
    font-weight: bold;
`

export const Input = styled.input`
    border: none;
    color: #02AFEF;
    padding: 0.5em;
    font-size: 1em;
    border-radius: 8px;
    background-color: #002533;
    transition-duration: 0.2s;
    transition-timing-function: linear;

    &:focus {
        outline: none;
        box-shadow: #02AFEF 0px 2px 8px 1px;
    }
`