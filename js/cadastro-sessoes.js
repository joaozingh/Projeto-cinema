 
 const selectFilme = document.getElementById("filme");
        const selectSala = document.getElementById("sala");
        const form = document.getElementById("formSessao");
        const mensagem = document.getElementById("mensagem");

        //  Carregar filmes
        function carregarFilmes() {
            let filmes = JSON.parse(localStorage.getItem("filmes")) || [];

            selectFilme.innerHTML = '<option value="">Selecione um filme</option>';

            filmes.forEach((filme, index) => {
                const option = document.createElement("option");
                option.value = index;
                option.textContent = filme.titulo;
                selectFilme.appendChild(option);
            });
        }

        //  Carregar salas
        function carregarSalas() {
            let salas = JSON.parse(localStorage.getItem("salas")) || [];

            selectSala.innerHTML = '<option value="">Selecione uma sala</option>';

            salas.forEach((sala, index) => {
                const option = document.createElement("option");
                option.value = index;
                option.textContent = sala.nome;
                selectSala.appendChild(option);
            });
        }

        //  Ao carregar a página
        carregarFilmes();
        carregarSalas();

        //  Salvar sessão
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            const filmes = JSON.parse(localStorage.getItem("filmes")) || [];
            const salas = JSON.parse(localStorage.getItem("salas")) || [];

            const sessao = {
                filme: filmes[selectFilme.value]?.titulo,
                sala: salas[selectSala.value]?.nome,
                dataHora: document.getElementById("dataHora").value,
                preco: document.getElementById("preco").value,
                idioma: document.getElementById("idioma").value,
                formato: document.getElementById("formato").value
            };

            if (!sessao.filme || !sessao.sala) {
                mensagem.textContent = "Selecione filme e sala!";
                mensagem.style.color = "red";
                return;
            }

            let sessoes = JSON.parse(localStorage.getItem("sessoes")) || [];

            sessoes.push(sessao);

            localStorage.setItem("sessoes", JSON.stringify(sessoes));

            mensagem.textContent = "Sessão cadastrada com sucesso!";
            mensagem.style.color = "green";

            form.reset();

            setTimeout(() => {
                mensagem.textContent = "";
            }, 3000);
        });