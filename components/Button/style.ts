import styled from 'styled-components'

export const Container = styled.button`
    width: 17rem;
    border: none;
    display: flex;
    padding: 1rem;
    cursor: pointer;
    text-align: center;
    align-self: center;
    border-radius: 10px;
    align-items: center;
    flex-direction: row;
    transform: scale(0.95);
    transition-duration: 0.2s;
    background-color: #001016;
    transition-timing-function: linear;
    box-shadow: #02AFEF 0px 2px 8px 1px;
    
    &:hover {
        transform: scale(1);
        background-color: #02AFEF;
        box-shadow: #02AFEF 0px 2px 8px 4px;

        span {
            color: #001016;
        }

        svg {
            fill: #001016;
        }
    }

    @media screen and (max-width: 900px) {
        max-width: 80%;
        min-width: 10em;
    }

    svg {
        width: 2.1em;
        height: 2.1em;
        fill: #02AFEF;
        transition-duration: 0.2s;
        transition-timing-function: linear;
    }
`

export const Text = styled.span`
    margin: auto;
    color: #02AFEF;
    font-size: 1.2rem;
    font-weight: bold;
    transition-duration: 0.2s;
    transition-timing-function: linear;

    @media screen and (max-width: 900px) {
        font-size: 1.3em;
    }
`