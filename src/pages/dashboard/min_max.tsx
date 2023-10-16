import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import React from 'react';
import {StyledTableCell, StyledTableRow} from '../styles/table_style'

import { ListIntervals } from '../../interfaces/interfaces';



const MinMaxCard: React.FC<ListIntervals> = ({min, max}) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" gutterBottom fontWeight="bold">
                    Producers with longest and shortest interval between wins
                </Typography>
                <TableContainer component={Paper}>
                    <Typography variant="h5" gutterBottom>
                        Maximum
                    </Typography>
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell align="center"> <strong>Producer</strong> </StyledTableCell>
                                <StyledTableCell align="center"> <strong>Interval</strong> </StyledTableCell>
                                <StyledTableCell align="center"> <strong>Previous Year</strong> </StyledTableCell>
                                <StyledTableCell align="center"> <strong>Following Year</strong></StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {max.map( (max, index) => (
                                <StyledTableRow key={index}>
                                    <StyledTableCell align="center">{max.producer}</StyledTableCell>
                                    <StyledTableCell align="center">{max.interval}</StyledTableCell>
                                    <StyledTableCell align="center">{max.previousWin}</StyledTableCell>
                                    <StyledTableCell align="center">{max.followingWin}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TableContainer component={Paper}>
                    <Typography variant="h5" gutterBottom>
                        Minimum
                    </Typography>
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell align="center"> <strong>Producer</strong> </StyledTableCell>
                                <StyledTableCell align="center"> <strong>Interval</strong> </StyledTableCell>
                                <StyledTableCell align="center"> <strong>Previous Year</strong> </StyledTableCell>
                                <StyledTableCell align="center"> <strong>Following Year</strong></StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {min.map( (min, index) => (
                                <StyledTableRow key={index}>
                                    <StyledTableCell align="center">{min.producer}</StyledTableCell>
                                    <StyledTableCell align="center">{min.interval}</StyledTableCell>
                                    <StyledTableCell align="center">{min.previousWin}</StyledTableCell>
                                    <StyledTableCell align="center">{min.followingWin}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    )
}

export default MinMaxCard