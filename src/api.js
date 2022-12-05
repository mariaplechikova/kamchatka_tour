export const api = {
    async bookTour(tourData) {
        await fetch('http://localhost:8080/book-tour', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tourData)
        })
    },
};