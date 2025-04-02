// Funzione per gestire il login
document.querySelector('.login-section form').addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    
    if (email && password) {
        console.log('Login effettuato con successo!');
        // Qui inserire logica per autenticazione, per esempio con Firebase o un altro servizio
    } else {
        alert('Compila tutti i campi');
    }
});

// Funzione per gestire il like dei libri
const likeButtons = document.querySelectorAll('.book-card button');

likeButtons.forEach(button => {
    button.addEventListener('click', function() {
        let bookCard = button.closest('.book-card');
        let likeCount = bookCard.querySelector('.like-count');
        
        // Incrementa il contatore dei like
        let currentLikes = parseInt(likeCount.textContent);
        likeCount.textContent = currentLikes + 1;

        // Mostra un messaggio di conferma (opzionale)
        alert('Grazie per aver messo un like!');
    });
});

// Funzione per commentare i libri
const commentButtons = document.querySelectorAll('.comment-btn');

commentButtons.forEach(button => {
    button.addEventListener('click', function() {
        let bookCard = button.closest('.book-card');
        let commentText = prompt('Lascia il tuo commento:');
        
        if (commentText) {
            // Aggiungi il commento al libro
            let commentsSection = bookCard.querySelector('.comments');
            let newComment = document.createElement('p');
            newComment.textContent = commentText;
            commentsSection.appendChild(newComment);
            
            alert('Commento aggiunto con successo!');
        }
    });
});

// Funzione per gestire la scrittura di un libro
document.querySelector('.writing-section form').addEventListener('submit', function(event) {
    event.preventDefault();
    let title = document.querySelector('#book-title').value;
    let story = document.querySelector('#book-story').value;
    let coverImage = document.querySelector('#book-cover').files[0];
    
    if (title && story && coverImage) {
        console.log('Libro creato con successo!');
        // Qui puoi aggiungere la logica per caricare il libro e i dati nel tuo database
    } else {
        alert('Compila tutti i campi');
    }
});

// Funzione per la gestione dei generi nella scrittura
const genreSelect = document.querySelector('#book-genre');
const selectedGenre = genreSelect ? genreSelect.value : null;

if (selectedGenre) {
    console.log('Genere selezionato:', selectedGenre);
    // Puoi aggiungere logica per gestire il genere selezionato, ad esempio salvarlo nel database
}

// Funzione per aggiungere il link al profilo Instagram e TikTok
document.querySelector('#instagram-link').addEventListener('input', function(event) {
    console.log('Instagram link:', event.target.value);
    // Logica per salvare il link nel profilo dell'utente
});

document.querySelector('#tiktok-link').addEventListener('input', function(event) {
    console.log('TikTok link:', event.target.value);
    // Logica per salvare il link nel profilo dell'utente
});

// Funzione per navigare nel sito
const navButtons = document.querySelectorAll('.nav-btn');

navButtons.forEach(button => {
    button.addEventListener('click', function() {
        let targetPage = button.getAttribute('data-target');
        window.location.href = targetPage + '.html'; // Sostituisci con le tue pagine specifiche
    });
});
