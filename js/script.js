document.addEventListener('DOMContentLoaded', () => {
    // Seletores de Elementos do DOM
    const categorySection = document.getElementById('category-selection');
    const productCatalogSection = document.getElementById('product-catalog');
    const categoryCards = document.querySelectorAll('.category-card');
    const productGridContainer = document.getElementById('product-grid-container');
    const backToCategoriesButton = document.getElementById('back-to-categories');
    const catalogTitle = document.getElementById('catalog-title');

    // Elementos do Modal
    const productModal = document.getElementById('productModal');
    const closeModalButton = productModal.querySelector('.close-button');
    const modalMainImage = document.getElementById('modalMainImage');
    const modalThumbnailsContainer = document.getElementById('modalThumbnails');
    const modalProductName = document.getElementById('modalProductName');
    const modalProductDescription = document.getElementById('modalProductDescription');

    let currentProducts = []; // Armazena os produtos da categoria atualmente visualizada

    // --- DADOS DE EXEMPLO DOS PRODUTOS ---
    // Substitua estes dados pelos seus produtos reais.
    // 'thumbnail' é a imagem para o card no catálogo.
    // 'images' é um array: a primeira é a principal no modal, as outras são para as miniaturas.
    const productsData = {
        feminino: [
            {
                id: 'fem001',
                name: 'Vestido Midi Floral Primaveril',
                description: 'Um vestido midi encantador com estampa floral vibrante, perfeito para ocasiões especiais ou um dia ensolarado. Tecido leve, com caimento fluido e confortável, realçando a silhueta de forma elegante.',
                images: [
                    './img/feminino/vestido-tais (1).jpg', // Imagem principal (exemplo maior)
                    './img/feminino/vestido-tais (2).jpg',
                    './img/feminino/vestido-tais (3).jpg',
                    './img/feminino/vestido-tais (4).jpg',
                    './img/feminino/vestido-tais (5).jpg',
                    './img/feminino/vestido-tais (6).jpg',
                    './img/feminino/vestido-tais (7).jpg'
                ],
                thumbnail: './img/feminino/vestido-tais (1).jpg' // Imagem para o card no catálogo
            },
            {
                id: 'fem002',
                name: 'Blusa de Seda Pura com Detalhe em Laço',
                description: 'Blusa sofisticada confeccionada em seda pura, proporcionando um toque suave e luxuoso. Possui um elegante detalhe de laço no pescoço, ideal para compor looks de trabalho refinados ou para eventos formais.',
                images: [
                    './img/feminino/vestidocurtoplissado.jpg',
                    './img/feminino/vestidocurtoplissado2.jpg',
                    './img/feminino/vestidocurtoplissado3.jpg'
                ],
                thumbnail: './img/feminino/vestidocurtoplissado.jpg'
            },
            {
                id: 'fem003',
                name: 'Calça Jeans Skinny Premium Destroyed',
                description: 'Calça jeans skinny com lavagem moderna e detalhes destroyed sutis, conferindo um visual contemporâneo. Tecido com alta elasticidade para máximo conforto e modelagem que valoriza o corpo.',
                images: [
                    './img/feminino/vestidojessica.jpg', // Imagem principal (exemplo maior)
                    './img/feminino/vestidojessica2.jpg'
                ],
                thumbnail: './img/feminino/vestidojessica.jpg'
            },
            {
                id: 'fem004',
                name: 'Saia Plissada Midi Metálica Rosé',
                description: 'Saia plissada em tom metálico rosé, com comprimento midi. Uma peça statement para looks modernos e cheios de personalidade, perfeita para festas ou para adicionar um toque glam ao dia a dia.',
                images: [
                    './img/feminino/vestidolesimid.jpg', 
                    './img/feminino/vestidolesimid2.jpg',
                    './img/feminino/vestidolesimid3.jpg',
                    './img/feminino/vestidolesi4.jpg',
                    './img/feminino/vestidolesi5.jpg',
                    './img/feminino/vestidolesi6.jpg'
                ],
                thumbnail: './img/feminino/vestidolesimid.jpg'
            },
            {
                id: 'fem005',
                name: 'Saia Plissada Midi Metálica Rosé',
                description: 'Saia plissada em tom metálico rosé, com comprimento midi. Uma peça statement para looks modernos e cheios de personalidade, perfeita para festas ou para adicionar um toque glam ao dia a dia.',
                images: [
                    './img/feminino/vestidonataliatule.jpg', 
                    './img/feminino/vestidonataliatule2.jpg',
                ],
                thumbnail: './img/feminino/vestidonataliatule.jpg'
            },
            {
                id: 'fem006',
                name: 'Saia Plissada Midi Metálica Rosé',
                description: 'Saia plissada em tom metálico rosé, com comprimento midi. Uma peça statement para looks modernos e cheios de personalidade, perfeita para festas ou para adicionar um toque glam ao dia a dia.',
                images: [
                    './img/feminino/conjuntolinho.jpg', 
                    './img/feminino/conjuntolinho2.jpg',
                    './img/feminino/conjuntolinho3.jpg',
                ],
                thumbnail: './img/feminino/conjuntolinho.jpg'
            },
            {
                id: 'fem007',
                name: 'Saia Plissada Midi Metálica Rosé',
                description: 'Saia plissada em tom metálico rosé, com comprimento midi. Uma peça statement para looks modernos e cheios de personalidade, perfeita para festas ou para adicionar um toque glam ao dia a dia.',
                images: [
                    './img/feminino/conjuntosensorial.jpg',

                ],
                thumbnail: './img/feminino/conjuntosensorial.jpg'
            },
            {
                id: 'fem008',
                name: 'Saia Plissada Midi Metálica Rosé',
                description: 'Saia plissada em tom metálico rosé, com comprimento midi. Uma peça statement para looks modernos e cheios de personalidade, perfeita para festas ou para adicionar um toque glam ao dia a dia.',
                images: [
                    './img/feminino/crepinholiso.jpg',
                    './img/feminino/crepinholiso2.jpg',
                    './img/feminino/crepinholiso3.jpg'
                ],
                thumbnail: './img/feminino/crepinholiso.jpg'
            },
            {
                id: 'fem009',
                name: 'Saia Plissada Midi Metálica Rosé',
                description: 'Saia plissada em tom metálico rosé, com comprimento midi. Uma peça statement para looks modernos e cheios de personalidade, perfeita para festas ou para adicionar um toque glam ao dia a dia.',
                images: [
                    './img/feminino/mulamancalinho.jpg',
                    './img/feminino/mulamancalinho2.jpg',
                ],
                thumbnail: './img/feminino/mulamancalinho.jpg'
            },
            {
                id: 'fem010',
                name: 'Saia Plissada Midi Metálica Rosé',
                description: 'Saia plissada em tom metálico rosé, com comprimento midi. Uma peça statement para looks modernos e cheios de personalidade, perfeita para festas ou para adicionar um toque glam ao dia a dia.',
                images: [
                    './img/feminino/plissadoexecutivo.jpg',
                    './img/feminino/plissadoexecutivo2.jpg',
                    './img/feminino/plissadoexecutivo3.jpg',
                    './img/feminino/plissadoexecutivo4.jpg',
                    './img/feminino/plissadoexecutivo5.jpg'
                ],
                thumbnail: './img/feminino/plissadoexecutivo.jpg'
            },
            {
                id: 'fem011',
                name: 'Saia Plissada Midi Metálica Rosé',
                description: 'Saia plissada em tom metálico rosé, com comprimento midi. Uma peça statement para looks modernos e cheios de personalidade, perfeita para festas ou para adicionar um toque glam ao dia a dia.',
                images: [
                    './img/feminino/tatilinhoduna.jpg',
                    './img/feminino/tatilinhoduna2.jpg',
                    './img/feminino/tatilinhoduna3.jpg',
                    './img/feminino/tatilinhoduna4.jpg',
                    './img/feminino/tatilinhoduna5.jpg',
                    './img/feminino/tatilinhoduna6.jpg'
                ],
                thumbnail: './img/feminino/tatilinhoduna.jpg'
            },
            {
                id: 'fem012',
                name: 'Saia Plissada Midi Metálica Rosé',
                description: 'Saia plissada em tom metálico rosé, com comprimento midi. Uma peça statement para looks modernos e cheios de personalidade, perfeita para festas ou para adicionar um toque glam ao dia a dia.',
                images: [
                    './img/feminino/vestidocamila.jpg',
                    './img/feminino/vestidocamila2.jpg',
                    './img/feminino/vestidocamila3.jpg'
                ],
                thumbnail: './img/feminino/vestidocamila.jpg'
            },
            {
                id: 'fem013',
                name: 'Saia Plissada Midi Metálica Rosé',
                description: 'Saia plissada em tom metálico rosé, com comprimento midi. Uma peça statement para looks modernos e cheios de personalidade, perfeita para festas ou para adicionar um toque glam ao dia a dia.',
                images: [
                    './img/feminino/vestidocarol3marias.jpg',
                    './img/feminino/vestidocarol3marias2.jpg',
                    './img/feminino/vestidocarol3marias3.jpg',
                    './img/feminino/vestidocarol3marias4.jpg',
                    './img/feminino/vestidocarol3marias5.jpg',
                    './img/feminino/vestidocarol3marias6.jpg'
                ],
                thumbnail: './img/feminino/vestidocarol3marias.jpg'
            },
            {
                id: 'fem014',
                name: 'Saia Plissada Midi Metálica Rosé',
                description: 'Saia plissada em tom metálico rosé, com comprimento midi. Uma peça statement para looks modernos e cheios de personalidade, perfeita para festas ou para adicionar um toque glam ao dia a dia.',
                images: [
                    './img/feminino/vestidocrismidi.jpg',
                    './img/feminino/vestidocrismidi2.jpg',
                    './img/feminino/vestidocrismidi3.jpg',
                    './img/feminino/vestidocrismidi4.jpg',
                    './img/feminino/vestidocrismidi5.jpg',
                ],
                thumbnail: './img/feminino/vestidocrismidi.jpg'
            },
            {
                id: 'fem015',
                name: 'Saia Plissada Midi Metálica Rosé',
                description: 'Saia plissada em tom metálico rosé, com comprimento midi. Uma peça statement para looks modernos e cheios de personalidade, perfeita para festas ou para adicionar um toque glam ao dia a dia.',
                images: [
                    './img/feminino/vestidocurtoalca.jpg',
                    './img/feminino/vestidocurtoalca2.jpg',
                    './img/feminino/vestidocurtoalca3.jpg',
                ],
                thumbnail: './img/feminino/vestidocurtoalca.jpg'
            },
            {
                id: 'fem016',
                name: 'Saia Plissada Midi Metálica Rosé',
                description: 'Saia plissada em tom metálico rosé, com comprimento midi. Uma peça statement para looks modernos e cheios de personalidade, perfeita para festas ou para adicionar um toque glam ao dia a dia.',
                images: [
                    './img/feminino/vestidodenise.jpg',
                    './img/feminino/vestidodenise2.jpg',
                    './img/feminino/vestidodenise3.jpg',
                    './img/feminino/vestidodenise4.jpg',
                    './img/feminino/vestidodenise5.jpg',
                    './img/feminino/vestidodenise6.jpg'
                ],
                thumbnail: './img/feminino/vestidodenise.jpg'
            },
            {
                id: 'fem017',
                name: 'Saia Plissada Midi Metálica Rosé',
                description: 'Saia plissada em tom metálico rosé, com comprimento midi. Uma peça statement para looks modernos e cheios de personalidade, perfeita para festas ou para adicionar um toque glam ao dia a dia.',
                images: [
                    './img/feminino/vestidoduna.jpg',
                    './img/feminino/vestidoduna2.jpg',
                    './img/feminino/vestidoduna3.jpg',
                    './img/feminino/vestidoduna4.jpg',
                    './img/feminino/vestidoduna5.jpg'
                ],
                thumbnail: './img/feminino/vestidoduna.jpg'
            },
            {
                id: 'fem018',
                name: 'Saia Plissada Midi Metálica Rosé',
                description: 'Saia plissada em tom metálico rosé, com comprimento midi. Uma peça statement para looks modernos e cheios de personalidade, perfeita para festas ou para adicionar um toque glam ao dia a dia.',
                images: [
                    './img/feminino/vestidogolapadre.jpg',
                    './img/feminino/vestidogolapadre2.jpg',
                    './img/feminino/vestidogolapadre3.jpg',
                    './img/feminino/vestidogolapadre4.jpg',
                    './img/feminino/vestidogolapadre5.jpg',
                    './img/feminino/vestidogolapadre6.jpg'
                ],
                thumbnail: './img/feminino/vestidogolapadre.jpg'
            },
            {
                id: 'fem019',
                name: 'Saia Plissada Midi Metálica Rosé',
                description: 'Saia plissada em tom metálico rosé, com comprimento midi. Uma peça statement para looks modernos e cheios de personalidade, perfeita para festas ou para adicionar um toque glam ao dia a dia.',
                images: [
                    './img/feminino/vestidolinhoalca.jpg',
                    './img/feminino/vestidolinhoalca2.jpg',
                    './img/feminino/vestidolinhoalca3.jpg',
                    './img/feminino/vestidolinhoalca4.jpg'
                ],
                thumbnail: './img/feminino/vestidolinhoalca.jpg'
            },
            {
                id: 'fem020',
                name: 'Saia Plissada Midi Metálica Rosé',
                description: 'Saia plissada em tom metálico rosé, com comprimento midi. Uma peça statement para looks modernos e cheios de personalidade, perfeita para festas ou para adicionar um toque glam ao dia a dia.',
                images: [
                    './img/feminino/vestidomaria.jpg',
                    './img/feminino/vestidomaria2.jpg',
                    './img/feminino/vestidomaria3.jpg',
                    './img/feminino/vestidomaria4.jpg',
                    './img/feminino/vestidomaria5.jpg',
                    './img/feminino/vestidomaria6.jpg',
                    './img/feminino/vestidomaria7.jpg',
                    './img/feminino/vestidomaria8.jpg'
                ],
                thumbnail: './img/feminino/vestidomaria.jpg'
            },
            {
                id: 'fem021',
                name: 'Saia Plissada Midi Metálica Rosé',
                description: 'Saia plissada em tom metálico rosé, com comprimento midi. Uma peça statement para looks modernos e cheios de personalidade, perfeita para festas ou para adicionar um toque glam ao dia a dia.',
                images: [
                    './img/feminino/vestidoprincesa.jpg',
                    './img/feminino/vestidoprincesa2.jpg',
                    './img/feminino/vestidoprincesa3.jpg',
                    './img/feminino/vestidoprincesa4.jpg',
                    './img/feminino/vestidoprincesa5.jpg',
                    './img/feminino/vestidoprincesa6.jpg'
                ],
                thumbnail: './img/feminino/vestidoprincesa.jpg'
            },
            {
                id: 'fem022',
                name: 'Saia Plissada Midi Metálica Rosé',
                description: 'Saia plissada em tom metálico rosé, com comprimento midi. Uma peça statement para looks modernos e cheios de personalidade, perfeita para festas ou para adicionar um toque glam ao dia a dia.',
                images: [
                    './img/feminino/vestidotulemidi.jpg',
                    './img/feminino/vestidotulemidi2.jpg',
                    './img/feminino/vestidotulemidi3.jpg',
                    './img/feminino/vestidotulemidi4.jpg',
                    './img/feminino/vestidotulemidi5.jpg',
                    './img/feminino/vestidotulemidi6.jpg',
                    './img/feminino/vestidotulemidi7.jpg',
                    './img/feminino/vestidotulemidi8.jpg',
                    './img/feminino/vestidotulemidi9.jpg'
                ],
                thumbnail: './img/feminino/vestidotulemidi.jpg'
            },
        ],
        masculino: [
            {
                id: 'masc001',
                name: 'Camisa Polo Piquet Premium',
                description: 'Camisa polo clássica confeccionada em algodão piquet de alta qualidade, oferecendo conforto e durabilidade. Modelagem slim fit para um visual moderno e elegante.',
                images: [
                    'https://placehold.co/650x800/A9A9A9/333?text=Polo+Premium+Original', 
                    'https://placehold.co/100x125/A9A9A9/333?text=PP+Thumb+1',
                    'https://placehold.co/100x125/A9A9A9/333?text=PP+Thumb+2'
                ],
                thumbnail: 'https://placehold.co/400x550/A9A9A9/333?text=Polo+Premium'
            },
            {
                id: 'masc002',
                name: 'Bermuda Chino Casual Confort',
                description: 'Bermuda chino casual com corte moderno, feita em sarja de algodão com elastano para maior conforto e liberdade de movimento. Perfeita para compor looks despojados e estilosos.',
                images: [
                    'https://placehold.co/800x600/BC8F8F/333?text=Bermuda+Chino+Original', // Exemplo de imagem horizontal
                    'https://placehold.co/125x100/BC8F8F/333?text=BC+Thumb+1', // Thumbnail correspondente
                ],
                thumbnail: 'https://placehold.co/400x550/BC8F8F/333?text=Bermuda+Chino'
            }
        ]
    };

    // --- FUNÇÕES AUXILIARES ---

    /**
     * Mostra uma seção específica e esconde as outras.
     * @param {HTMLElement} sectionToShow - A seção a ser exibida.
     */
    function showSection(sectionToShow) {
        // Esconde todas as seções
        categorySection.classList.remove('active-section');
        productCatalogSection.classList.remove('active-section');
        
        // Mostra a seção desejada
        sectionToShow.classList.add('active-section');
        
        // Rola a página para o topo suavemente
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    /**
     * Exibe os produtos de uma categoria específica no grid.
     * @param {string} categoryKey - A chave da categoria (ex: 'feminino').
     */
    function displayProducts(categoryKey) {
        productGridContainer.innerHTML = ''; // Limpa produtos anteriores
        currentProducts = productsData[categoryKey] || [];
        
        const categoryName = categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1);
        catalogTitle.textContent = `Coleção ${categoryName}`;

        if (currentProducts.length === 0) {
            productGridContainer.innerHTML = '<p class="no-products">Oops! Nenhum produto encontrado nesta coleção no momento.</p>';
            return;
        }

        currentProducts.forEach((product, index) => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.dataset.productId = product.id;

            productCard.innerHTML = `
                <img src="${product.thumbnail}" alt="${product.name}" class="product-image" loading="lazy">
                <div class="product-info">
                    <h4>${product.name}</h4>
                </div>
            `;
            // Adiciona a classe de animação com um pequeno delay para efeito cascata
            setTimeout(() => {
                productCard.classList.add('fade-in');
            }, index * 100); // Delay de 100ms entre cada card

            productCard.addEventListener('click', () => openProductModal(product.id));
            productGridContainer.appendChild(productCard);
        });
    }

    /**
     * Abre o modal com os detalhes de um produto específico.
     * @param {string} productId - O ID do produto a ser exibido.
     */
    function openProductModal(productId) {
        const product = currentProducts.find(p => p.id === productId);
        if (!product) {
            console.error("Produto não encontrado:", productId);
            return;
        }

        modalMainImage.src = product.images[0];
        modalMainImage.alt = `Imagem principal de ${product.name}`;
        modalProductName.textContent = product.name;
        modalProductDescription.textContent = product.description;

        modalThumbnailsContainer.innerHTML = ''; // Limpa thumbnails anteriores
        product.images.forEach((imgSrc, index) => {
            const thumb = document.createElement('img');
            thumb.src = imgSrc; // Idealmente, estas seriam URLs de imagens menores (thumbnails)
            thumb.alt = `Miniatura ${index + 1} de ${product.name}`;
            thumb.classList.add('thumbnail-item');
            if (index === 0) {
                thumb.classList.add('active-thumbnail');
            }
            thumb.addEventListener('click', () => {
                modalMainImage.src = imgSrc; // Troca a imagem principal
                modalMainImage.alt = `Imagem ${index + 1} de ${product.name}`;
                // Atualiza a miniatura ativa
                modalThumbnailsContainer.querySelector('.active-thumbnail')?.classList.remove('active-thumbnail');
                thumb.classList.add('active-thumbnail');
            });
            modalThumbnailsContainer.appendChild(thumb);
        });

        productModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Impede scroll do body
    }

    /**
     * Fecha o modal de visualização do produto.
     */
    function closeProductModal() {
        productModal.classList.remove('active');
        document.body.style.overflow = ''; // Restaura scroll do body
    }

    // --- EVENT LISTENERS ---

    // Event listener para os cards de categoria
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const categoryKey = card.dataset.category;
            if (productsData[categoryKey]) {
                displayProducts(categoryKey);
                showSection(productCatalogSection);
            } else {
                // Caso a categoria não exista nos dados (improvável com HTML fixo, mas bom ter)
                alert('Coleção não encontrada ou indisponível no momento.');
            }
        });
    });

    // Event listener para o botão "Voltar às Coleções"
    backToCategoriesButton.addEventListener('click', () => {
        showSection(categorySection);
    });

    // Event listener para o botão de fechar o modal
    closeModalButton.addEventListener('click', closeProductModal);

    // Event listener para fechar o modal clicando fora do seu conteúdo
    productModal.addEventListener('click', (event) => {
        if (event.target === productModal) { // Checa se o clique foi no fundo escuro do modal
            closeProductModal();
        }
    });

    // Event listener para fechar o modal com a tecla "Escape"
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && productModal.classList.contains('active')) {
            closeProductModal();
        }
    });

    // Inicia a página mostrando a seção de categorias
    showSection(categorySection);
});