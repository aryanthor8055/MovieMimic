import React, { useState, useEffect, memo } from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres, getUsersLikedMovies } from '../store';
import {
    firebaseAuth
} from '../utils/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import Navbar from '../components/Navbar';
import NotAvailable from '../components/NotAvailable';
import Slider from '../components/Slider';
import SelectGenre from '../components/SelectGenre';
import Card from '../components/Card';


const UserLiked = () => {

    const navigate = useNavigate()
    const [isScrolled, setIsScrolled] = useState(false);



    const movies = useSelector((state) => state.moviemimic.movies)


    const [email, setEmail] = useState(undefined)

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) setEmail(currentUser.email);
        else navigate("/login")
    })

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null);
    }
    const dispatch = useDispatch();

    useEffect(() => {
        if (email) {
            dispatch(getUsersLikedMovies(email))
        }
    }, [email])



    return (
        <Container>
            <Navbar isScrolled={isScrolled} />
            <div className='content flex column'>
                <h1>
                    My List
                </h1>
                <div className='grid flex'>
                    {movies.map((movie, index) => {
                        return <Card movieData={movie} index={index} key={movie.id} isLiked={true} />
                    })}
                </div>
            </div>
        </Container>
    )
}

export default UserLiked

const Container = styled.div`
.content{
    margin-top:2.3rem;
    margin-top:8rem;
    gap:3rem;
    h1{
        margin-left:3rem;
    }
    .grid{
        flex-wrap:wrap;
        gap:1rem;
    }
}
`