/**
 * Generates an array of 120 objects, each representing a person with specific details.
 * 
 * Each object includes:
 * - `id`: A unique identifier for the person (number).
 * - `name`: A name string in the format `PersonX`, where `X` is the person's number.
 * - `age`: A random age between 18 and 67 (number).
 * - `currentCity`: A randomly chosen city from a predefined list (string).
 * - `countryOfBirth`: A randomly chosen country from a predefined list (string).
 * - `salary`: A randomly generated salary between 100,000 and 599,999 (number).
 * 
 * @type {Array<{id: number, name: string, age: number, currentCity: string, countryOfBirth: string, salary: number}>}
 */
export const data = Array.from({length:120}, (_, i) => ({
        id: Number(i+1),
        name: `Person${i+1}`,
        age: Math.floor(Math.random() * 50) + 18,
        currentCity: ['New York', 'Paris', 'London', 'Tokyo', 'Berlin', 'Los Angeles', 'Moscow'][Math.floor(Math.random() * 7)],
        countryOfBirth: ['USA', 'France', 'UK', 'Japan', 'Germany', 'USA', 'Russia'][Math.floor(Math.random() * 7)],
        salary: Math.floor(Math.random() * 500000) + 100000
    }))


