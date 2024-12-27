import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        scrollbar-width: thin;
        box-sizing: border-box;
        flex-direction: column;
        scroll-behavior: smooth;
        scrollbar-color: #02AFEF #001016;
        font-family: 'Roboto', sans-serif;
        
        ::-webkit-scrollbar {
            width: 12px;
        }

        ::-webkit-scrollbar-track {
            background: #001016;
        }

        ::-webkit-scrollbar-thumb {
            border-radius: 16px;
            background-color: #02AFEF;
        }
    }

    body {
        color: #02AFEF;
        background-color: #001016;
    }

    .Toastify__toast {
        color: #02AFEF;
        flex-direction: row;
        background-color: #001016;
        box-shadow: #02AFEF 0px 2.5px 12px 4px;
    }

    .Toastify__toast-body {
        flex-direction: row;
    }

    .Toastify__progress-bar {
        background-color: #02AFEF;
    }
    
    .Toastify__close-button {
        color: #02AFEF;
    }
`