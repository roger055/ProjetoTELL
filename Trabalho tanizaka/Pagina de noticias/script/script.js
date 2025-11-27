document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os cards de notícia
    const cardsNoticia = document.querySelectorAll('.lista-noticias .noticia-card');
    
    // Anima cada card com um pequeno atraso
    cardsNoticia.forEach((card, index) => {
        // Usa setTimeout para introduzir um atraso progressivo
        setTimeout(() => {
            // Adiciona a classe 'aparecer' que ativa a transição CSS
            card.classList.add('aparecer');
        }, 150 * index); // Atraso de 150ms entre o aparecimento de cada card
    });
});