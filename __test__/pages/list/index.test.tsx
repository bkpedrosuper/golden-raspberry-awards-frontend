import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import api from '@/services/api'
import List from '@/pages/list'

describe('DashBoard Cards Module', () => {
    it('Check if all cards are loaded', () => {
        render(<List />)
        // Check if all buttons and textfield are being rendered
        const title = screen.getByRole('heading', { name: 'List movies' })
        const textField = screen.getByLabelText('Year')
        const selectField = screen.getByRole('combobox', { name: 'Winner?' })
        const searchButton = screen.getByTestId('search-button');

        expect(title).toBeInTheDocument()
        expect(textField).toBeInTheDocument()
        expect(selectField).toBeInTheDocument()
        expect(searchButton).toBeInTheDocument()
    })

    it('Should return 15 results with no filters in the first page', async () => {
        const response = await api.get(`?page=0&size=15`)
        expect(response.data.content.length).toBe(15)
    })

    it('Should return only valid winners if the winner parameter is being passed', async () => {
        const response = await api.get(`?page=0&size=99&winner=true`)
        expect(response.data.content.length).toBeGreaterThan(5)
        response.data.content.map((movie: any) => {
            expect(movie.winner).toBe(true)
        })
    }, 10000)
})