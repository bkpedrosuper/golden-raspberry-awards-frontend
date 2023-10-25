import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import api from '@/services/api'
import MovieSearch from '@/pages/dashboard/movies'


describe('Movie Card Module', () => {

    it('Should render the page components properly', () => {
        render(<MovieSearch />)
        const title = screen.getByRole('heading')
        const textField = screen.getByLabelText('Year')
        expect(title).toBeInTheDocument()
        expect(textField).toBeInTheDocument()
    })

    it('Should return the results for 2015 correctly', async () => {
        render(<MovieSearch />)
        const year = 2015
        const response = await api.get(`?winner=true&year=${year}`)
        expect(response.data.length).toBeGreaterThanOrEqual(2)
    })
})