/*
 * Your program must print string with the number of years and months and the total number of days between the dates.
 * Dates are provided in dd.mm.yyyy format.
 * You are not allowed to plug in JS libraries such as moment.js or date-fns directly into the code. All code need to be written in this file.
 *
 * Result must be shown as a string in years, months and total days. If years or months are 0, then it should not be displayed in the output.
 *
 * Example:
 * Input: ['01.01.2000', '01.01.2016']
 * Output:
 * '16 years, total 5844 days'
 *
 * Example 2:
 * Input: ['01.11.2015', '01.02.2017']
 *
 * Output:
 * '1 year, 3 months, total 458 days'
*/
const dates = [
    ['01.01.2000', '01.01.2016'],
    ['01.01.2016', '01.08.2016'],
    ['01.11.2015', '01.02.2017'],
    ['17.12.2016', '16.01.2017'],
    ['01.01.2016', '01.01.2016'],
    ['28.02.2015', '13.04.2018'],
    ['28.01.2015', '28.02.2015'],
    ['17.03.2022', '17.03.2023'],
    ['17.02.2024', '17.02.2025'],
];

// Receive string of dates one after each other
const transformDate = (date) => {
    const dateSplitted = date.split('.');
    return [dateSplitted[1], dateSplitted[0], dateSplitted[2]].join('.')
}

const pluralize = (string, amount) => `${string}${amount > 1 || amount === 0 ? 's' : ''}`

function outputDate([start, end]) {
    const startDate = new Date(transformDate(start))
    const endDate = new Date(transformDate(end))

    const diff = new Date(endDate.getTime() - startDate.getTime());
    const days = Math.ceil((endDate - startDate) / (1000 * 3600 * 24))
    const years = diff.getFullYear() - 1970
    const months = diff.getMonth()

    const yearString = years > 0 ? `${years} ${pluralize('year', years)}, ` : ''
    const monthString = months > 0 ? `${months} ${pluralize('month', months)}, ` : ''

    return `${yearString}${monthString}total ${days} ${pluralize('day', days)}`
}

// https://www.youtube.com/watch?v=-5wpm-gesOY