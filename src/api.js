export const api = {
    async bookTour(tourData) {
        await fetch('https://web-server-test.onrender.com/book-tour', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tourData)
        })
    },
};