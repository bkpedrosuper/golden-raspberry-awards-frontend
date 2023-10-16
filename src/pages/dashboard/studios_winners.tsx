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

import { ListWinnersStudios } from '../../interfaces/interfaces';



const ListStudiosCard: React.FC<ListWinnersStudios> = ({studios}) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" gutterBottom fontWeight="bold">
                    Top 3 studios
                </Typography>
                <TableContainer component={Paper}>
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell align="center"> <strong>Studio</strong> </StyledTableCell>
                                <StyledTableCell align="center"> <strong>Win count</strong></StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {studios.map( (studio, index) => (
                                <StyledTableRow key={index}>
                                    <StyledTableCell align="center">{studio.name}</StyledTableCell>
                                    <StyledTableCell align="center">{studio.winCount}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    )
}

export default ListStudiosCard