import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ListWinnerCard from '@/pages/dashboard/years_winners'
import { yearsWinnersList } from '@/interfaces/interfaces'


describe('Years Card Module', () => {

    it('Should render the card rows properly', () => {
        render(<ListWinnerCard years={yearsWinnersList.years} />)
        const title = screen.getByRole('heading', { name: 'List years with multiple winners' })
        const headRows = screen.getByRole('row', { name: 'Year Win count' })

        expect(title).toBeInTheDocument()
        expect(headRows).toBeInTheDocument()
    })

    it('Should render the card results properly', () => {
        render(<ListWinnerCard years={yearsWinnersList.years} />)

        // Check if the results are printed
        const rowResult = screen.getByRole('row', { name: '2015 2' })

        expect(rowResult).toBeInTheDocument()
    })
})