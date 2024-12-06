// API teste que retorna produtos 

const URL = 'https://dummyjson.com/products'; //Url da API

async function chamarApi() { //função assincrona
    const resp = await fetch(URL); //Pede uma resposta para a URL 
    if (resp.status === 200) { //Se a resposta chegar com sucesso executa
        const obj = await resp.json(); //Com a responta cria um json
        const produtos = obj.products; //Cria os objetos produtos

        // Seleciona o carrossel onde os slides serão adicionados
        const swiperWrapper = document.querySelector('.swiper-wrapper');

        // Limpa o conteúdo existente no carrossel antes de adicionar novos itens
        swiperWrapper.innerHTML = '';

        // Cria um slide para cada produto
        produtos.forEach(produto => {
            const slide = document.createElement('div'); 
            slide.classList.add('swiper-slide', 'presente'); 

            // conteúdo do slide
            slide.innerHTML = `
                <div class="presente-img">
                    <img src="${produto.thumbnail}" alt="${produto.title}" />
                </div>
                <p>${produto.title}</p>
                <a href="#"><button>Comprar</button></a>
            `;

            // Adiciona o slide ao container do swiper
            swiperWrapper.appendChild(slide);
        });

        // Inicializa o Swiper (carrossel) após adicionar todos os slides
        new Swiper('.swiper-container', {
            slidesPerView: 5, //quantidade de cards por vez 
            spaceBetween: 20, //espaçamento entre os cards
            loop: true, //ativa o loop
            navigation: { //configuração dos bottões 
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }
}

chamarApi(); //chama a API