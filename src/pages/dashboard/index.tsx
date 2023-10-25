
import api from '../../services/api'
import styles from '../../app/page.module.css'
import React from 'react'
import Grid from '@mui/material/Grid';
import Head from 'next/head'

// Get cards
import ListWinnerCard from './years_winners'
import ListStudiosCard from './studios_winners'
import MinMaxCard from './min_max'
import MovieSearch from './movies'

// Get interfaces
import { ListWinnersYears } from '../../interfaces/interfaces'
import { ListWinnersStudios } from '../../interfaces/interfaces'
import { ListIntervals } from '../../interfaces/interfaces'

interface DashBordProps {
    years: ListWinnersYears;
    studios: ListWinnersStudios;
    min_max: ListIntervals;
}

const DashBord: React.FC<DashBordProps> = ({ years, studios, min_max }) => {

    return (
        <div className={styles.page}>
            <Head>
                <title>Dashboard</title>
            </Head>
            <main className={styles.content}>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <ListWinnerCard years={years.years} />
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <ListStudiosCard studios={studios.studios} />
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <MinMaxCard max={min_max.max} min={min_max.min} />
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <MovieSearch />
                    </Grid>
                </Grid>
            </main>

        </div>
    )
}

// Get functions
async function getMinMaxIntervals(): Promise<ListIntervals> {
    return await api.get('?projection=max-min-win-interval-for-producers')
        .then(response => {
            return response.data
        })
        .catch(err => {
            console.error(err);
            throw err
        })
}

// Get functions
async function getStudioWinners(): Promise<ListWinnersStudios> {
    return await api.get('?projection=studios-with-win-count')
        .then(response => {
            const topThreeWinners = response.data.studios.slice(0, 3)
            const result: ListWinnersStudios = {
                studios: topThreeWinners
            }
            return result
        })
        .catch(err => {
            console.error(err);
            throw err
        })
}

// Get functions
async function getWinnersList(): Promise<ListWinnersYears> {
    return await api.get('?projection=years-with-multiple-winners')
        .then(response => {
            const topThreeWinners = response.data.years.slice(0, 3)

            const result: ListWinnersYears = {
                years: topThreeWinners
            }
            return result
        })
        .catch(err => {
            console.error(err);
            throw err
        })
}


// Get data and render on server side (SSR)
export async function getServerSideProps() {

    const years: ListWinnersYears = await getWinnersList()
    const studios: ListWinnersStudios = await getStudioWinners()
    const min_max: ListIntervals = await getMinMaxIntervals()

    return {
        props: { years, studios, min_max },
    };
}

export default DashBord