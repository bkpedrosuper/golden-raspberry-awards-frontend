import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem, InputLabel } from '@mui/material';
import { Button, TextField, Card, CardContent, Typography, Grid,} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Movie } from '../../interfaces/interfaces'; // Importe a interface Movie
import styles from '../../app/page.module.css'
import {StyledTableRow} from '../styles/table_style'
import Pagination from '@mui/material/Pagination';
import api from '../../services/api'

const MovieListPage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [year, setYear] = useState('');
  const [winner, setWinner] = useState(0);
  const [page, setPage] = useState(1);
  const [message, setMessage] = useState('')

  const handlePaginationChange = (_: any, page: number) => {
    handlePagination(page);
  };

  const handleSearch = (_:any) => {
    handlePagination(1)
  }

  const handlePagination: (page: number) => Promise<Movie[]> = async (page) => {
    setPage(page)
    let query = `?page=${page}`
    
    if (winner == -1) {
        query += '&winner=false'
    }
    else if (winner == 1) {
        query += '&winner=true'
    }

    if (year) {
        query+=`&year=${year}`
    }

    console.log(query)
    
    
    return await api.get(query)
    .then(response => {
        console.log(response.data);
        
        setMovies(response.data)
        return response.data
    })
    .catch(err => {
        setMovies([])
        setMessage(err.message)
    })
  }

  useEffect( () => {
    handlePagination(1)
  }, [])

  return (
    <div className={styles.page}>

        <main className={styles.content}>
            <Card className={styles.table_list}>
                <CardContent>
                    <Grid container spacing={4}>
                        <Grid item xs={6} sm={3} container justifyContent='center' alignItems='center'>
                            <Typography variant="h5" gutterBottom fontWeight="bold">
                                List movies
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sm={3} container justifyContent='center' alignItems='center'>
                            <TextField
                                label="Year"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                                type="number"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6} sm={3} container justifyContent='center' alignItems='center'>

                            <TextField
                                value={winner}
                                label="Winner?"
                                fullWidth
                                select
                                onChange={(e) => setWinner(parseInt(e.target.value))}
                            >
                                <MenuItem value={0}>Any</MenuItem>
                                <MenuItem value={-1}>No</MenuItem>
                                <MenuItem value={1}>Yes</MenuItem>

                            </TextField>
                        </Grid>
                        <Grid item xs={6} sm={3} container justifyContent='center' alignItems='center'>
                            <Button variant="contained" onClick={handleSearch}>
                                <SearchIcon/>
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardContent>
                    {
                        movies.length ? (
                        <Table className={styles.table}>
                            <TableHead>
                            <StyledTableRow>
                                <TableCell className={styles.table_head}>ID</TableCell>
                                <TableCell className={styles.table_head}>Year</TableCell>
                                <TableCell className={styles.table_head}>Title</TableCell>
                                <TableCell className={styles.table_head}>Winner</TableCell>
                            </StyledTableRow>
                            </TableHead>
                            <TableBody>
                            {movies.map((movie) => (
                                <StyledTableRow key={movie.id}>
                                    <TableCell>{movie.id}</TableCell>
                                    <TableCell>{movie.year}</TableCell>
                                    <TableCell>{movie.title}</TableCell>
                                    <TableCell>{movie.winner ? 'Yes':'No'}</TableCell>
                                </StyledTableRow>
                            ))}
                            </TableBody>
                        </Table>
                    ) : (<><p>{message}</p></>)}

                </CardContent>
            </Card>

        </main>
        <main className={styles.content}>
            <Pagination
                count={50}
                page={page}
                onChange={handlePaginationChange}
            />
        </main>
    </div>
  );
};

export default MovieListPage;
