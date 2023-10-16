// MovieSearch.js
import api from '../../services/api'
import React, { useState } from 'react';
import { Button, TextField, Table, TableHead, TableBody, Card, CardContent, Typography, Grid, TableCell, TableRow } from '@mui/material';
import {StyledTableCell, StyledTableRow} from '../styles/table_style'
import {Movie} from '../../interfaces/interfaces'
import SearchIcon from '@mui/icons-material/Search';
import styles from '../../app/page.module.css'

const MovieSearch = () => {
  const [message, setMessage] = useState('Search for a year to begin.');
  const [year, setYear] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    await api.get(`?winner=true&year=${year}`)
    .then(response => {
        setMovies(response.data)
        
        setMessage('')
        if (response.data.length < 1) {
            setMessage(`No winner movies found for the year of ${year}`)
        }

    })
    .catch(err => {
        setMovies([])
        setMessage(err.message)
        console.error(err.message);
    })
  };

  return (
    <Card>
        <CardContent>
            <Typography variant="h5" gutterBottom fontWeight="bold">
                List movies winner by year
            </Typography>
            
            <Grid container spacing={3}>
                <Grid item xs={10} sm={10}>
                    <TextField
                        label="Year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        type="number"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={2} sm={2} container justifyContent='center' alignItems='center'>
                    <Button variant="contained" onClick={handleSearch}>
                        <SearchIcon/>
                    </Button>
                </Grid>
            </Grid>
        </CardContent>
        <CardContent>
            {
                movies.length ? (
                <Table>
                    <TableHead>
                        <StyledTableRow>
                            <TableCell className={styles.table_head} align="center">Id</TableCell>
                            <TableCell className={styles.table_head} align="center">Year</TableCell>
                            <TableCell className={styles.table_head} align="center">Title</TableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {movies.map((movie: Movie, _) => (
                            <StyledTableRow key={movie.id}>
                                <TableCell align="center">{movie.id}</TableCell>
                                <TableCell align="center">{movie.year}</TableCell>
                                <TableCell align="center">{movie.title}</TableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
                ) : (<>{message}</>)
            }
        </CardContent>
    </Card>
  );
};

export default MovieSearch;
