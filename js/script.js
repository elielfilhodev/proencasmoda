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
    const precoProduto = document.getElementById('precoProduto');

    let currentProducts = []; // Armazena os produtos da categoria atualmente visualizada

    // --- DADOS DE EXEMPLO DOS PRODUTOS ---
    // Substitua estes dados pelos seus produtos reais.
    // 'thumbnail' é a imagem para o card no catálogo.
    // 'images' é um array: a primeira é a principal no modal, as outras são para as miniaturas.
    const productsData = {
        feminino: [
            {
                id: 'fem040',
                name: 'Vestido Prisila',
                description: 'Vestido Midi, tecido crepinho, veste até o 44, consultar cores disponíveis. Elegante e sofisticado, ideal para ocasiões especiais.',
                images: [
                    './img/feminino/vestidoprisila.jpg',
                    './img/feminino/vestidoprisila2.jpg',
                    './img/feminino/vestidoprisila3.jpg',
                    './img/feminino/vestidoprisila4.jpg',

                ],
                thumbnail: './img/feminino/vestidoprisila.jpg',
                price: '129,90',
            },
            {
                id: 'fem039',
                name: 'Vestido Midi Sereia',
                description: 'Tecido crepinho, tamanho ÚNICO veste até o 44, consultar cores disponíveis. Elegante e sofisticado, ideal para ocasiões especiais.',
                images: [
                    './img/feminino/vestidomidisereia.jpg',
                    './img/feminino/vestidomidisereia2.jpg',
                    './img/feminino/vestidomidisereia3.jpg',
                    './img/feminino/vestidomidisereia4.jpg',
                    './img/feminino/vestidomidisereia5.jpg',
                    './img/feminino/vestidomidisereia6.jpg',
                    './img/feminino/vestidomidisereia7.jpg',
                    './img/feminino/vestidomidisereia8.jpg',
                    './img/feminino/vestidomidisereia9.jpg',

                ],
                thumbnail: './img/feminino/vestidomidisereia.jpg',
                price: '119,90'
            },
            {
                id: 'fem038',
                name: 'Vestido Lívia',
                description: 'Vestido Midi, tecido linho duna, com forro, veste até o 44, consultar cores disponíveis.',
                images: [
                    './img/feminino/vestidolivia.jpg',
                    './img/feminino/vestidolivia2.jpg',
                    './img/feminino/vestidolivia3.jpg',
                    './img/feminino/vestidolivia4.jpg',
                    './img/feminino/vestidolivia5.jpg',
                    './img/feminino/vestidolivia6.jpg',
                    './img/feminino/vestidolivia7.jpg',
                    './img/feminino/vestidolivia8.jpg',
                    './img/feminino/vestidolivia9.jpg',

                ],
                thumbnail: './img/feminino/vestidolivia.jpg',
                price: '129,90'
            },
            {
                id: 'fem037',
                name: 'Vestido Linho Duna Duas Mangas',
                description: 'Vestido Linho Duna, duas manguinhas, tecido linho com forro e bolso, veste até o 44, consiltar cores disponíveis.',
                images: [
                    './img/feminino/linhodunaduasmangas.jpg',
                    './img/feminino/linhodunaduasmangas2.jpg',
                    './img/feminino/linhodunaduasmangas3.jpg',
                    './img/feminino/linhodunaduasmangas4.jpg',
                    './img/feminino/linhodunaduasmangas5.jpg',
                    './img/feminino/linhodunaduasmangas6.jpg',

                ],
                thumbnail: './img/feminino/linhodunaduasmangas.jpg',
                price: '149,90'
            },
            {
                id: 'fem036',
                name: 'Vestido Lais',
                description: 'Tecido Viscolinho, com forro, tamanho ÚNICO veste até o 44, consultar cores disponíveis. Elegante e sofisticado, ideal para ocasiões especiais.',
                images: [
                    './img/feminino/vestidolais2.jpg',
                    './img/feminino/vestidolais.jpg',
                    './img/feminino/vestidolais3.jpg',
                    './img/feminino/vestidolais5.jpg',

                ],
                thumbnail: './img/feminino/vestidolais2.jpg',
                price: '139,90'
            },
            {
                id: 'fem035',
                name: 'Vestido Milene',
                description: 'Vestido Milene Midi, tecido crepinho com forro, tamanho ÚNICO veste até o 38,40,42,44, consultar cores disponíveis. Elegante e sofisticado, ideal para ocasiões especiais.',
                images: [
                    './img/feminino/vestidomilene.jpg',
                    './img/feminino/vestidomilene2.jpg',
                    './img/feminino/vestidomilene3.jpg',
                    './img/feminino/vestidomilene4.jpg',
                    './img/feminino/vestidomilene5.jpg',
                    './img/feminino/vestidomilene6.jpg',
                    './img/feminino/vestidomilene7.jpg',
                    './img/feminino/vestidomilene8.jpg',
                    './img/feminino/vestidomilene9.jpg',
                    './img/feminino/vestidomilene10.jpg',

                ],
                thumbnail: './img/feminino/vestidomilene.jpg', 
                price: '149,90'
            },
            {
                id: 'fem034',
                name: 'Vestido Maya Linho',
                description: 'Tecido Duna linho, tamanho ÚNICO veste até o 44, consultar cores disponíveis. Elegante e sofisticado, ideal para ocasiões especiais.',
                images: [
                    
                    './img/feminino/vestidomayalinho2.jpg',
                    './img/feminino/vestidomayalinho.jpg',
                    './img/feminino/vestidomayalinho3.jpg',
                    './img/feminino/vestidomayalinho4.jpg',
                    './img/feminino/vestidomayalinho5.jpg',
                    './img/feminino/vestidomayalinho6.jpg',
                    './img/feminino/vestidomayalinho7.jpg',
                    './img/feminino/vestidomayalinho8.jpg',
                    './img/feminino/vestidomayalinho9.jpg',
                ],
                thumbnail: './img/feminino/vestidomayalinho2.jpg',
                price: '149,90'
            },
            {
                id: 'fem033',
                name: 'Vestido Laço Plissado',
                description: 'Tecido crepinho importado, tamanho ÚNICO veste até o 44, consultar cores disponíveis. Elegante e sofisticado, ideal para ocasiões especiais.',
                images: [
                    './img/feminino/vestidolacoplissado.jpg',
                    './img/feminino/vestidolacoplissado2.jpg',
                    './img/feminino/vestidolacoplissado3.jpg',
                ],
                thumbnail: './img/feminino/vestidolacoplissado.jpg',
                price: '139,90'
            },
            {
                id: 'fem032',
                name: 'Vestido Kelly Linho',
                description: 'Tecido Linho duna, com forro, tamanho ÚNICO veste até o 44, consultar cores disponíveis. Elegante e sofisticado, ideal para ocasiões especiais.',
                images: [
                    './img/feminino/vestidokellylinho5.jpg',
                    './img/feminino/vestidokellylinho.jpg',
                    './img/feminino/vestidokellylinho2.jpg',
                    './img/feminino/vestidokellylinho3.jpg',
                    './img/feminino/vestidokellylinho4.jpg',
                    ,
                    './img/feminino/vestidokellylinho6.jpg',
                ],
                thumbnail: './img/feminino/vestidokellylinho5.jpg',
                price: '159,90'
            },
            {
                id: 'fem031',
                name: 'Vestido Floral Curto',
                description: 'Um vestido midi encantador com estampa floral vibrante, perfeito para ocasiões especiais ou um dia ensolarado. Tecido leve, com caimento fluido e confortável, realçando a silhueta de forma elegante.',
                images: [
                    './img/feminino/vestidofloralcurto.jpg',
                ],
                thumbnail: './img/feminino/vestidofloralcurto.jpg',
                price: '99,90'
            },
            {
                id: 'fem030',
                name: 'Vestido Floral',
                description: 'Tecido crepinho com forro, tamanho ÚNICO veste até o 44, consultar cores disponíveis. Elegante e sofisticado, ideal para ocasiões especiais.',
                images: [
                    './img/feminino/vestidofloral.jpg',
                    './img/feminino/vestidofloral2.jpg',
                    './img/feminino/vestidofloral3.jpg',
                    './img/feminino/vestidofloral4.jpg',
                    './img/feminino/vestidofloral5.jpg',
                    './img/feminino/vestidofloral6.jpg',
                    './img/feminino/vestidofloral7.jpg',
                    './img/feminino/vestidofloral8.jpg',
                    './img/feminino/vestidofloral9.jpg',
                    './img/feminino/vestidofloral10.jpg'
                ],
                thumbnail: './img/feminino/vestidofloral.jpg',
                price: '119,90'
            },
            {
                id: 'fem029',
                name: 'Saia Courino',
                description: 'Saia em courino, tamanho ÚNICO veste até o 46, consultar cores disponíveis.',
                images: [
                    './img/feminino/saiacourino.jpg',
                    './img/feminino/saiacourino2.jpg',
                    './img/feminino/saiacourino3.jpg',
                    './img/feminino/saiacourino4.jpg',
                    './img/feminino/saiacourino5.jpg',
                ],
                thumbnail: './img/feminino/saiacourino.jpg',
                price: '119,90'
            },
            {
                id: 'fem028',
                name: 'Cardigan de Lã',
                description: 'Cardigan tecido em lã macia, tamanho ÚNICO veste até o 40,42,44, consultar cores disponíveis. Perfeito para aquecer e complementar looks de outono e inverno.',
                images: [
                    './img/feminino/cardigandela',
                    './img/feminino/cardigandela2.jpg',
                    './img/feminino/cardigandela3.jpg',
                    './img/feminino/cardigandela4.jpg',
                ],
                thumbnail: './img/feminino/cardigandela.jpg',
                price: '69,90'
            },
                {
                id: 'fem027',
                name: 'Vestido Bordado com Brilho',
                description: 'Tecido Viscolinho, com forro, tamanho ÚNICO veste até o 44, consultar cores disponíveis. Elegante e sofisticado, ideal para ocasiões especiais.',
                images: [
                    './img/feminino/vestidobordadobrilho.jpg',
                    './img/feminino/vestidobordadobrilho2.jpg',
                    './img/feminino/vestidobordadobrilho3.jpg',
                    './img/feminino/vestidobordadobrilho4.jpg',
                    './img/feminino/vestidobordadobrilho5.jpg',
                ],
                thumbnail: './img/feminino/vestidobordadobrilho.jpg',
                price: '179,90'
            },
            {
                id: 'fem001',
                name: 'Vestido Tais',
                description: 'Tecido crepinho forrado, tamanho ÚNICO veste até o 44, consultar cores disponíveis. Midi, com mangas bufantes, gola quadrada e detalhe em renda na barra. Elegante feminino e ideal, para quem busca modestia e sofisticação.',
                images: [
                    './img/feminino/vestido-tais (1).jpg',
                    './img/feminino/vestido-tais (2).jpg',
                    './img/feminino/vestido-tais (3).jpg',
                    './img/feminino/vestido-tais (4).jpg',
                    './img/feminino/vestido-tais (5).jpg',
                    './img/feminino/vestido-tais (6).jpg',
                    './img/feminino/vestido-tais (7).jpg'
                ],
                thumbnail: './img/feminino/vestido-tais (1).jpg',
                price: '129,90'
            },
            {
                id: 'fem002',
                name: 'Vestido Curto Plissado',
                description: 'Tecido crepinho forrado, tamanho ÚNICO veste até o 44, consultar cores disponíveis.',
                images: [
                    './img/feminino/vestidocurtoplissado.jpg',
                    './img/feminino/vestidocurtoplissado2.jpg',
                    './img/feminino/vestidocurtoplissado3.jpg'
                ],
                thumbnail: './img/feminino/vestidocurtoplissado.jpg',
                price: '99,90'
            },
            {
                id: 'fem003',
                name: 'Vestido Jéssica',
                description: 'Linho Tamanho ÚNICO, veste até o 44, consultar cores disponíveis. Tecido Linho/Duna com forro e bolso',
                images: [
                    './img/feminino/vestidojessica.jpg',
                    './img/feminino/vestidojessica2.jpg'
                ],
                thumbnail: './img/feminino/vestidojessica.jpg',
                price: '159,90'
            },
            {
                id: 'fem004',
                name: 'Vestido Lese Midi',
                description: 'Lese Midi, tamanho ÚNICO veste até o 44, tecido algodão/lese, com forro.',
                images: [
                    './img/feminino/vestidolesimid.jpg', 
                    './img/feminino/vestidolesimid2.jpg',
                    './img/feminino/vestidolesimid3.jpg',
                    './img/feminino/vestidolesi4.jpg',
                    './img/feminino/vestidolesi5.jpg',
                    './img/feminino/vestidolesi6.jpg'
                ],
                thumbnail: './img/feminino/vestidolesimid.jpg',
                price: '179,90'
            },
            {
                id: 'fem005',
                name: 'Vestido Natalia Tule',
                description: 'Tecido em Tule forrado, tamanho ÚNICO veste até o 44, consultar cores disponíveis.',
                images: [
                    './img/feminino/vestidonataliatule.jpg', 
                    './img/feminino/vestidonataliatule2.jpg',
                ],
                thumbnail: './img/feminino/vestidonataliatule.jpg',
                price: '169,90'
            },
            {
                id: 'fem006',
                name: 'Conjunto Linho',
                description: 'Tecido Linho com forro, tamanho ÚNICO veste até o 44, consultar cores disponíveis. Elegante e sofisticado, ideal para ocasiões especiais.',
                images: [
                    './img/feminino/conjuntolinho.jpg', 
                    './img/feminino/conjuntolinho2.jpg',
                    './img/feminino/conjuntolinho3.jpg',
                ],
                thumbnail: './img/feminino/conjuntolinho.jpg',
                price: '169,90'
            },
            {
                id: 'fem007',
                name: 'Conjunto Sensorial',
                description: 'Saia plissada em tom metálico rosé, com comprimento midi. Uma peça statement para looks modernos e cheios de personalidade, perfeita para festas ou para adicionar um toque glam ao dia a dia.',
                images: [
                    './img/feminino/conjuntosensorial.jpg',
                ],
                thumbnail: './img/feminino/conjuntosensorial.jpg',
                price: 'indisponível'
            },
            {
                id: 'fem008',
                name: 'Crepinho Liso',
                description: 'Tecido crepinho com forro, tamanho ÚNICO veste 38 ao 42, consultar cores disponíveis. Elegante e sofisticado, ideal para ocasiões especiais.',
                images: [
                    './img/feminino/crepinholiso.jpg',
                    './img/feminino/crepinholiso2.jpg',
                    './img/feminino/crepinholiso3.jpg'
                ],
                thumbnail: './img/feminino/crepinholiso.jpg',
                price: '119,90'
            },
            {
                id: 'fem009',
                name: 'Mula Manca Linho',
                description: 'Saia plissada em tom metálico rosé, com comprimento midi. Uma peça statement para looks modernos e cheios de personalidade, perfeita para festas ou para adicionar um toque glam ao dia a dia.',
                images: [
                    './img/feminino/mulamancalinho.jpg',
                    './img/feminino/mulamancalinho2.jpg',
                ],
                thumbnail: './img/feminino/mulamancalinho.jpg',
                price: 'indisponível'
            },
            {
                id: 'fem010',
                name: 'Plissado Executivo',
                description: 'Tecido crepinho, tamanho G e GG, consultar cores disponíveis. Elegante e sofisticado, ideal para ocasiões especiais.',
                images: [
                    './img/feminino/plissadoexecutivo.jpg',
                    './img/feminino/plissadoexecutivo2.jpg',
                    './img/feminino/plissadoexecutivo3.jpg',
                    './img/feminino/plissadoexecutivo4.jpg',
                    './img/feminino/plissadoexecutivo5.jpg'
                ],
                thumbnail: './img/feminino/plissadoexecutivo.jpg',
                price: '129,90'
            },
            {
                id: 'fem011',
                name: 'Vestido Tati Linho Duna',
                description: 'Tecido duna linho, com forro, tamanho ÚNICO veste até o 44, consultar cores disponíveis. Elegante e sofisticado, ideal para ocasiões especiais.',
                images: [
                    './img/feminino/tatilinhoduna2.jpg',
                    './img/feminino/tatilinhoduna.jpg',
                    './img/feminino/tatilinhoduna3.jpg',
                    './img/feminino/tatilinhoduna4.jpg',
                    './img/feminino/tatilinhoduna5.jpg',
                    './img/feminino/tatilinhoduna6.jpg'
                ],
                thumbnail: './img/feminino/tatilinhoduna2.jpg',
                price: '169,90'
            },
            {
                id: 'fem012',
                name: 'Vestido Camila',
                description: 'Tecido Viscolinho, com forro, tamanho ÚNICO veste até o 44, consultar cores disponíveis. Elegante e sofisticado, ideal para ocasiões especiais.',
                images: [
                    './img/feminino/vestidocamila.jpg',
                    './img/feminino/vestidocamila2.jpg',
                    './img/feminino/vestidocamila3.jpg'
                ],
                thumbnail: './img/feminino/vestidocamila.jpg',
                price: '149,90'
            },
            {
                id: 'fem013',
                name: 'Vestido Carol 3 Marias',
                description: 'Vestido Carol 3 marias, manga longa, tecido duna com forro, tamanho ÚNICO veste até o 44, consultar cores disponíveis. Elegante e sofisticado, ideal para ocasiões especiais.',
                images: [
                    './img/feminino/vestidocarol3marias.jpg',
                    './img/feminino/vestidocarol3marias2.jpg',
                    './img/feminino/vestidocarol3marias3.jpg',
                    './img/feminino/vestidocarol3marias4.jpg',
                    './img/feminino/vestidocarol3marias5.jpg',
                    './img/feminino/vestidocarol3marias6.jpg'
                ],
                thumbnail: './img/feminino/vestidocarol3marias.jpg',
                price: '169,90'
            },
            {
                id: 'fem014',
                name: 'Vestido Cris Midi',
                description: 'Vestido midi cris, tecido crepinho importado com forro, botão funcional, tamanho ÚNICO 38 ao 44 consultar cores disponíveis. Elegante e sofisticado, ideal para ocasiões especiais.',
                images: [
                    './img/feminino/vestidocrismidi.jpg',
                    './img/feminino/vestidocrismidi2.jpg',
                    './img/feminino/vestidocrismidi3.jpg',
                    './img/feminino/vestidocrismidi4.jpg',
                    './img/feminino/vestidocrismidi5.jpg',
                ],
                thumbnail: './img/feminino/vestidocrismidi.jpg',
                price: '159,90'
            },
            {
                id: 'fem015',
                name: 'Vestido Curto com Alça',
                description: 'Tecido crepinho sem forro, tamanho ÚNICO veste até o 44, consultar cores disponíveis. Elegante e sofisticado, ideal para ocasiões especiais.',
                images: [
                    './img/feminino/vestidocurtoalca3.jpg',
                    './img/feminino/vestidocurtoalca.jpg',
                    './img/feminino/vestidocurtoalca2.jpg',
                    
                ],
                thumbnail: './img/feminino/vestidocurtoalca3.jpg',
                price: '79,90'
            },
            {
                id: 'fem016',
                name: 'Vestido Denise',
                description: 'Vestido Midi Denise, tecido duna amassado com forro, tamanho ÚNICO veste até o 38,40,42,44 consultar cores disponíveis.',
                images: [
                    './img/feminino/vestidodenise.jpg',
                    './img/feminino/vestidodenise2.jpg',
                    './img/feminino/vestidodenise3.jpg',
                    './img/feminino/vestidodenise4.jpg',
                    './img/feminino/vestidodenise5.jpg',
                    './img/feminino/vestidodenise6.jpg'
                ],
                thumbnail: './img/feminino/vestidodenise.jpg',
                price: '149,90'
            },
            {
                id: 'fem017',
                name: 'Vestido Duna',
                description: 'Vestido Manguinha Duna com forro, tamanho P, M, G e GG, consultar cores disponíveis. Elegante e sofisticado, ideal para ocasiões especiais.',
                images: [
                    './img/feminino/vestidoduna.jpg',
                    './img/feminino/vestidoduna2.jpg',
                    './img/feminino/vestidoduna3.jpg',
                    './img/feminino/vestidoduna4.jpg',
                    './img/feminino/vestidoduna5.jpg'
                ],
                thumbnail: './img/feminino/vestidoduna.jpg',
                price: '169,90'
            },
            {
                id: 'fem018',
                name: 'Vestido Gola Padre',
                description: 'Tecido Linho com forro, tamanho ÚNICO veste do 38 ao 42, consultar cores disponíveis. Elegante e sofisticado, ideal para ocasiões especiais.',
                images: [
                    './img/feminino/vestidogolapadre6.jpg',
                    './img/feminino/vestidogolapadre.jpg',
                    './img/feminino/vestidogolapadre2.jpg',
                    './img/feminino/vestidogolapadre3.jpg',
                    './img/feminino/vestidogolapadre4.jpg',
                    './img/feminino/vestidogolapadre5.jpg',
                    
                ],
                thumbnail: './img/feminino/vestidogolapadre6.jpg',
                price: '169,90'
            },
            {
                id: 'fem019',
                name: 'Vestido Linho Alça',
                description: 'Tecido Duna Linho, com forro e bolso, tamanho ÚNICO veste até o 44, consultar cores disponíveis. Elegante e sofisticado, ideal para ocasiões especiais.',
                images: [
                    './img/feminino/vestidolinhoalca.jpg',
                    './img/feminino/vestidolinhoalca2.jpg',
                    './img/feminino/vestidolinhoalca3.jpg',
                    './img/feminino/vestidolinhoalca4.jpg'
                ],
                thumbnail: './img/feminino/vestidolinhoalca.jpg',
                price: '159,90'
            },
            {
                id: 'fem020',
                name: 'Vestido Maria',
                description: 'Tecido Viscolinho, importado com forro, tamanho ÚNICO veste até o 44, consultar cores disponíveis. Elegante e sofisticado, ideal para ocasiões especiais.',
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
                thumbnail: './img/feminino/vestidomaria.jpg',
                price: '159,90'
            },
            {
                id: 'fem021',
                name: 'Vestido Princesa',
                description: 'Tecido Linho com forro, tamanho ÚNICO veste até o 44, consultar cores disponíveis. Elegante e sofisticado, ideal para ocasiões especiais.',
                images: [
                    './img/feminino/vestidoprincesa.jpg',
                    './img/feminino/vestidoprincesa2.jpg',
                    './img/feminino/vestidoprincesa3.jpg',
                    './img/feminino/vestidoprincesa4.jpg',
                    './img/feminino/vestidoprincesa5.jpg',
                    './img/feminino/vestidoprincesa6.jpg'
                ],
                thumbnail: './img/feminino/vestidoprincesa.jpg',
                price: '179,90'
            },
            {
                id: 'fem022',
                name: 'Vestido Tule Midi',
                description: 'Vestido tule midi, com ótimo forro, tamanho ÚNICO veste até o 44, consultar cores disponíveis. Elegante e sofisticado, ideal para ocasiões especiais.',
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
                thumbnail: './img/feminino/vestidotulemidi.jpg',
                price: '139,90'
            },
            {
                id: 'fem023',
                name: 'Vestido Camila Bordado',
                description: 'Tamanho M, 38, 40 & G 42, 44. Consultar cores disponíveis.',
                images: [
                    './img/feminino/vestidocamilabordado.jpg',
                ],
                thumbnail: './img/feminino/vestidocamilabordado.jpg',
                price: '199,90'
            },
            {
                id: 'fem024',
                name: 'Vestido Elisa',
                description: 'Vestido Elisa com cinto, tecido duna com forro, tamanho ÚNICO veste até o 44, consultar cores disponíveis.',
                images: [
                    './img/feminino/vestidoelisa.jpg',
                    './img/feminino/vestidoelisa2.jpg',
                    './img/feminino/vestidoelisa3.jpg',
                ],
                thumbnail: './img/feminino/vestidoelisa.jpg',
                price: '169,90'
            },
            {
                id: 'fem025',
                name: 'Vestido Nanda',
                description: 'Vestido Duna com forro, tamanho ÚNICO veste até o 44, consultar cores disponíveis.',
                images: [
                    './img/feminino/vestidonanda.jpg',
                    './img/feminino/vestidonanda2.jpg',
                    './img/feminino/vestidonanda3.jpg',
                    './img/feminino/vestidonanda4.jpg',
                    './img/feminino/vestidonanda5.jpg',
                    './img/feminino/vestidonanda6.jpg',
                    './img/feminino/vestidonanda7.jpg',
                    './img/feminino/vestidonanda8.jpg'
                ],
                thumbnail: './img/feminino/vestidonanda.jpg',
                price: '169,90'
            },
            {
                id: 'fem026',
                name: 'Vestido Plissado com Laço',
                description: 'Vestido Plissado laço, tamanho ÚNICO veste até o 44, consultar cores disponíveis.',
                images: [
                    './img/feminino/vestidoplissadolaco.jpg',
                    './img/feminino/vestidoplissadolaco2.jpg',
                    './img/feminino/vestidoplissadolaco3.jpg',
                    './img/feminino/vestidoplissadolaco4.jpg',
                    './img/feminino/vestidoplissadolaco5.jpg',
                    './img/feminino/vestidoplissadolaco6.jpg',
                    './img/feminino/vestidoplissadolaco7.jpg',
                    './img/feminino/vestidoplissadolaco8.jpg',
                    './img/feminino/vestidoplissadolaco9.jpg'
                ],
                thumbnail: './img/feminino/vestidoplissadolaco.jpg',
                price: '149,90'
            },
        ],





            feminino_plus: [ // NOVA COLEÇÃO MODA PLUS
            {
                id: 'fplus001',
                name: 'Macacão Pantalona Plus Size Elegante',
                description: 'Macacão pantalona plus size que combina conforto e elegância. Tecido fluido com excelente caimento, decote V transpassado e cinto para marcar a cintura. Perfeito para eventos ou um look sofisticado.',
                images: [
                    './img/feminino_plus/chemiseplus.jpg',
                    './img/feminino_plus/chemiseplus2.jpg',
                ],
                thumbnail: './img/feminino_plus/chemiseplus.jpg', // Substitua por sua imagem
                price: '189,90', // Exemplo de preço
            },
            {
                id: 'fplus002',
                name: 'Vestido Chemise Plus Size Estampado',
                description: 'Vestido chemise plus size com estampa moderna e alegre. Modelagem soltinha, mangas 3/4 e fechamento por botões frontais. Versátil para diversas ocasiões, do casual ao mais arrumado.',
                images: [
                    './img/feminino_plus/dunaplusmangalonga.jpg',
                    './img/feminino_plus/dunaplusmangalonga2.jpg'
                ],
                thumbnail: './img/feminino_plus/dunaplusmangalonga.jpg', 
                price: '159,90',
            },
            {
                id: 'fplus003',
                name: 'Blusa Ciganinha Plus Size com Renda',
                description: 'Blusa modelo ciganinha plus size, com ombros à mostra e detalhes delicados em renda. Tecido leve e fresco, ideal para os dias mais quentes, compondo looks românticos e femininos.',
                images: [
                    './img/feminino_plus/plusalcaduna.jpg',
                    './img/feminino_plus/plusalcaduna2.jpg',
                    './img/feminino_plus/plusalcaduna3.jpg'
                ],
                thumbnail: './img/feminino_plus/plusalcaduna.jpg',
                price: '89,90',
            },
            {
                id: 'fplus004',
                name: 'Blusa Ciganinha Plus Size com Renda',
                description: 'Blusa modelo ciganinha plus size, com ombros à mostra e detalhes delicados em renda. Tecido leve e fresco, ideal para os dias mais quentes, compondo looks românticos e femininos.',
                images: [
                    './img/feminino_plus/plusbordado.jpg',
                    './img/feminino_plus/plusbordado2.jpg'
                ],
                thumbnail: './img/feminino_plus/plusbordado.jpg',
                price: '89,90',
            },
            {
                id: 'fplus005',
                name: 'Blusa Ciganinha Plus Size com Renda',
                description: 'Blusa modelo ciganinha plus size, com ombros à mostra e detalhes delicados em renda. Tecido leve e fresco, ideal para os dias mais quentes, compondo looks românticos e femininos.',
                images: [
                    './img/feminino_plus/vestidofolhaplus.jpg',
                ],
                thumbnail: './img/feminino_plus/vestidofolhaplus.jpg',
                price: '89,90',
            },
            {
                id: 'fplus006',
                name: 'Blusa Ciganinha Plus Size com Renda',
                description: 'Blusa modelo ciganinha plus size, com ombros à mostra e detalhes delicados em renda. Tecido leve e fresco, ideal para os dias mais quentes, compondo looks românticos e femininos.',
                images: [
                    './img/feminino_plus/vestidolinhoplus.jpg',
                    './img/feminino_plus/vestidolinhoplus2.jpg',
                    './img/feminino_plus/vestidolinhoplus3.jpg',
                    './img/feminino_plus/vestidolinhoplus4.jpg'
                ],
                thumbnail: './img/feminino_plus/vestidolinhoplus.jpg',
                price: '89,90',
            },
            {
                id: 'fplus007',
                name: 'Blusa Ciganinha Plus Size com Renda',
                description: 'Blusa modelo ciganinha plus size, com ombros à mostra e detalhes delicados em renda. Tecido leve e fresco, ideal para os dias mais quentes, compondo looks românticos e femininos.',
                images: [
                    './img/feminino_plus/vestidoplissadoplus.jpg',
                    './img/feminino_plus/vestidoplissadoplus2.jpg',
                    './img/feminino_plus/vestidoplissadoplus3.jpg',
                    './img/feminino_plus/vestidoplissadoplus4.jpg',
                    './img/feminino_plus/vestidoplissadoplus5.jpg'
                ],
                thumbnail: './img/feminino_plus/vestidoplissadoplus.jpg',
                price: '89,90',
            },
            {
                id: 'fplus008',
                name: 'Blusa Ciganinha Plus Size com Renda',
                description: 'Blusa modelo ciganinha plus size, com ombros à mostra e detalhes delicados em renda. Tecido leve e fresco, ideal para os dias mais quentes, compondo looks românticos e femininos.',
                images: [
                    './img/feminino_plus/vestidoplusgabi.jpg',
                    './img/feminino_plus/vestidoplusgabi2.jpg',
                    './img/feminino_plus/vestidoplusgabi3.jpg',
                    './img/feminino_plus/vestidoplusgabi4.jpg',
                    './img/feminino_plus/vestidoplusgabi5.jpg',
                    './img/feminino_plus/vestidoplusgabi6.jpg',
                    './img/feminino_plus/vestidoplusgabi7.jpg'
                ],
                thumbnail: './img/feminino_plus/vestidoplusgabi.jpg',
                price: '89,90',
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
        precoProduto.textContent = `Valor: R$ ${product.price}`; // Exemplo de preço, pode ser ajustado conforme necessário

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