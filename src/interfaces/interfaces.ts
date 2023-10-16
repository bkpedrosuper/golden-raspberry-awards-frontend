export interface YearWinner {
    year: number;
    winnerCount: number;
}

export interface ListWinnersYears {
    years: YearWinner[];
}

export interface StudioWinner {
    name: string;
    winCount: number;
}

export interface ListWinnersStudios {
    studios: StudioWinner[];
}

export interface Interval {
    producer: string;
    previousWin: number,
    followingWin: number,
    interval: number,
}

export interface ListIntervals {
    max: Interval[],
    min: Interval[],
}

interface Producer {
    name: string;
}

export interface Movie {
    year: number;
    id: number;
    title: string;
    winner: number,
    producers: Producer[],
}


export const yearsWinnersList: ListWinnersYears = {
    years: [
        {
            'year': 1996,
            'winnerCount': 2
        },
        {
            'year': 1990,
            'winnerCount': 2
        },
        {
            'year': 2015,
            'winnerCount': 2
        }
    ]
}

export const studioWinnersList: ListWinnersStudios = {
    studios: [
        {
            'name': "Columbia Pictures",
            'winCount': 6
        },
        {
            'name': "Paramount Pictures",
            'winCount': 6
        },
        {
            'name': "Warner Bros.",
            'winCount': 5
        }
    ]
}

export const minMaxIntervals: ListIntervals = {
    max: [
        {
            producer: 'Matthew Vaughn',
            previousWin: 2002,
            followingWin: 2015,
            interval: 13,
        },
        {
            producer: 'Pedro Serpa',
            previousWin: 2005,
            followingWin: 2018,
            interval: 13,
        },
    ],

    min: [
        {
            producer: 'Joel Silver',
            previousWin: 1990,
            followingWin: 1991,
            interval: 1,
        },
    ]
}