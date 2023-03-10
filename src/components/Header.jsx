import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Header = (props) => {
    const navigate = useNavigate()
    return (
        <Container className='flex a-center j-between'>
            <div className='logo'>
                MOVIEMIMIC
            </div>
            <button onClick={() => navigate(props.login ? "/login" : "/signup")}>
                {props.login ? "Log In" : "Sign Up"}
            </button>
        </Container>
    )
}

export default Header

const Container = styled.div`
padding:0.4rem;
.logo{
    color:red;
    font-size:40px;
    font-weight:bold;

}
button{
    padding:0.5rem 1rem;

    background-color:#e50914;
    border:none;
    cursor:pointer;
    color:white;
    border-radius:0.2rem;
    font-weight:bolder;
    font-size:1.05rem;
}
`