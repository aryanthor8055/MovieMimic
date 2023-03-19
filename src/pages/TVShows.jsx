import React, { useState, useEffect, memo } from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, getGenres } from '../store';
import {
    firebaseAuth
} from '../utils/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import Navbar from '../components/Navbar';
import NotAvailable from '../components/NotAvailable';
import Slider from '../components/Slider';
import SelectGenre from '../components/SelectGenre';


const TVShows = () => {
    const navigate = useNavigate()
    const [isScrolled, setIsScrolled] = useState(false);

    const genresLoaded = useSelector((state) => state.moviemimic.genresLoaded);
    const movies = useSelector((state) => state.moviemimic.movies)
    const genres = useSelector((state) => state.moviemimic.genres)


    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null);
    }

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        // if (currentUser) navigate('/')
    })
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenres())

    }, [])



    useEffect(() => {
        if (genresLoaded) {
            dispatch(fetchMovies({ type: 'all' }))
        }

    }, [genresLoaded])

    return (
        <Container>
            <div className='navbar'>
                <Navbar isScrolled={isScrolled} />
            </div>
            <div className='data'>
                <SelectGenre genres={genres} type="movie" />
                {
                    movies.length ? (<Slider movies={movies} />) : (<NotAvailable />)
                }
            </div>
        </Container>
    )
}

export default TVShows

const Container = styled.div`
.data{
    margin-top:8rem;
    .not-available{
        text-align:center;
        color:white;
        margin-top:4rem;
    }
}
`