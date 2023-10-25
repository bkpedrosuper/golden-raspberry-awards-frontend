import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ListStudiosCard from '@/pages/dashboard/studios_winners'
import { studioWinnersList } from '@/interfaces/interfaces'


describe('Studio Card Module', () => {

    it('Should render the card rows properly', () => {
        render(<ListStudiosCard studios={studioWinnersList.studios} />)
        const titleMax = screen.getByRole('heading', { name: 'Top 3 studios with winners' })
        const headRows = screen.getByRole('row', { name: 'Name Win count' })

        expect(titleMax).toBeInTheDocument()
        expect(headRows).toBeInTheDocument()
    })

    it('Should render the card results properly', () => {
        render(<ListStudiosCard studios={studioWinnersList.studios} />)

        // Check if the results are printed
        const rowResult = screen.getByRole('row', { name: 'Paramount Pictures 6' })

        expect(rowResult).toBeInTheDocument()
    })
})