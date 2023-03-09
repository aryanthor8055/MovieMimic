import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'

const Header = (props) => {
    const navigate = useNavigate()
    return (
        <Container>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <button>
                {props.login ? "Log In" : "Sign Up"}
            </button>
        </Container>
    )
}

export default Header

const Container = styled.div``