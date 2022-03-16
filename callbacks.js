export function getCallback(data){
    let {entries} = data;
    let allWords = [];
    let formattedWords = [];
    entries.forEach((entry) => {
        var fontSize = Math.floor(Math.random() * 5) + 1;
        var fontWeight = Math.floor(Math.random() * 900) + 100;
        var {word} = entry;
        var span = document.createElement('SPAN');
        span.innerHTML = word;
        span.setAttribute('tabindex', '0');
        span.setAttribute('aria-label', word);
        span.style.cssText = `font-size: ${fontSize}rem; font-weight: ${fontWeight};`;
        allWords.push(span);
        formattedWords = allWords.map(word => {
            return word.outerHTML;
        });
        // document.querySelector('[data-wordCloud-container]').appendChild(span);
    });
    document.querySelector('[data-wordCloud-container]').innerHTML = formattedWords.join('');
    document.querySelector('[data-wordCloud-input]').value = '';
}