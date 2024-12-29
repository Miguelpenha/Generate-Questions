import styled from 'styled-components'

export const Container = styled.div`
    width: 90%;
    max-width: 50em;
    margin-top: 3em;
    align-self: center;
    position: relative;
    border-radius: 15px;
    background-color: #FFFFFF;
    box-shadow: #02AFEF 0px 0px 15px 4px;
`

export const ButtonDownload = styled.button`
    top: 1.5%;
    right: 2%;
    width: 3em;
    border: none;
    display: flex;
    padding: 0.5em;
    cursor: pointer;
    position: absolute;
    border-radius: 50%;
    background: transparent;
    background-color: #002533;
    transition-duration: 0.15s;
    transition-timing-function: linear;

    &:hover {
        transform: scale(1.1);
        background-color: #02AFEF;

        svg {
            fill: #002533;
        }
    }
`

export const IconButtonDownload = styled.svg`
    width: 100%;
    height: 100%;
    fill: #02AFEF;
    transition-duration: 0.15s;
    transition-timing-function: linear;
`