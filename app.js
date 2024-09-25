function criaCartao(categoria, pergunta, resposta) {
    const container = document.getElementById('container');
    const cartao = document.createElement('article');
    cartao.className = 'cartao';

    cartao.innerHTML = `
        <div class="cartao__conteudo">
            <h3>${categoria}</h3>
            <div class="cartao__conteudo__pergunta">
                <p>${pergunta}</p>
            </div>
            <div class="cartao__conteudo__resposta">
                <p>${resposta}</p>
            </div>
        </div>
    `;

    cartao.addEventListener('click', () => {
        cartao.classList.toggle('active');
    });

    container.appendChild(cartao);
}

// Criação dos cartões
const flashcards = [
    {
        categoria: 'Programação',
        pergunta: 'O que é Python?',
        resposta: 'O Python é uma linguagem de programação'
    },
    {
        categoria: 'Geografia',
        pergunta: 'Qual a capital da França?',
        resposta: 'A capital da França é Paris'
    },
    {
        categoria: 'Programação',
        pergunta: 'O que é uma função?',
        resposta: 'Uma função é um bloco de código que executa alguma tarefa'
    },
    {
        categoria: 'Lingua inglesa',
        pergunta: 'Como se diz oi em Inglês?',
        resposta: 'Oi em inglês é HI (RAI)'
    }
];

// Chamada da função para criar os cartões
flashcards.forEach(cartao => {
    criaCartao(cartao.categoria, cartao.pergunta, cartao.resposta);
});
