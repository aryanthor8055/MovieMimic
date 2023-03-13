import React from 'react'
import styled from 'styled-components';

const SelectGenre = ({ genres, type }) => {
    return (
        <Select>
            {genres.map((genre) => {
                return <option value={genre.id} key={genre.id}>{genre.name}</option>
            })}
        </Select>
    )
}

export default SelectGenre;

const Select = styled.select`

`