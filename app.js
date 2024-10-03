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

// Criação dos cartões com perguntas de One Piece
const flashcards = [
    {
        categoria: 'Personagens',
        pergunta: 'Quem é o capitão dos Piratas do Chapéu de Palha?',
        resposta: 'O capitão dos Piratas do Chapéu de Palha é Monkey D. Luffy.'
    },
    {
        categoria: 'Akuma no Mi',
        pergunta: 'Qual é a fruta do diabo de Luffy?',
        resposta: 'Luffy comeu a Gomu Gomu no Mi, que lhe dá poderes elásticos.'
    },
    {
        categoria: 'Tripulação',
        pergunta: 'Quem é o espadachim da tripulação dos Chapéus de Palha?',
        resposta: 'O espadachim da tripulação é Roronoa Zoro.'
    },
    {
        categoria: 'Grand Line',
        pergunta: 'Qual é o objetivo final de Luffy?',
        resposta: 'O objetivo de Luffy é encontrar o One Piece e se tornar o Rei dos Piratas.'
    }
];

// Chamada da função para criar os cartões de One Piece
flashcards.forEach(cartao => {
    criaCartao(cartao.categoria, cartao.pergunta, cartao.resposta);
});

// Novas perguntas sobre One Piece
const novasPerguntas = [
    {
        categoria: 'Yonko',
        pergunta: 'Quem são os quatro Yonko?',
        resposta: 'Os quatro Yonko são Shanks, Kaido, Big Mom e Barba Negra.'
    },
    {
        categoria: 'Marinha',
        pergunta: 'Quem é o Almirante da Frota da Marinha?',
        resposta: 'O Almirante da Frota é Sakazuki, também conhecido como Akainu.'
    },
    {
        categoria: 'Aliança',
        pergunta: 'Com quais piratas Luffy forma uma aliança durante o arco de Dressrosa?',
        resposta: 'Luffy forma uma aliança com Trafalgar D. Water Law durante o arco de Dressrosa.'
    },
    {
        categoria: 'Haki',
        pergunta: 'Quantos tipos de Haki existem?',
        resposta: 'Existem três tipos de Haki: Haki da Observação, Haki do Armamento e Haki do Rei.'
    },
    {
        categoria: 'História',
        pergunta: 'Quem foi o Rei dos Piratas?',
        resposta: 'O Rei dos Piratas foi Gol D. Roger.'
    }
];

// Chamada da função para criar os novos cartões de One Piece
novasPerguntas.forEach(cartao => {
    criaCartao(cartao.categoria, cartao.pergunta, cartao.resposta);
});
