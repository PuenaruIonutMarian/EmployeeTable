export const data = Array.from({length:120}, (_, i) => ({
        id: i+1,
        name: `Person${i+1}`,
        age: Math.floor(Math.random() * 50) + 18,
        city: ['New York', 'Paris', 'London', 'Tokyo', 'Berlin', 'Los Angeles', 'Moscow'][Math.floor(Math.random() * 7)],
        country: ['USA', 'France', 'UK', 'Japan', 'Germany', 'USA', 'Russia'][Math.floor(Math.random() * 7)],
        salary: Math.floor(Math.random() * 500000) + 100000
    }))


