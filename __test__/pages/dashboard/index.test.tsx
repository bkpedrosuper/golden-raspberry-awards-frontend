import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { minMaxIntervals, studioWinnersList, yearsWinnersList } from '@/interfaces/interfaces'
import DashBord from '@/pages/dashboard'

describe('DashBoard Cards Module', () => {
    it('Check if all cards are loaded', () => {
        render(<DashBord years={yearsWinnersList} min_max={minMaxIntervals} studios={studioWinnersList} />)
        const cardYears = screen.getByRole('heading', { name: 'List years with multiple winners' })
        const cardStudios = screen.getByRole('heading', { name: 'Top 3 studios' })
        const cardMinMax = screen.getByRole('heading', { name: 'Producers with longest and shortest interval between wins' })
        const cardWins = screen.getByRole('heading', { name: 'List movies winner by year' })

        expect(cardStudios).toBeInTheDocument()
        expect(cardYears).toBeInTheDocument()
        expect(cardMinMax).toBeInTheDocument()
        expect(cardWins).toBeInTheDocument()
    })
})