 const selectSessao = document.getElementById("sessao");
        const form = document.getElementById("formVenda");
        const mensagem = document.getElementById("mensagem");

        // Carregar sessões
        function carregarSessoes() {
            let sessoes = JSON.parse(localStorage.getItem("sessoes")) || [];

            selectSessao.innerHTML = '<option value="">Selecione uma sessão</option>';

            sessoes.forEach((sessao, index) => {
                const option = document.createElement("option");
                option.value = index;
                option.textContent = `${sessao.filme} - ${sessao.sala} - ${sessao.dataHora}`;
                selectSessao.appendChild(option);
            });
        }

        carregarSessoes();

       //sessoes
        const sessaoSelecionada = localStorage.getItem("sessaoSelecionada");

        if (sessaoSelecionada !== null) {
    selectSessao.value = sessaoSelecionada;
}
        //  Confirmar venda
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            const sessoes = JSON.parse(localStorage.getItem("sessoes")) || [];

            const venda = {
                sessao: sessoes[selectSessao.value],
                nomeCliente: document.getElementById("nomeCliente").value,
                cpf: document.getElementById("cpf").value,
                assento: document.getElementById("assento").value,
                pagamento: document.getElementById("pagamento").value
            };

            if (!venda.sessao) {
                mensagem.textContent = "Selecione uma sessão!";
                mensagem.style.color = "red";
                return;
            }

            let vendas = JSON.parse(localStorage.getItem("vendas")) || [];

            vendas.push(venda);

            localStorage.setItem("vendas", JSON.stringify(vendas));

            mensagem.textContent = "Venda realizada com sucesso!";
            mensagem.style.color = "green";

            form.reset();

            setTimeout(() => {
                mensagem.textContent = "";
            }, 3000);
        });
