export default async function getWords(url){
    try {
        document.querySelector('[data-loader]').style.display = 'block';
        let response = await fetch(url);
        let data = await response.json();
        return data;
    }
    finally {
        document.querySelector('[data-loader]').style.display = 'none';
    }
}