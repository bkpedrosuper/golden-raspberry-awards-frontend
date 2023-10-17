import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import api from '@/services/api'
import MinMaxCard from '@/pages/dashboard/min_max'
import { ListIntervals, minMaxIntervals } from '@/interfaces/interfaces'


describe('MinMax Card Module', () => {
    
    it('Should render the page rows properly', () => {
        render(<MinMaxCard max={minMaxIntervals.max} min={minMaxIntervals.min}/>)
        const titleMax = screen.getByRole('heading', {name: 'Maximum'})
        const titleMin = screen.getByRole('heading', {name: 'Minimum'})

        // Check if there are two rows with the head
        const rows = screen.queryAllByRole('row', {name: 'Producer Interval Previous Year Following Year'})

        expect(titleMax).toBeInTheDocument()
        expect(titleMin).toBeInTheDocument()
        expect(rows.length).toBe(2)
    })

    it('Should render the page results properly', () => {
        render(<MinMaxCard max={minMaxIntervals.max} min={minMaxIntervals.min}/>)

        // Check if the results are printed
        const rows = screen.getByRole('cell', {name: 'Matthew Vaughn'})

        expect(rows).toBeInTheDocument()
    })
})