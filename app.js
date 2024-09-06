// Realizar uma pesquisa e exibir os resultados
function pesquisar() {
    // Exibir os resultados
    let section = document.getElementById("resultados-pesquisa");
    // E a palavra-chave que o usuário digitou
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Se o usuário não digitou nada, exibe um alerta
    if (!campoPesquisa) {
        section.innerHTML = "<img src=imagens/digiteparaverificar.jpg  class=imagem-resultado>"
        return
    };

    // Converte a palavra-chave em letras minúsculas
    campoPesquisa = campoPesquisa.toLowerCase();

    // Armazenar os resultados da pesquisa
    let resultados = "";
    let nome = "";
    let descricao = "";

    // Itera sobre cada objeto no array 'dados'
    for (let dado of dados) {
        // Converte o nome para minúsculo
        nome = dado.nome.toLocaleLowerCase()
        // Converte a descrição para minúsculo
        descricao = dado.descricao.toLocaleLowerCase()
        // Verifica se contém a palavra-chave de pesquisa
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            // Se a palavra-chave for encontrada, exibi as informações
            resultados += `
            <div class="item-resultado">
                <img src=${dado.imagem} class="imagem-resultado">
                <h2>${dado.nome}</h2>
                <h3>${dado.interprete}</h3>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Para mais informações, clique aqui!</a>
            </div>
        `
        }
    };

    // Se a palavra-chave não for encontrada, exibe um alerta
    if(!resultados) {
        resultados = "<img src=imagens/nadafoiencontrado.jpg class=imagem-resultado>"
    };

    // Exibe os resultados
    section.innerHTML = resultados
};