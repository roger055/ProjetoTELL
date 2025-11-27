document.addEventListener('DOMContentLoaded', () => {
    // iniciar a contagem
    function animarContador(elemento, alvo, duracao) {
        let inicio = 0;
        const passo = (alvo / duracao) * 10;
        
        const contador = setInterval(() => {
            inicio += passo;
            if (inicio >= alvo) {
                inicio = alvo;
                clearInterval(contador);
            }
           
            if (elemento.id === 'alvo2') {
                elemento.textContent = Math.floor(inicio).toLocaleString('pt-BR');
            } else {
                elemento.textContent = Math.floor(inicio);
            }
        }, 10);
    }

    
    function isVisivel(elemento) {
        const retangulo = elemento.getBoundingClientRect();
        const alturaJanela = (window.innerHeight || document.documentElement.clientHeight);
        
        // Consideramos visível se estiver 75% visível ou se a parte superior já passou
        return (retangulo.top <= alturaJanela * 0.75 && retangulo.bottom >= 0);
    }

    const elementosAlvo = document.querySelectorAll('.estatistica-item .numero[data-alvo]');
    let animacaoIniciada = false;

    function checarAnimacao() {
        if (animacaoIniciada) return;

        const containerEstatisticas = document.getElementById('estatisticas-grid');
        if (!containerEstatisticas) return;

        // Se o container de estatísticas estiver visível
        if (isVisivel(containerEstatisticas)) {
            elementosAlvo.forEach(elemento => {
                const alvo = parseInt(elemento.getAttribute('data-alvo'));
                animarContador(elemento, alvo, 2000); // 2000ms = 2 segundos de duração
            });
            animacaoIniciada = true; // Impede que a animação comece novamente
            window.removeEventListener('scroll', checarAnimacao);
        }
    }

    // Inicia a verificação quando a página carrega e ao rolar
    window.addEventListener('scroll', checarAnimacao);
    checarAnimacao(); // Verifica logo no carregamento caso a seção esteja no topo
});