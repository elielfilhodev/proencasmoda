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
    const orderButton = document.getElementById('orderButton');

    let currentProducts = []; // Armazena os produtos da categoria atualmente visualizada

    // --- DADOS DE EXEMPLO DOS PRODUTOS ---
    const productsData = {
        feminino_vestidos: [
            {
                id: 'fem0107',
                name: 'Vestido Viscomida Bordado',
                description: 'Tecido duna amassado com forro, tamanho único, veste até o 44, verificar cores disponíveis.',
                    images: [
                        './img/feminino/vestido-viscomida-bordado.jpg',
                        './img/feminino/vestido-viscomida-bordado2.jpg',
                        './img/feminino/vestido-viscomida-bordado3.jpg',
                        './img/feminino/vestido-viscomida-bordado4.jpg',
                        './img/feminino/vestido-viscomida-bordado5.jpg',
                ],
                thumbnail: './img/feminino/vestido-viscomida-bordado.jpg',
                price: '139,90',
            },
            {
                id: 'fem0106',
                name: 'Vestido Malu',
                description: 'Tecido duna amassado com forro, tamanho único, veste até o 44, verificar cores disponíveis.',
                images: [
                    './img/feminino/vestido-malu.jpg',
                    './img/feminino/vestido-malu2.jpg',
                    './img/feminino/vestido-malu3.jpg',
                    './img/feminino/vestido-malu4.jpg',
                    './img/feminino/vestido-malu5.jpg',
                ],
                thumbnail: './img/feminino/vestido-malu.jpg',
                price: '139,90',
            },
            {
                id: 'fem0106',
                name: 'Vestido Malu',
                description: 'Tecido duna amassado com forro, tamanho único, veste até o 44, verificar cores disponíveis.',
                images: [
                    './img/feminino/vestido-malu.jpg',
                    './img/feminino/vestido-malu2.jpg',
                    './img/feminino/vestido-malu3.jpg',
                    './img/feminino/vestido-malu4.jpg',
                    './img/feminino/vestido-malu5.jpg',
                ],
                thumbnail: './img/feminino/vestido-malu.jpg',
                price: '139,90',
            },
            {
                id: 'fem0105',
                name: 'Vestido Aline',
                description: 'Tecido duna amassado com forro, tamanho único, veste até o 44, verificar cores disponíveis.',
                images: [
                    './img/feminino/vestido-aline.jpg',
                ],
                thumbnail: './img/feminino/vestido-aline.jpg',
                price: '139,90',
            },
            {
                id: 'fem0104',
                name: 'Vestido Lara Em Lese',
                description: 'Tecido duna amassado com forro, tamanho único, veste até o 44, verificar cores disponíveis.',
                images: [
                    './img/feminino/vestido-lara-lese.jpg',
                ],
                thumbnail: './img/feminino/vestido-lara-lese.jpg',
                price: '139,90',
            },
            {
                id: 'fem0103',
                name: 'Vestido Mosaico',
                description: 'Tecido duna amassado com forro, tamanho único, veste até o 44, verificar cores disponíveis.',
                images: [
                    './img/feminino/vestido-mosaico.jpg',
                ],
                thumbnail: './img/feminino/vestido-mosaico.jpg',
                price: '139,90',
            },
            {
                id: 'fem0102',
                name: 'Vestido Lese Novo',
                description: 'Tecido duna amassado com forro, tamanho único, veste até o 44, verificar cores disponíveis.',
                images: [
                    './img/feminino/vestido-less-novo.jpg',
                    './img/feminino/vestido-less-novo2.jpg',
                    './img/feminino/vestido-less-novo3.jpg',
                    './img/feminino/vestido-less-novo4.jpg',
                    './img/feminino/vestido-less-novo5.jpg',
                ],
                thumbnail: './img/feminino/vestido-less-novo.jpg',
                price: '139,90',
            },
            {
                id: 'fem0101',
                name: 'Vestido Luana Manga Longa',
                description: 'Tecido duna amassado com forro, tamanho único, veste até o 44, verificar cores disponíveis.',
                images: [
                    './img/feminino/vestido-luana-manga-longa.jpg',
                    './img/feminino/vestido-luana-manga-longa2.jpg',
                    './img/feminino/vestido-luana-manga-longa3.jpg',
                    './img/feminino/vestido-luana-manga-longa4.jpg',
                ],
                thumbnail: './img/feminino/vestido-luana-manga-longa.jpg',
                price: '139,90',
            },
            {
                id: 'fem0100',
                name: 'Vestido Sensorial',
                description: 'Tecido duna amassado com forro, tamanho único, veste até o 44, verificar cores disponíveis.',
                images: [
                    './img/feminino/vestido-sensorial.jpg',
                    './img/feminino/vestido-sensorial2.jpg',
                    './img/feminino/vestido-sensorial3.jpg',
                    './img/feminino/vestido-sensorial4.jpg',
                    './img/feminino/vestido-sensorial5.jpg',
                    './img/feminino/vestido-sensorial6.jpg',
                    './img/feminino/vestido-sensorial7.jpg',
                ],
                thumbnail: './img/feminino/vestido-sensorial.jpg',
                price: '139,90',
            },
            {
                id: 'fem099',
                name: 'Vestido Thema',
                description: 'Tecido duna amassado com forro, tamanho único, veste até o 44, verificar cores disponíveis.',
                images: [
                    './img/feminino/vestido-thema.jpg',
                    './img/feminino/vestido-thema2.jpg',
                    './img/feminino/vestido-thema3.jpg',
                    './img/feminino/vestido-thema4.jpg',
                    './img/feminino/vestido-thema5.jpg',
                ],
                thumbnail: './img/feminino/vestido-thema.jpg',
                price: '139,90',
            },
            {
                id: 'fem098',
                name: 'Vestido Alça Bordado',
                description: 'Tecido duna amassado com forro, tamanho único, veste até o 44, verificar cores disponíveis.',
                images: [
                    './img/feminino/vestido-envelope.jpg',
                    './img/feminino/vestido-envelope2.jpg',
                    './img/feminino/vestido-envelope3.jpg',
                    './img/feminino/vestido-envelope4.jpg',
                    './img/feminino/vestido-envelope5.jpg',
                    './img/feminino/vestido-envelope6.jpg',
                ],
                thumbnail: './img/feminino/vestido-envelope.jpg',
                price: '139,90',
            },
            {
                id: 'fem097',
                name: 'Vestido Alça Bordado',
                description: 'Tecido duna amassado com forro, tamanho único, veste até o 44, verificar cores disponíveis.',
                images: [
                    './img/feminino/vestido-alca-bordado.jpg',
                    './img/feminino/vestido-alca-bordado2.jpg',
                    './img/feminino/vestido-alca-bordado3.jpg',
                    './img/feminino/vestido-alca-bordado4.jpg',
                    './img/feminino/vestido-alca-bordado5.jpg',
                    './img/feminino/vestido-alca-bordado6.jpg',
                    './img/feminino/vestido-alca-bordado7.jpg',
                    './img/feminino/vestido-alca-bordado8.jpg',
                ],
                thumbnail: './img/feminino/vestido-alca-bordado.jpg',
                price: '139,90',
            },
            {
                id: 'fem096',
                name: 'Vestido Vestido Carol',
                description: 'Tecido duna amassado com forro, tamanho único, veste até o 44, verificar cores disponíveis.',
                images: [
                    './img/feminino/vestido-carol.jpg',
                    './img/feminino/vestido-carol2.jpg',
                    './img/feminino/vestido-carol3.jpg',
                    './img/feminino/vestido-carol4.jpg',
                    './img/feminino/vestido-carol5.jpg'
                ],
                thumbnail: './img/feminino/vestido-carol.jpg',
                price: '139,90',
            },
            {
                id: 'fem095',
                name: 'Vestido Laço Ombro Alça',
                description: 'Tecido duna amassado com forro, tamanho único, veste até o 44, verificar cores disponíveis.',
                images: [
                    './img/feminino/vestido-laco-ombro-alca.jpg',
                    './img/feminino/vestido-laco-ombro-alca2.jpg',
                    './img/feminino/vestido-laco-ombro-alca3.jpg',
                    './img/feminino/vestido-laco-ombro-alca4.jpg',
                    './img/feminino/vestido-laco-ombro-alca5.jpg'
                ],
                thumbnail: './img/feminino/vestido-laco-ombro-alca.jpg',
                price: '139,90',
            },
            {
                id: 'fem094',
                name: 'Vestido Denise',
                description: 'Tecido duna amassado com forro, tamanho único, veste até o 44, verificar cores disponíveis.',
                images: [
                    './img/feminino/denise.jpg',
                    './img/feminino/denise2.jpg',
                    './img/feminino/denise3.jpg',
                    './img/feminino/denise4.jpg',
                    './img/feminino/denise5.jpg',
                    './img/feminino/denise6.jpg',

                ],
                thumbnail: './img/feminino/denise5.jpg',
                price: '139,90',
            },
            {
                id: 'fem093',
                name: 'Vestido Nelly',
                description: 'Tecido linho duna, com forro bolso e fenda, tamanho G e GG, consultar cores disponíveis.',
                images: [
                    './img/feminino/nelly.jpg',
                    './img/feminino/nelly2.jpg',
                    './img/feminino/nelly3.jpg',
                    './img/feminino/nelly4.jpg',
                    './img/feminino/nelly5.jpg',

                ],
                thumbnail: './img/feminino/nelly4.jpg',
                price: '159,90',
            },
            {
                id: 'fem092',
                name: 'Vestido Maisa Bordado em Lese',
                description: 'Tecdido Viscolinho bordado em lese, com forro, tamanho único veste até o 44, consultar cores disponíveis.',
                images: [
                    './img/feminino/maisalese.jpg',
                    './img/feminino/maisalese2.jpg',
                    './img/feminino/maisalese3.jpg',
                    './img/feminino/maisalese4.jpg',
                    './img/feminino/maisalese5.jpg',

                ],
                thumbnail: './img/feminino/maisalese.jpg',
                price: '189,90',
            },
            {
                id: 'fem091',
                name: 'Vestido Indiano Seda',
                description: 'Tecido seda, tamanho único veste até o 46, consultar cores disponíveis.',
                images: [
                    './img/feminino/indianoceda.jpg',
                    './img/feminino/indianoceda2.jpg',
                    './img/feminino/indianoceda3.jpg',

                ],
                thumbnail: './img/feminino/indianoceda.jpg',
                price: '169,90',
            },
            {
                id: 'fem090',
                name: 'Vestido Elena',
                description: 'Tecido duna com forro, estampado, tamanho único veste até o 44, consultar cores disponíveis.',
                images: [
                    './img/feminino/helena.jpg',
                    './img/feminino/helena2.jpg',
                    './img/feminino/helena4.jpg',
                    './img/feminino/helena5.jpg',
                    './img/feminino/helena6.jpg',
                    './img/feminino/helena7.jpg',

                ],
                thumbnail: './img/feminino/helena7.jpg',
                price: '159,90',
            },
            {
                id: 'fem089',
                name: 'Vestido Day Bordado em Lese',
                description: 'Tecido Chambrae bordado em lese com forro, tamanho M 40/42 G 44/46, consultar cores disponíveis.',
                images: [
                    './img/feminino/daybordadolese.jpg',
                    './img/feminino/daybordadolese2.jpg',
                    './img/feminino/daybordadolese3.jpg',
                    './img/feminino/daybordadolese4.jpg',
                    './img/feminino/daybordadolese5.jpg',
                    './img/feminino/daybordadolese6.jpg',
                    './img/feminino/daybordadolese7.jpg',
                    './img/feminino/daybordadolese8.jpg',
                    './img/feminino/daybordadolese9.jpg',
                    './img/feminino/daybordadolese10.jpg',

                ],
                thumbnail: './img/feminino/daybordadolese2.jpg',
                price: '179,90',
            },
            {
                id: 'fem088',
                name: 'Vestido Viscomida Bordado em Lese',
                description: 'Tecido Viscomida com forro bordado em lese, tamanho único veste até o 44, consultar cores disponíveis.',
                images: [
                    './img/feminino/bordadolese.jpg',

                ],
                thumbnail: './img/feminino/bordadolese.jpg',
                price: '189,90',
            },
            {
                id: 'fem087',
                name: 'Vestido Bia',
                description: 'Tecido Sensorial marrant, tamanho único veste até o 44, consultar cores disponíveis.',
                images: [
                    './img/feminino/bia.jpg',
                    './img/feminino/bia2.jpg',
                    './img/feminino/bia3.jpg',
                    './img/feminino/bia4.jpg',

                ],
                thumbnail: './img/feminino/bia2.jpg',
                price: '169,90',
            },
            {
                id: 'fem086',
                name: 'Vestido Linho Manga Princesa',
                description: 'Tecido linho/duna, com forro e bolso, tamanho único veste até o 44, consultar cores disponíveis.',
                images: [
                    './img/feminino/linhomangaprincesa.jpg',
                    './img/feminino/linhomangaprincesa2.jpg',

                ],
                thumbnail: './img/feminino/linhomangaprincesa.jpg',
                price: '159,90',
            },
            {
                id: 'fem085',
                name: 'Vestido Nanda Regata',
                description: 'Tecido Crepinho duna, com forro, tamanho único veste até o 46, consultar cores disponíveis.',
                images: [
                    './img/feminino/nandaregata.jpg',
                    './img/feminino/nandaregata2.jpg',
                    './img/feminino/nandaregata3.jpg',
                    './img/feminino/nandaregata4.jpg',
                    './img/feminino/nandaregata5.jpg',
                    './img/feminino/nandaregata6.jpg',

                ],
                thumbnail: './img/feminino/nandaregata.jpg',
                price: '159,90',
            },
            {
                id: 'fem084',
                name: 'Vestido Duna Manga 3/4',
                description: 'Tecido Duna, com forro, tamanho único veste até o 44, consultar cores disponíveis.',
                images: [
                    './img/feminino/dunamanga34.jpg',
                    './img/feminino/dunamanga342.jpg',
                    './img/feminino/dunamanga343.jpg'

                ],
                thumbnail: './img/feminino/dunamanga34.jpg',
                price: '149,90',
            },
            {
                id: 'fem083',
                name: 'Vestido Joice Bordado',
                description: 'Tecido Viscomida, com forro. BORDADO tamanho único veste até o 44, consultar cores disponíveis.',
                images: [
                    './img/feminino/joicebordado.jpg',

                ],
                thumbnail: './img/feminino/joicebordado.jpg',
                price: '159,90',
            },
            {
                id: 'fem082',
                name: 'Duna Bordado',
                description: 'Tecido Duna, com forro. BORDADO tamanho único veste até o 44, consultar cores disponíveis.',
                images: [
                    './img/feminino/dunabordado.jpg',
                    './img/feminino/dunabordado2.jpg',

                ],
                thumbnail: './img/feminino/dunabordado.jpg',
                price: '159,90',
            },
            {
                id: 'fem081',
                name: 'Short Segunda Pele',
                description: 'Tecido microfibra, tamanho P, M, G, GG e PLUS.',
                images: [
                    './img/feminino/short.jpg',
                    './img/feminino/short2.jpg',
                    './img/feminino/short3.jpg',

                ],
                thumbnail: './img/feminino/short.jpg',
                price: '29,90',
            },
            {
                id: 'fem078',
                name: 'Vestido Vitória',
                description: 'Tecido Linho duna, com forro e bolso, tamanho único veste até o 44, consultar cores disponíveis.',
                images: [
                    './img/feminino/vitoria.jpg',
                    './img/feminino/vitoria2.jpg',
                    './img/feminino/vitoria3.jpg',
                    './img/feminino/vitoria4.jpg',
                    './img/feminino/vitoria5.jpg',

                ],
                thumbnail: './img/feminino/vitoria.jpg',
                price: '139,90',
            },
            {
                id: 'fem077',
                name: 'Vestido Lucy',
                description: 'Tecido Linho com forro acompanha cinto, tamanho úico, veste até o 44, consultar cores disponíveis.',
                images: [
                    './img/feminino/lucy.jpg',
                    './img/feminino/lucy2.jpg',
                    './img/feminino/lucy3.jpg',
                    './img/feminino/lucy4.jpg',
                    './img/feminino/lucy5.jpg',

                ],
                thumbnail: './img/feminino/lucy.jpg',
                price: '159,90',
            },
            {
                id: 'fem075',
                name: 'Vestido Jamille',
                description: 'Tecido Duna com forro, tamanho único veste até o 44 OBS: Sem cinto, consultar cores disponíveis.',
                images: [
                    './img/feminino/jamile.jpg',
                    './img/feminino/jamile2.jpg',
                    './img/feminino/jamile3.jpg',
                    './img/feminino/jamile4.jpg',
                    './img/feminino/jamile5.jpg',

                ],
                thumbnail: './img/feminino/jamile.jpg',
                price: '139,90',
            },
            {
                id: 'fem073',
                name: 'Chamise Linho Importado',
                description: 'Chamise tecido linho importado, tamanho único, veste até o 46, consultar cores disponíveis.',
                images: [
                    './img/feminino/chamiselinhoimportado.jpg',
                    './img/feminino/chamiselinhoimportado2.jpg',
                    './img/feminino/chamiselinhoimportado3.jpg',
                    './img/feminino/chamiselinhoimportado4.jpg',
                    './img/feminino/chamiselinhoimportado5.jpg',

                ],
                thumbnail: './img/feminino/chamiselinhoimportado.jpg',
                price: '169,90',
            },
            {
                id: 'fem072',
                name: 'Vestido Jeans Midi',
                description: 'Tecido Jeans com elastano, tamanho M 38/40 G 40/42 GG 42/44.',
                images: [
                    './img/feminino/jeansmidi.jpg',
                    './img/feminino/jeansmidi2.jpg',
                    './img/feminino/jeansmidi3.jpg',

                ],
                thumbnail: './img/feminino/jeansmidi.jpg',
                price: '139,90',
            },
            {
                id: 'fem070',
                name: 'Vestido Manga Longa Duas Peças',
                description: 'Tecido Viscolaycra duas peças, vestido acompanha sobre-tudo, tamanho único veste até o 44, consultar cores disponíveis',
                images: [
                    './img/feminino/mangalongaduaspecas.jpg',
                    './img/feminino/mangalongaduaspecas2.jpg',
                    './img/feminino/mangalongaduaspecas3.jpg',
                    './img/feminino/mangalongaduaspecas4.jpg',

                ],
                thumbnail: './img/feminino/mangalongaduaspecas.jpg',
                price: '139,90',
            },
            {
                id: 'fem069',
                name: 'Vestido Crepinho Manga Longa',
                description: 'Tecido Crepinho com forro, manga longa, tamanho único veste até o 44, consultar cores disponíveis',
                images: [
                    './img/feminino/crepinhomangalonga.jpg',

                ],
                thumbnail: './img/feminino/crepinhomangalonga.jpg',
                price: '119,90',
            },
            {
                id: 'fem068',
                name: 'Vestido Elisa Estampado com Cinto',
                description: 'Tecido Duna com forro e cinto, tamanho único veste até o 44, consultar cores disponíveis',
                images: [
                    './img/feminino/elisaestampado.jpg',
                    './img/feminino/elisaestampado2.jpg',
                    './img/feminino/elisaestampado3.jpg',
                    './img/feminino/elisaestampado4.jpg',
                    './img/feminino/elisaestampado5.jpg',
                    './img/feminino/elisaestampado6.jpg',
                    './img/feminino/elisaestampado7.jpg',

                ],
                thumbnail: './img/feminino/elisaestampado.jpg',
                price: '169,90',
            },
            {
                id: 'fem066',
                name: 'Vestido Midi Botão e bolso',
                description: 'Tecido Chambray, OBS: Botão NÃO funcional, tamanho único M/40 G/42 GG/44.',
                images: [
                    './img/feminino/botaobolso.jpg',
                    './img/feminino/botaobolso2.jpg',
                    './img/feminino/botaobolso3.jpg',
                    './img/feminino/botaobolso4.jpg',
                    './img/feminino/botaobolso5.jpg',

                ],
                thumbnail: './img/feminino/botaobolso.jpg',
                price: '149,90',
            },
            {
                id: 'fem065',
                name: 'Vestido Plissado Laura com Cinto',
                description: 'Tecido Crepinho acompanha o cinto, tamanho M G e GG, consultar cores disponíveis',
                images: [
                    './img/feminino/plissadolaura.jpg',
                    './img/feminino/plissadolaura2.jpg',
                    './img/feminino/plissadolaura3.jpg',
                    './img/feminino/plissadolaura4.jpg',
                    './img/feminino/plissadolaura5.jpg',
                    './img/feminino/plissadolaura6.jpg',
                    './img/feminino/plissadolaura7.jpg',
                    './img/feminino/plissadolaura8.jpg',

                ],
                thumbnail: './img/feminino/plissadolaura.jpg',
                price: '139,90',
            },
            {
                id: 'fem064',
                name: 'Vestido Milene Manga Longa',
                description: 'Tecido Crepinho importado com forro, tamanho único veste até o 44, consultar cores disponíveis',
                images: [
                    './img/feminino/vestidomilenemangalonga.jpg',
                    './img/feminino/vestidomilenemangalonga2.jpg',
                    './img/feminino/vestidomilenemangalonga3.jpg',
                    './img/feminino/vestidomilenemangalonga4.jpg',
                    './img/feminino/vestidomilenemangalonga5.jpg',
                    './img/feminino/vestidomilenemangalonga6.jpg',

                ],
                thumbnail: './img/feminino/vestidomilenemangalonga.jpg',
                price: '159,90',
            },
            {
                id: 'fem063',
                name: 'Vestido Brilhante',
                description: 'Tecido Viscomida com forro, bordado manga 3/4 brilho, tamanho único veste até o 44, consultar cores disponíveis',
                images: [
                    './img/feminino/vestidobrilhante.jpg',
                    './img/feminino/vestidobrilhante2.jpg',
                    './img/feminino/vestidobrilhante3.jpg',
                    './img/feminino/vestidobrilhante4.jpg',
                    './img/feminino/vestidobrilhante5.jpg',
                    './img/feminino/vestidobrilhante6.jpg',
                    './img/feminino/vestidobrilhante7.jpg'

                ],
                thumbnail: './img/feminino/vestidobrilhante.jpg',
                price: '169,90',
            },
            {
                id: 'fem062',
                name: 'Vestido Regata 2 Peças',
                description: 'Tecido ViscoLaycra, vestido regata acompanha sobre-tudo tamanho único veste até o 44, consultar cores disponíveis',
                images: [
                    './img/feminino/vestidoregata.jpg',
                    './img/feminino/vestidoregata2.jpg',
                    './img/feminino/vestidoregata3.jpg',

                ],
                thumbnail: './img/feminino/vestidoregata.jpg',
                price: '119,90',
            },
            {
                id: 'fem061',
                name: 'Vestido Floral Midi',
                description: 'Tecido Crepe, tamanho único veste até o 46, consultar estampas disponíveis',
                images: [
                    './img/feminino/vestidofloralmidi.jpg',
                    './img/feminino/vestidofloralmidi2.jpg',
                    './img/feminino/vestidofloralmidi3.jpg',
                    './img/feminino/vestidofloralmidi4.jpg',

                ],
                thumbnail: './img/feminino/vestidofloralmidi.jpg',
                price: '119,90',
            },
            {
                id: 'fem060',
                name: 'Vestido Duna Estampado',
                description: 'Tecido duna com forro, tamanho único veste até o 44, consultar cores disponíveis.',
                images: [
                    './img/feminino/vestidoluna.jpg',
                    './img/feminino/vestidoluna2.jpg',
                    './img/feminino/vestidoluna3.jpg',
                    './img/feminino/vestidoluna4.jpg',
                    './img/feminino/vestidoluna5.jpg',
                    './img/feminino/vestidoluna6.jpg',
                    './img/feminino/vestidoluna7.jpg',
                    './img/feminino/vestidoluna8.jpg',

                ],
                thumbnail: './img/feminino/vestidoluna.jpg',
                price: '159,90',
            },
            {
                id: 'fem059',
                name: 'Vestido Jeans Manga 3/4',
                description: 'Tecido Jeans com laycra, tamanho M 38/40 G 40/42 GG 42/44.',
                images: [
                    './img/feminino/vestidojeansmanga.jpg',
                    './img/feminino/vestidojeansmanga2.jpg',
                    './img/feminino/vestidojeansmanga3.jpg',

                ],
                thumbnail: './img/feminino/vestidojeansmanga.jpg',
                price: '149,90',
            },
            {
                id: 'fem058',
                name: 'Vestido Chambre',
                description: 'Tecido Chambre em gola V, tamanho único M 38/40 G 40/42 GG 42/44.',
                images: [
                    './img/feminino/vestidochambre.jpg',
                    './img/feminino/vestidochambre2.jpg',
                    './img/feminino/vestidochambre3.jpg',
                    './img/feminino/vestidochambre4.jpg',

                ],
                thumbnail: './img/feminino/vestidochambre.jpg',
                price: '139,90',
            },
            {
                id: 'fem057',
                name: 'Vestido Laço Ombro',
                description: 'Tecido Linho Duna com forro, tamanho único veste até o 44, consultar cores disponíveis',
                images: [
                    './img/feminino/vestidolacoombro.jpg',
                    './img/feminino/vestidolacoombro2.jpg',

                ],
                thumbnail: './img/feminino/vestidolacoombro.jpg',
                price: '149,90',
            },
            {
                id: 'fem054',
                name: 'Vestido Camponesa',
                description: 'Tecido Viscolinho com forro, manga longa, tamanho único veste até o 44, consultar cores disponíveis',
                images: [
                    './img/feminino/vestidocamponesa.jpg',

                ],
                thumbnail: './img/feminino/vestidocamponesa.jpg',
                price: '119,90',
            },
            {
                id: 'fem052',
                name: 'Vestido Brilho',
                description: 'Tecido Viscomida com forro, bordado com brilho, tamanho único veste até o 44, consultar cores disponíveis',
                images: [
                    './img/feminino/vestidobrilho.jpg'

                ],
                thumbnail: './img/feminino/vestidobrilho.jpg',
                price: '169,90',
            },
            {
                id: 'fem051',
                name: 'Vestido Paty Bordado',
                description: 'Tecido Viscomida bordado com forro, tamanho único veste até o 44, consultar cores disponíveis',
                images: [
                    './img/feminino/vestidopatybordado.jpg',
                    './img/feminino/vestidopatybordado2.jpg',
                    './img/feminino/vestidopatybordado3.jpg',
                    './img/feminino/vestidopatybordado5.jpg',
                    './img/feminino/vestidopatybordado6.jpg',
                    './img/feminino/vestidopatybordado7.jpg'

                ],
                thumbnail: './img/feminino/vestidopatybordado.jpg',
                price: '169,90',
            },
            {
                id: 'fem050',
                name: 'Vestido Carolina',
                description: 'Tecido Viscolinho com forro, manga 3/4 tamanho único, veste até o 44, consultar cores disponíveis.',
                images: [
                    './img/feminino/vestidocarolina.jpg',
                    './img/feminino/vestidocarolina2.jpg',
                    './img/feminino/vestidocarolina3.jpg',
                    './img/feminino/vestidocarolina4.jpg',
                    './img/feminino/vestidocarolina5.jpg',
                    './img/feminino/vestidocarolina6.jpg'

                ],
                thumbnail: './img/feminino/vestidocarolina.jpg',
                price: '159,90',
            },
            {
                id: 'fem049',
                name: 'Vestido Longo com fenda',
                description: 'Tecido Viscolinho, com forro, tamanho único, veste até o 44, consultar cores disponíveis.',
                images: [
                    './img/feminino/vestidolongocomfenda.jpg',
                ],
                thumbnail: './img/feminino/vestidolongocomfenda.jpg',
                price: '149,90',
            },
            {
                id: 'fem048',
                name: 'Vestido Longo com alça bordado',
                description: 'Tecido duna com forro bordado, tamanho único, veste até o 44, consultar cores disponíveis.',
                images: [
                    './img/feminino/vestidolongocomalçabordado.jpg',
                    './img/feminino/vestidolongocomalçabordado2.jpg',
                ],
                thumbnail: './img/feminino/vestidolongocomalçabordado.jpg',
                price: '149,90',
            },
            {
                id: 'fem047',
                name: 'Vestido Longo Alça Estrela',
                description: 'Tecido duna com forro, tamanho único, veste até o 44, consultar cores disponíveis.',
                images: [
                    './img/feminino/vestidolongoalçaestrela.jpg',
                    './img/feminino/vestidolongoalçaestrela2.jpg',
                    './img/feminino/vestidolongoalçaestrela3.jpg',
                    './img/feminino/vestidolongoalçaestrela4.jpg',
                    './img/feminino/vestidolongoalçaestrela5.jpg',
                    './img/feminino/vestidolongoalçaestrela6.jpg',
                    './img/feminino/vestidolongoalçaestrela7.jpg'

                ],
                thumbnail: './img/feminino/vestidolongoalçaestrela.jpg',
                price: '149,90',
            },
            {
                id: 'fem046',
                name: 'Vestido Linho Leidy',
                description: 'Tecido Linho com forro, tamanho único, veste até o 46, consultar cores disponíveis.',
                images: [
                    './img/feminino/vestidolinholeidy.jpg',
                    './img/feminino/vestidolinholeidy2.jpg',
                    './img/feminino/vestidolinholeidy3.jpg',
                    './img/feminino/vestidolinholeidy4.jpg',
                    './img/feminino/vestidolinholeidy5.jpg',
                    './img/feminino/vestidolinholeidy6.jpg'
                ],
                thumbnail: './img/feminino/vestidolinholeidy.jpg',
                price: '159,90',
            },
            {
                id: 'fem045',
                name: 'Vestido Duna Midi',
                description: 'Vestido duna Midi com cinto, tamanho M, 38, 40, tamanho G 42, 44, com bojo e forro/látex nas costas, consultar cores disponíveis.',
                images: [
                    './img/feminino/vestidodunamidi.jpg',
                    './img/feminino/vestidodunamidi2.jpg',
                    './img/feminino/vestidodunamidi3.jpg',
                    './img/feminino/vestidodunamidi4.jpg',
                    './img/feminino/vestidodunamidi5.jpg'

                ],
                thumbnail: './img/feminino/vestidodunamidi.jpg',
                price: '139,90',
            },
            {
                id: 'fem044',
                name: 'Vestido Emille',
                description: 'Tecido Duna, tamanho único, veste até o 46, consultar cores disponíveis.',
                images: [
                    './img/feminino/vestidocurtoemille.jpg',
                    './img/feminino/vestidocurtoemille2.jpg',
                    './img/feminino/vestidocurtoemille3.jpg',
                    './img/feminino/vestidocurtoemille4.jpg',

                ],
                thumbnail: './img/feminino/vestidocurtoemille.jpg',
                price: '79,90',
            },
            {
                id: 'fem043',
                name: 'Vestido Bete',
                description: 'Tecido duna com forro, tamanho único, veste até o 44, consultar cores disponíveis.',
                images: [
                    './img/feminino/vestidobete.jpg',
                    './img/feminino/vestidobete2.jpg',
                    './img/feminino/vestidobete3.jpg',

                ],
                thumbnail: './img/feminino/vestidobete.jpg',
                price: '159,90',
            },
            {
                id: 'fem042',
                name: 'Vestido Longuete',
                description: 'Tecido Chambrae, Tamanho M/40 G/42 GG/44, OBS: botões não funcionais.',
                images: [
                    './img/feminino/vestido longuete.jpg',
                    './img/feminino/vestidolonguete2.jpg',
                    './img/feminino/vestidolonguete3.jpg',
                    './img/feminino/vestidolonguete4.jpg',
                    './img/feminino/vestidolonguete5.jpg'

                ],
                thumbnail: './img/feminino/vestido longuete.jpg',
                price: '169,90',
            },

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
                price: '129,90'
            },
            {
                id: 'fem028',
                name: 'Cardigan de Lã',
                description: 'Cardigan tecido em lã macia, tamanho ÚNICO veste até o 40,42,44, consultar cores disponíveis. Perfeito para aquecer e complementar looks de outono e inverno.',
                images: [
                    './img/feminino/cardigandela.jpg',
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
                id: 'fem005',
                name: 'Vestido Natalia Tule',
                description: 'Tecido em Tule forrado, tamanho ÚNICO veste até o 44, consultar cores disponíveis.',
                images: [
                    './img/feminino/vestidonataliatule.jpg',
                    './img/feminino/vestidonataliatule2.jpg',
                    './img/feminino/natalia.jpg',
                    './img/feminino/natalia2.jpg',
                    './img/feminino/natalia3.jpg',
                    './img/feminino/natalia4.jpg',
                    './img/feminino/natalia5.jpg',
                    './img/feminino/natalia6.jpg',
                    './img/feminino/natalia7.jpg',
                ],
                thumbnail: './img/feminino/vestidonataliatule.jpg',
                price: '169,90'
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
                    './img/feminino/vestidoprincesa2.jpg',
                    './img/feminino/vestidoprincesa3.jpg',
                    './img/feminino/vestidoprincesa4.jpg',
                    './img/feminino/vestidoprincesa5.jpg',
                    './img/feminino/vestidoprincesa6.jpg'
                ],
                thumbnail: './img/feminino/vestidoprincesa2.jpg',
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
                id: 'fplus017',
                name: 'Vestido Casual Plus',
                description: 'Tecido linho duna, com forro bolso e fenda, tamanho G e GG, consultar cores disponíveis.',
                images: [
                    './img/feminino/vestido-casual-plus.jpg',
                ],
                thumbnail: './img/feminino/vestido-casual-plus.jpg',
                price: '159,90',
            },
            {
                id: 'fplus017',
                name: 'Vestido Nelly',
                description: 'Tecido linho duna, com forro bolso e fenda, tamanho G e GG, consultar cores disponíveis.',
                images: [
                    './img/feminino/nelly.jpg',
                    './img/feminino/nelly2.jpg',
                    './img/feminino/nelly3.jpg',
                    './img/feminino/nelly4.jpg',
                    './img/feminino/nelly5.jpg',

                ],
                thumbnail: './img/feminino/nelly4.jpg',
                price: '159,90',
            },
            {
                id: 'fplus015',
                name: 'Vestido Alfaiataria Plus',
                description: 'Vestido Alfaiataria, botão funcional, ajuste na cintura, tamanho único veste do 44 ao 52, consultar cores disponíveis.',
                images: [
                    './img/feminino_plus/alfaiataria.jpg',
                    './img/feminino_plus/alfaiataria2.jpg',
                    './img/feminino_plus/alfaiataria3.jpg',
                    './img/feminino_plus/alfaiataria4.jpg',
                    './img/feminino_plus/alfaiataria5.jpg',
                ],
                thumbnail: './img/feminino_plus/alfaiataria.jpg',
                price: '179,90',
            },
            {
                id: 'fplus014',
                name: 'Vestido Evelyn Plus',
                description: 'Tecido em linho, vestido plus botão, tamanho único plus, 48/50/52, consultar cores disponíveis.',
                images: [
                    './img/feminino_plus/evelynn.jpg',
                    './img/feminino_plus/evelynn2.jpg',
                    './img/feminino_plus/evelynn3.jpg',
                    './img/feminino_plus/evelynn4.jpg'
                ],
                thumbnail: './img/feminino_plus/evelynn.jpg',
                price: '179,90',
            },
            {
                id: 'fplus013',
                name: 'Vestido Soraia Bordado Plus',
                description: 'Tecido Viscomida, Bordado, com forro, tamanho único veste do 44 ao 48/50, consultar cores disponíveis.',
                images: [
                    './img/feminino_plus/soraia.jpg',
                    './img/feminino_plus/soraia2.jpg',
                    './img/feminino_plus/soraia3.jpg',
                    './img/feminino_plus/soraia4.jpg',
                    './img/feminino_plus/soraia5.jpg',
                    './img/feminino_plus/soraia6.jpg',
                    './img/feminino_plus/soraia7.jpg',
                ],
                thumbnail: './img/feminino_plus/soraia.jpg',
                price: '169,90',
            },
            {
                id: 'fplus012',
                name: 'Short Segunda Pele',
                description: 'Tecido microfibra, tamanho P, M, G, GG e PLUS.',
                images: [
                    './img/feminino/short.jpg',
                    './img/feminino/short2.jpg',
                    './img/feminino/short3.jpg',

                ],
                thumbnail: './img/feminino/short.jpg',
                price: '29,90',
            },
            {
                id: 'fplus011',
                name: 'Vestido Katarina Bordado PLUS',
                description: 'Tecido Viscomida Bordado com forro, veste até 48, consultar cores disponíveis.',
                images: [
                    './img/feminino_plus/katarina.jpg',
                    './img/feminino_plus/katarina2.jpg',
                    './img/feminino_plus/katarina3.jpg',
                    './img/feminino_plus/katarina5.jpg',
                    './img/feminino_plus/katarina6.jpg',
                    './img/feminino_plus/katarina7.jpg',
                    './img/feminino_plus/katarina8.jpg',
                    './img/feminino_plus/katarina9.jpg',
                ],
                thumbnail: './img/feminino_plus/katarina.jpg',
                price: '169,90',
            },
            {
                id: 'fplus010',
                name: 'Vestido Duna Manga Plus',
                description: 'Tecido Duna com forro, tamanho G1 48/50, G2 52/54, G3 54/56 consultar cores disponíveis.',
                images: [
                    './img/feminino_plus/vestidodunamangaplus.jpg',
                    './img/feminino_plus/vestidodunamangaplus2.jpg',
                    './img/feminino_plus/vestidodunamangaplus3.jpg',
                    './img/feminino_plus/vestidodunamangaplus4.jpg',
                    './img/feminino_plus/vestidodunamangaplus5.jpg',
                ],
                thumbnail: './img/feminino_plus/vestidodunamangaplus.jpg', // Substitua por sua imagem
                price: '179,90', // Exemplo de preço
            },
            {
                id: 'fplus001',
                name: 'Chemise Plus',
                description: 'Tecido Duna tamanho único, veste do 44 ao 54, consultar cores disponíveis.',
                images: [
                    './img/feminino_plus/chemiseplus.jpg',
                    './img/feminino_plus/chemiseplus2.jpg',
                ],
                thumbnail: './img/feminino_plus/chemiseplus.jpg', // Substitua por sua imagem
                price: '159,90', // Exemplo de preço
            },

            {
                id: 'fplus002',
                name: 'Duna Plus Manga Longa',
                description: 'Tecido Duna com forro, tamanho único, veste do 46 ao 52, botão funcional, consultar cores disponíveis.',
                images: [
                    './img/feminino_plus/dunaplusmangalonga.jpg',
                    './img/feminino_plus/dunaplusmangalonga2.jpg'
                ],
                thumbnail: './img/feminino_plus/dunaplusmangalonga.jpg',
                price: '179,90',
            },
            {
                id: 'fplus003',
                name: 'Plus Alça Duna',
                description: 'Tecido Duna com forro, tamanho único, veste 46 ao 52, consultar cores disponíveis.',
                images: [
                    './img/feminino_plus/plusalcaduna.jpg',
                    './img/feminino_plus/plusalcaduna2.jpg',
                    './img/feminino_plus/plusalcaduna3.jpg'
                ],
                thumbnail: './img/feminino_plus/plusalcaduna.jpg',
                price: '159,90',
            },
            {
                id: 'fplus004',
                name: 'Plus Boradado',
                description: 'Tecido Chambre com forro, tamanho único, veste do 48 ao 52, consultar cores disponíveis.',
                images: [
                    './img/feminino_plus/plusbordado.jpg',
                    './img/feminino_plus/plusbordado2.jpg'
                ],
                thumbnail: './img/feminino_plus/plusbordado.jpg',
                price: '179,90',
            },
            {
                id: 'fplus005',
                name: 'Vesitdo Folha Plus',
                description: 'Tecido Duna com forro, veste do 46 ao 50, consultar cores disponíveis.',
                images: [
                    './img/feminino_plus/vestidofolhaplus.jpg',
                ],
                thumbnail: './img/feminino_plus/vestidofolhaplus.jpg',
                price: '169,90',
            },
            {
                id: 'fplus006',
                name: 'Vestido Linho Plus',
                description: 'Tecido Linho com bojo, veste do 44 ao 52, consultar cores disponíveis.',
                images: [
                    './img/feminino_plus/vestidolinhoplus.jpg',
                    './img/feminino_plus/vestidolinhoplus2.jpg',
                    './img/feminino_plus/vestidolinhoplus3.jpg',
                    './img/feminino_plus/vestidolinhoplus4.jpg'
                ],
                thumbnail: './img/feminino_plus/vestidolinhoplus.jpg',
                price: '189,90',
            },
            {
                id: 'fplus007',
                name: 'Vestido Plissado Plus',
                description: 'Tecido crepinho, plissado com laço no pescoço, veste do 48 ao 52, consultar cores disponíveis.',
                images: [
                    './img/feminino_plus/vestidoplissadoplus.jpg',
                    './img/feminino_plus/vestidoplissadoplus2.jpg',
                    './img/feminino_plus/vestidoplissadoplus3.jpg',
                    './img/feminino_plus/vestidoplissadoplus4.jpg',
                    './img/feminino_plus/vestidoplissadoplus5.jpg'
                ],
                thumbnail: './img/feminino_plus/vestidoplissadoplus.jpg',
                price: '169,90',
            },
            {
                id: 'fplus008',
                name: 'Vestido Plus Gabi',
                description: 'Tecido Duna com forro, tamanho G1, G2, G3, consultar cores disponíveis.',
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
                price: '179,90',
            },
        ],
        feminino_conjuntos: [
            {
                id: 'fem009',
                name: 'Conjunto Linho',
                description: 'Tecido tricoline, com forro, tamanho único veste até o 44, consultar cores disponíveis.',
                images: [
                    './img/feminino/tricoline.jpg',
                    './img/feminino/tricoline2.jpg',
                ],
                thumbnail: './img/feminino/tricoline.jpg',
                price: '179,90'
            },
            {
                id: 'fem008',
                name: 'Conjunto Sara',
                description: 'Tecido duna SHORTS SAIA, tamanho único veste até o 44, consultar cores disponíveis.',
                images: [
                    './img/feminino/sara.jpg',
                    './img/feminino/sara2.jpg',
                ],
                thumbnail: './img/feminino/sara.jpg',
                price: '119,90'
            },
            {
                id: 'fem007',
                name: 'Macaquinho',
                description: 'Tecido duna Tamanho único veste até o 44, consultar cores disponíveis.',
                images: [
                    './img/feminino/macaquinho.jpg',
                ],
                thumbnail: './img/feminino/macaquinho.jpg',
                price: '119,90'
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
                id: 'fem041',
                name: 'Conjunto Alça',
                description: 'Tecido Linho com forro, tamanho único, veste até o 44, consultar cores disponíveis.',
                images: [
                    './img/feminino/conjuntoalça2.jpg',
                    './img/feminino/conjuntoalça.jpg',

                    './img/feminino/conjuntoalça3.jpg',
                    './img/feminino/conjuntoalça4.jpg',
                    './img/feminino/conjuntoalça5.jpg',
                    './img/feminino/conjuntoalça6.jpg'

                ],
                thumbnail: './img/feminino/conjuntoalça2.jpg',
                price: '169,90',
            },
            {
                id: 'fconj08',
                name: 'Conjunto Canelado Premium',
                description: 'Tecido canelado premium, Tamanho M 38/40, G 42/44, consultar cores disponíveis.',
                images: [
                    './img/feminino/conjuntocaneladopremium.jpg',
                    './img/feminino/conjuntocaneladopremium2.jpg',
                    './img/feminino/conjuntocaneladopremium3.jpg',
                    './img/feminino/conjuntocaneladopremium4.jpg',
                    './img/feminino/conjuntocaneladopremium5.jpg',
                    './img/feminino/conjuntocaneladopremium6.jpg',
                    './img/feminino/conjuntocaneladopremium7.jpg',
                    './img/feminino/conjuntocaneladopremium8.jpg',
                    './img/feminino/conjuntocaneladopremium9.jpg',
                ],
                thumbnail: './img/feminino/conjuntocaneladopremium.jpg', // Substitua por sua imagem
                price: '149,90', // Exemplo de preço
            },
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

        // Mapeia as chaves para nomes amigáveis
        const categoryNames = {
            'feminino_vestidos': 'Vestidos',
            'feminino_conjuntos': 'Conjuntos',
            'feminino_plus': 'Feminino Plus'
        };
        
        const categoryName = categoryNames[categoryKey] || categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1);
        catalogTitle.textContent = categoryName;

        if (currentProducts.length === 0) {
            productGridContainer.innerHTML = '<p class="no-products">Oops! Nenhum produto encontrado nesta coleção no momento.</p>';
            return;
        }

        currentProducts.forEach((product, index) => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.dataset.productId = product.id;

            // Determina o badge baseado no ID do produto
            let badgeHtml = '';
            if (product.id.includes('fem094') || product.id.includes('fem093') || product.id.includes('fem092')) {
                badgeHtml = '<div class="product-badge new">Novo</div>';
            } else if (product.id.includes('fem081') || product.id.includes('fem028')) {
                badgeHtml = '<div class="product-badge sale">Promoção</div>';
            } else if (product.id.includes('fem001') || product.id.includes('fem005') || product.id.includes('fem017')) {
                badgeHtml = '<div class="product-badge popular">Popular</div>';
            }

            productCard.innerHTML = `
                <div class="product-image-container">
                    <img src="${product.thumbnail}" alt="${product.name}" class="product-image" loading="lazy">
                    ${badgeHtml}
                </div>
                <div class="product-info">
                    <h4>${product.name}</h4>
                    <div class="product-price">R$ ${product.price}</div>
                </div>
            `;

            productCard.addEventListener('click', () => openProductModal(product.id));
            productGridContainer.appendChild(productCard);
        });
    }

    /**
     * Cria o link do WhatsApp para encomenda do produto
     * @param {Object} product - O produto a ser encomendado
     * @returns {string} - URL do WhatsApp
     */
    function createWhatsAppLink(product) {
        const phoneNumber = "5515998437553"; // Número do WhatsApp
        const message = `Olá! Gostaria de encomendar o produto:\n\n*${product.name}*\n\nPreço: R$ ${product.price}\n\nDescrição: ${product.description}\n\nPodem me ajudar com mais informações?`;
        const encodedMessage = encodeURIComponent(message);
        return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
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
        precoProduto.textContent = `R$ ${product.price}`;
        
        // Configura o botão de encomendar
        orderButton.onclick = () => {
            const whatsappLink = createWhatsAppLink(product);
            window.open(whatsappLink, '_blank');
        };

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
                // Mostra diretamente os produtos
                displayProducts(categoryKey);
                showSection(productCatalogSection);
            } else {
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
