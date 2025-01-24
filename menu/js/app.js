$(document).ready(function() {
    cardapio.eventos.init();
})

var cardapio = {};

var MEU_CARRINHO = [];
var VALOR_CARRINHO = 0;
var VALOR_ENTREGA = 5;

var CELULAR_EMPRESA = '5517991234567';

var MEU_ENDERECO = null;

cardapio.eventos = {

    init: () => {
        cardapio.metodos.obterItensCardapio();
        cardapio.metodos.carregarBotaoReserva();
    }

}

cardapio.metodos = {

    // obtem a lista de itens do cardapio
    obterItensCardapio: (categoria = 'burgers', vermais = false) => {

        var filtro = MENU[categoria]

        if (!vermais) {

            $('#itensCardapio').html('');
            $('#btnVerMais').removeClass('hidden');
        }


        $.each(filtro, (i, e) => {

            let temp = cardapio.templates.item.replace(/\${img}/g, e.img)
                                              .replace(/\${nome}/g, e.name)
                                              .replace(/\${preco}/g, e.price.toFixed(2).replace('.',','))
                                              .replace(/\${id}/g, e.id);

            // botao ver mais foi clicado (12 itens)
            if (vermais && i >= 8  && i < 12) {

                $('#itensCardapio').append(temp);
            }

            // paginacao inicial (8 itens)
            if (!vermais && i < 8) {

                $('#itensCardapio').append(temp);
            }


        });

        //remove o ativo
        $('.container-menu a').removeClass('active');

        //seta o menu para ativo
        $('#menu-'+categoria).addClass('active');

    },

    // botao de ver mais, carrega mas itens do menu
    verMais: () => {

        var ativo = $(".container-menu a.active").attr('id').split('menu-')[1];
        cardapio.metodos.obterItensCardapio(ativo, true);

        $('#btnVerMais').addClass('hidden');

    },

    // diminuir a quantidade do item no painel que mostra a quantidade do item do menu que sera enviado ao carrinho
    diminuirQuantidade: (id) => {

        let qntdAtual = parseInt($("#qntd-"+id).text());

        if(qntdAtual > 0) {

            $("#qntd-"+id).text(qntdAtual - 1)
        }

    },

    // aumentar a quantidade do item no painel que mostra a quantidade do item do menu que sera enviado ao carrinho
    aumentarQuantidade: (id) => {

        let qntdAtual = parseInt($("#qntd-"+id).text());

        $("#qntd-"+id).text(qntdAtual + 1)
    },

    // adicionar ao carrinho o item do menu
    adicionarAoCarrinho: (id) => {

        let qntdAtual = parseInt($("#qntd-"+id).text());

        if (qntdAtual > 0) {

            // obter a cartegoria ativa
            var categoria = $(".container-menu a.active").attr('id').split('menu-')[1];

            // obtem a lista de itens
            let filtro = MENU[categoria];

            // obtem o item 
            let item = $.grep(filtro, (e, i) => { return e.id == id })

            if (item.length > 0) {

                // validar se ja existe esse item no carrinho
                let existe = $.grep(MEU_CARRINHO, (elem, index) => { return elem.id == id })

                // caso ja exista, so altera a quantidade
                if( existe.length > 0) {

                    let objIndex = MEU_CARRINHO.findIndex((obj => obj.id == id));
                    MEU_CARRINHO[objIndex].qntd =  MEU_CARRINHO[objIndex].qntd + qntdAtual;

                } else {

                    item[0].qntd = qntdAtual;
                    MEU_CARRINHO.push(item[0])
                }

                cardapio.metodos.mensagem('Item adicionado ao carrinho', 'green');
                $("#qntd-"+id).text(0)
                
                cardapio.metodos.atualizarBadgeTotal();
            }

        }

    },

    // atualiza badge de totais de itens nos botoes do carrinho (botao de carrinho do topo da pagina 
    // e botao fixo que aparece quando existe pelo menos um iten no carringho)
    atualizarBadgeTotal: () => {

        var total = 0;

        $.each(MEU_CARRINHO, (i, e) => {

            total += e.qntd;
        })

        if(total > 0) {

            $(".botao-carrinho").removeClass('hidden')
            $(".container-total-carrinho").removeClass('hidden')
        } else {

            $(".botao-carrinho").addClass('hidden')
            $(".container-total-carrinho").addClass('hidden')
        }

        $('.badge-total-carrinho').html(total);

    },

    // abrir ou fechar modal do carrrinho
    abrirCarrinho: (abrir) => {

        if(abrir) {

            $('#modalCarrinho').removeClass('hidden');
            cardapio.metodos.carregarCarrinho();
        } else {

            $('#modalCarrinho').addClass('hidden');
        }

    },

    // altera os texto e exibe os botoes das etapas do carrinho
    carregarEtapa: (etapa) => {

        if ( etapa == 1) {

            $("#lblTituloEtapa").text('Seu carrinho: ')
            $("#itensCarrinho").removeClass('hidden')
            $("#localEntrega").addClass('hidden')
            $("#resumoCarrinho").addClass('hidden')

            $(".etapa").removeClass('active');
            $(".etapa1").addClass('active');

            $("#btnEtapaPedido").removeClass('hidden')
            $("#btnEtapaEndereco").addClass('hidden')
            $("#btnEtapaResumo").addClass('hidden')
            $("#btnVoltar").addClass('hidden')
        }

        if ( etapa == 2) {
            
            $("#lblTituloEtapa").text('Endereço de entrega: ')
            $("#itensCarrinho").addClass('hidden')
            $("#localEntrega").removeClass('hidden')
            $("#resumoCarrinho").addClass('hidden')

            $(".etapa").removeClass('active');
            $(".etapa1").addClass('active');
            $(".etapa2").addClass('active');

            $("#btnEtapaPedido").addClass('hidden')
            $("#btnEtapaEndereco").removeClass('hidden')
            $("#btnEtapaResumo").addClass('hidden')
            $("#btnVoltar").removeClass('hidden')
        }

        if ( etapa == 3) {
            
            $("#lblTituloEtapa").text('Resumo pedido: ')
            $("#itensCarrinho").addClass('hidden')
            $("#localEntrega").addClass('hidden')
            $("#resumoCarrinho").removeClass('hidden')

            $(".etapa").removeClass('active');
            $(".etapa1").addClass('active');
            $(".etapa2").addClass('active');
            $(".etapa3").addClass('active');

            $("#btnEtapaPedido").addClass('hidden')
            $("#btnEtapaEndereco").addClass('hidden')
            $("#btnEtapaResumo").removeClass('hidden')
            $("#btnVoltar").removeClass('hidden')
        }

    },

    // voltar etapa do carrinho de compra
    voltarEtapa: () => {

        let etapa = $(".etapa.active").length;
        cardapio.metodos.carregarEtapa(etapa - 1)

    },

    // carrega a lista de itens do carrinho
    carregarCarrinho: () => {

        cardapio.metodos.carregarEtapa(1);

        if(MEU_CARRINHO.length > 0) {

            $("#itensCarrinho").html('');

            $.each(MEU_CARRINHO, (i, e) => {

                let temp = cardapio.templates.itemCarrinho.replace(/\${img}/g, e.img)
                                                            .replace(/\${nome}/g, e.name)
                                                            .replace(/\${preco}/g, e.price.toFixed(2).replace('.',','))
                                                            .replace(/\${id}/g, e.id)
                                                            .replace(/\${qntd}/g, e.qntd);

                $("#itensCarrinho").append(temp);

                if((i + 1) == MEU_CARRINHO.length) {
                    // atualiza valores totais do carrinho
                    cardapio.metodos.carregarValores()
                } 
            })          

        } else {

            $("#itensCarrinho").html('<p class="carrinho-vazio"><i class="fa fa-shopping-bag"></i> Seu carrinho esta vazio</p>');
            // atualiza valores totais do carrinho
            cardapio.metodos.carregarValores()
        }

    },

    // diminuir quantidade do item no carrinho
    diminuirQuantidadeCarrinho: (id) => {

        console.log("fui chamado")

        let qntdAtual = parseInt($("#qntd-carrinho-"+id).text());

        if(qntdAtual > 1) {

            $("#qntd-carrinho-"+id).text(qntdAtual - 1);
            cardapio.metodos.atualizarCarrinho(id, qntdAtual - 1);
        } else {

            cardapio.metodos.removerItemCarrinho(id);
        }

    },

    // aumentar quantidade do item no carrinho
    aumentarQuantidadeCarrinho: (id) => {

        let qntdAtual = parseInt($("#qntd-carrinho-"+id).text());

        $("#qntd-carrinho-"+id).text(qntdAtual + 1);
        cardapio.metodos.atualizarCarrinho(id, qntdAtual + 1);

    },


    // botao remover item do carrinho
    removerItemCarrinho: (id) => {

        MEU_CARRINHO = $.grep(MEU_CARRINHO, (e, i) => { return e.id != id });
        cardapio.metodos.carregarCarrinho();

        // atualiza o botao carrinho com a quantidade atualizada
        cardapio.metodos.atualizarBadgeTotal();
    },

    // atualiza o carrinho com a quantidade atual
    atualizarCarrinho:(id, qntd) => {

        let objIndex = MEU_CARRINHO.findIndex((obj => obj.id == id))
        MEU_CARRINHO[objIndex].qntd = qntd;


        // atualiza o botao carrinho com a quantidade atualizada
        cardapio.metodos.atualizarBadgeTotal();

        // atualiza valores totais do carrinho
        cardapio.metodos.carregarValores()

    },

    // carrega os valores de subtotal, entrega e total
    carregarValores: () => {

        VALOR_CARRINHO = 0;

        $("#lblSubTotal").text("R$ 0,00")
        $("#lblValorEntraga").text("+ R$ 0,00")
        $("#lblValorTotal").text("R$ 0,00")

        $.each(MEU_CARRINHO, (i, e) => {

            VALOR_CARRINHO += parseFloat(e.price * e.qntd);

            if((i + 1) == MEU_CARRINHO.length ) {

                $("#lblSubTotal").text(`R$ ${VALOR_CARRINHO.toFixed(2).replace('.', ',')}`)
                $("#lblValorEntraga").text(` + R$ ${VALOR_ENTREGA.toFixed(2).replace('.', ',')}`)
                $("#lblValorTotal").text(`R$ ${(VALOR_CARRINHO+VALOR_ENTREGA).toFixed(2).replace('.', ',')}`)
            }

        })

    },

    carregarEndereco: () => {

        if(MEU_CARRINHO.length <= 0) {

            cardapio.metodos.mensagem('seu carrinho esta vazio')
            return;
        }

        cardapio.metodos.carregarEtapa(2);

    },

    buscarCep: () => {

        // cria a variavel com o valor do cep
        var cep = $("#txtCep").val().trim().replace(/\D/g, '');

        // verifica se o cep possui valor informado
        if (cep != "") {

            // expressao regular para validar cep
            var validacep = /^[0-9]{8}$/;

            if(validacep.test(cep)) {

                $.getJSON("https://viacep.com.br/ws/"+cep+"/json/?callback=?",function(dados) {

                    if(!("erro" in dados)) {

                        // atualizar os campos com os valores retornado
                        $("#txtEndereco").val(dados.logradouro);
                        $("#txtBairro").val(dados.bairro);
                        
                        $("#txtCidade").val(dados.localidade);
                        $("#ddlUF").val(dados.uf);

                        $("#txtNumero").focus();

                    } else {

                        cardapio.metodos.mensagem('cep nao encontrado, preencha as informações manualmente');
                        $("#txtCep").focus();
                    }

                })

            } else {

                cardapio.metodos.mensagem('Formato do cep invalido');
                $("#txtCep").focus();
            }

        } else {

            cardapio.metodos.mensagem("Informe o cep, por favor");
            $("#txtCep").focus();
        }

    },

    // validacao antes de prosseguir para etapa 3
    resumoPedido: () => {

        let cep = $("#txtCep").val().trim();
        let endereco = $("#txtEndereco").val().trim();
        let bairro = $("#txtBairro").val().trim();
        let cidade = $("#txtCidade").val().trim();
        let uf = $("#ddlUF").val().trim();
        let numero = $("#txtNumero").val().trim();
        let complemento = $("#txtComplemento").val().trim();

        if(cep.length <= 0) {
            cardapio.metodos.mensagem('Informe o cep por favor');
            $("#txtCep").focus()
            return;
        }

        if(endereco.length <= 0) {
            cardapio.metodos.mensagem('Informe o endereco por favor');
            $("#txtEndereco").focus()
            return;
        }

        if(bairro.length <= 0) {
            cardapio.metodos.mensagem('Informe o bairro por favor');
            $("#txtBairro").focus()
            return;
        }

        if(cidade.length <= 0) {
            cardapio.metodos.mensagem('Informe a cidade por favor');
            $("#txtCidade").focus()
            return;
        }

        if(uf == '-1') {
            cardapio.metodos.mensagem('Informe a uf por favor');
            $("#ddlUF").focus()
            return;
        }

        if(numero.length <= 0) {
            cardapio.metodos.mensagem('Informe o numero por favor');
            $("#txtNumero").focus()
            return;
        }

        if(complemento.length <= 0) {
            cardapio.metodos.mensagem('Informe o complemento por favor');
            $("#txtComplemento").focus()
            return;
        }

        MEU_ENDERECO = {
            cep: cep,
            endereco: endereco,
            bairro: bairro,
            cidade: cidade,
            uf: uf,
            numero: numero,
            complemento: complemento
        }

        cardapio.metodos.carregarEtapa(3);

        cardapio.metodos.carregarResumo();

    },

    // carrega a etapa de resumo do pedido
    carregarResumo: () => {

        $("#listaItensResumo").html('')

        $.each(MEU_CARRINHO, (i, e) => {

            let temp = cardapio.templates.itemResumo.replace(/\${img}/g, e.img)
                                        .replace(/\${nome}/g, e.name)
                                        .replace(/\${preco}/g, e.price.toFixed(2).replace('.',','))
                                        .replace(/\${qntd}/g, e.qntd);

            $("#listaItensResumo").append(temp)
        });

        $("#resumoEndereco").html(`${MEU_ENDERECO.endereco}, ${MEU_ENDERECO.numero}, ${MEU_ENDERECO.bairro}`)
        $("#cidadeEndereco").html(`${MEU_ENDERECO.cidade} - ${MEU_ENDERECO.uf} / ${MEU_ENDERECO.cep} - ${MEU_ENDERECO.complemento}`)

        cardapio.metodos.finalizarPedido();

    },

    // atualiza o link do botao do whatsapp
    finalizarPedido: () => {

        if(MEU_CARRINHO.length > 0 && MEU_ENDERECO != null) {

            var texto = `Ola gostario de fazer um pedido: `;
            texto += `\n*Itens do pedido:*\n\n\${itens}`;
            texto += `\n*Endereço de entrega:*`;
            texto += `\n${MEU_ENDERECO.endereco}, ${MEU_ENDERECO.numero}, ${MEU_ENDERECO.bairro}`;
            texto += `\n${MEU_ENDERECO.cidade}-${MEU_ENDERECO.uf} / ${MEU_ENDERECO.cep} ${MEU_ENDERECO.complemento}`;
            texto += `\n\n*Total (com entrega) : R$ ${(VALOR_CARRINHO + VALOR_ENTREGA).toFixed(2).replace('.', ',')}*`;

            var itens = '';

            $.each(MEU_CARRINHO, (i, e) => {

                itens += `*${e.qntd}x* ${e.name} ....... R$ ${e.price.toFixed(2).replace('.', ',')} \n`;

                if((i + 1) == MEU_CARRINHO.length) {

                    texto = texto.replace(/\${itens}/g, itens);

                    // converte a url
                    let encode = encodeURI(texto);
                    let URL = `https://wa.me/${CELULAR_EMPRESA}?text=${encode}`;

                    $("#btnEtapaResumo").attr('href', URL)
                }

            })

        }

    },


    // carrega o link do botao reserva
    carregarBotaoReserva: () => {

        var texto = 'Ola! gostaria de fazer uma *reserva*';

        let encode = encodeURI(texto);
        let URL = `https://wa.me/${CELULAR_EMPRESA}?text=${encode}`;

        $("#btnReserva").attr('href', URL)

    },

    // toast de mensagem parametrizado
    mensagem: (texto, cor = 'red', tempo = 3500) => {

        let id = Math.floor(Date.now() * Math.random()).toString();

        let msg = `<div id="msg-${id}" class="animated fadeInDown toast ${cor}">${texto}</div>`

        $('#container-mensagens').append(msg);

        setTimeout(() => {
            $('#msg-'+id).removeClass('fadeInDown');
            $('#msg-'+id).addClass('fadeOutUp');
            setTimeout(() => {
                $('#msg-'+id).remove();
            }, 800)
        }, tempo)

    }

}

cardapio.templates = {

    item: `
        <div class="col-3 mb-5">
            <div class="card card-item" id="\${id}">
                <div class="img-produto">
                    <img src="\${img}" />
                </div>
                <p class="title-produto text-center mt-4">
                    <b>\${nome}</b>
                </p>
                <p class="price-produto text-center">
                    <b>R$ \${preco}</b>
                </p>
                <div class="add-carrinho">
                    <span class="btn-menos" onclick="cardapio.metodos.diminuirQuantidade('\${id}')"><i class="fas fa-minus"></i></span>
                    <span class="add-numero-itens" id="qntd-\${id}" >0</span>
                    <span class="btn-mais" onclick="cardapio.metodos.aumentarQuantidade('\${id}')"><i class="fas fa-plus"></i></span>
                    <span class="btn btn-add" onclick="cardapio.metodos.adicionarAoCarrinho('\${id}')"><i class="fas fa-shopping-bag"></i></span>
                </div>
            </div>
        </div>
    `,

    itemCarrinho: `
        <div class="col-12 item-carrinho">
            <div class="img-produto">
                <img src="\${img}" />
            </div>
            <div class="dados-produto">
                <p class="title-produto"><b>\${nome}</b></p>
                <p class="price-produto"><b>R$ \${preco}</b></p>
            </div>
            <div class="add-carrinho">
                <span class="btn-menos" onclick="cardapio.metodos.diminuirQuantidadeCarrinho('\${id}')"> <i class="fas fa-minus"></i> </span>
                <span class="add-numero-itens" id="qntd-carrinho-\${id}" >\${qntd}</span>
                <span class="btn-mais" onclick="cardapio.metodos.aumentarQuantidadeCarrinho('\${id}')"><i class="fas fa-plus"></i></span>
                <span class="btn btn-remove" onclick="cardapio.metodos.removerItemCarrinho('\${id}')"><i class="fas fa-times"></i></span>
            </div>
        </div>
    `,

    itemResumo: `
        <div class="col-12 item-carrinho resumo">
            <div class="img-produto-resumo">
                <img src="\${img}" />
            </div>
            <div class="dados-produto">
                <p class="title-produto-nome">
                    <b>\${nome}</b>
                </p>
                <p class="price-produto-nome">
                    <b>R$ \${preco}</b>
                </p>
            </div>
            <p class="quantidade-produto-resumo">
                x <b>\${qntd}</b>
            </p>
        </div>
    `

}