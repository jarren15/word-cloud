export default async function postWord(url, data) {
    try {
        document.querySelector('[data-wordCloud-container]').innerHTML = '';
        document.querySelector('[data-loader]').style.display = 'block';
        let request = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        let response = await request.json();
        return response;
    }
    finally {
        document.querySelector('[data-loader]').style.display = 'none';
    }
}