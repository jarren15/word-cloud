const firebaseConfig = {
    apiKey: "AIzaSyAtITm2mLq-9ef8aAQEufFywrXY8j1ybgk",
    authDomain: "word-cloud-storage.firebaseapp.com",
    projectId: "word-cloud-storage",
    storageBucket: "word-cloud-storage.appspot.com",
    messagingSenderId: "245092731534",
    appId: "1:245092731534:web:9b5c5dbbf107d7d1c3d7df"
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

function submitResponse(e){
    e.preventDefault();
    var learnerResponse = document.querySelector('[data-wordCloud-input]').value;

    if(learnerResponse != ''){
        db.collection("responses").add({
            word: learnerResponse,
        }).then(data => console.log(`Successfully added ${data}`));
    }

    document.querySelector('[data-wordCloud-input]').value = '';
}

db.collection("responses").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        var fontSize = Math.floor(Math.random() * 5) + 1;
        var fontWeight = Math.floor(Math.random() * 900) + 100;
        var {word} = doc.data();
        var span = document.createElement('SPAN');
        span.innerHTML = word;
        span.style.cssText = `font-size: ${fontSize}rem; font-weight: ${fontWeight};`;
        document.querySelector('[data-wordCloud-container]').appendChild(span);
    });
});

db.collection("responses").onSnapshot((querySnapshot) => {
    document.querySelector('[data-wordCloud-container]').innerHTML = '';
    querySnapshot.forEach((doc) => {
        var fontSize = Math.floor(Math.random() * 5) + 1;
        var fontWeight = Math.floor(Math.random() * 900) + 100;
        var {word} = doc.data();
        var span = document.createElement('SPAN');
        span.innerHTML = word;
        span.style.cssText = `font-size: ${fontSize}rem; font-weight: ${fontWeight};`;
        document.querySelector('[data-wordCloud-container]').appendChild(span);
    });
});


