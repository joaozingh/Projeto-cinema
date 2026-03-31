   const form = document.getElementById("formFilme");

        form.addEventListener("submit", function(e) {
            e.preventDefault();

            // Criando objeto do filme
            const filme = {
                titulo: document.getElementById("titulo").value,
                genero: document.getElementById("genero").value,
                descricao: document.getElementById("descricao").value,
                classificacao: document.getElementById("classificacao").value,
                duracao: document.getElementById("duracao").value,
                data: document.getElementById("data").value
            };

            // Pegando filmes já salvos
            let filmes = JSON.parse(localStorage.getItem("filmes")) || [];

            // Adicionando novo filme
            filmes.push(filme);

            // Salvando no localStorage
            localStorage.setItem("filmes", JSON.stringify(filmes));

            alert("Filme salvo com sucesso!");

            form.reset();
            
        });