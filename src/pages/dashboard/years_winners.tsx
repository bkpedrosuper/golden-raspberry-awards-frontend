import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';

import React from 'react';
import { StyledTableCell, StyledTableRow } from '../styles/table_style'

import { ListWinnersYears } from '../../interfaces/interfaces';


const ListWinnerCard: React.FC<ListWinnersYears> = ({ years }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" gutterBottom fontWeight="bold">
                    List years with multiple winners
                </Typography>
                <TableContainer component={Paper}>
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell align="center"> <strong>Year</strong> </StyledTableCell>
                                <StyledTableCell align="center"> <strong>Win count</strong></StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {years.map((year, index) => (
                                <StyledTableRow key={index}>
                                    <StyledTableCell align="center">{year.year}</StyledTableCell>
                                    <StyledTableCell align="center">{year.winnerCount}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    )
}

export default ListWinnerCard