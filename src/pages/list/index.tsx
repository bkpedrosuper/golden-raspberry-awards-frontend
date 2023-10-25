import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem, InputLabel } from '@mui/material';
import { Button, TextField, Card, CardContent, Typography, Grid, } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Movie } from '../../interfaces/interfaces'; // Importe a interface Movie
import styles from '../../app/page.module.css'
import { StyledTableRow } from '../styles/table_style'
import Pagination from '@mui/material/Pagination';
import api from '../../services/api'

import Head from 'next/head'

const MovieListPage: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [year, setYear] = useState('');
    const [winner, setWinner] = useState(0);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [message, setMessage] = useState('')

    const limit = 10

    const handlePaginationChange = (_: any, page: number) => {
        handlePagination(page);
    };

    const handleSearch = (_: any) => {
        handlePagination(1)
    }

    const handlePagination: (page: number) => Promise<Movie[]> = async (page) => {
        setPage(page)
        let query = `?page=${page - 1}&size=${limit}`

        if (winner == -1) {
            query += '&winner=false'
        }
        else if (winner == 1) {
            query += '&winner=true'
        }

        if (year) {
            query += `&year=${year}`
        }


        return await api.get(query)
            .then(response => {
                setMovies(response.data.content)
                setTotalPages(response.data.totalPages)
                return response.data
            })
            .catch(err => {
                setMovies([])
                setMessage(err.message)
            })
    }

    useEffect(() => {
        handlePagination(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div className={styles.page}>
            <Head>
                <title>List</title>
            </Head>


            <main className={styles.content}>
                <Card className={styles.table_list}>
                    <CardContent>
                        <Grid container spacing={4}>
                            <Grid item xs={6} sm={3} container justifyContent='center' alignItems='center'>
                                <Typography variant="h5" fontWeight="bold">
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
                                <Button data-testid="search-button" variant="contained" onClick={handleSearch}>
                                    <SearchIcon />
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
                                                <TableCell>{movie.winner ? 'Yes' : 'No'}</TableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            ) : (<><p>{message}</p></>)}

                    </CardContent>
                    <CardContent className={styles.container}>
                        <Pagination
                            count={totalPages}
                            page={page}
                            onChange={handlePaginationChange}
                        />
                    </CardContent>
                </Card>

            </main>
        </div>
    );
};

export default MovieListPage;
