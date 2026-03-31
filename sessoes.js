 const lista = document.getElementById("lista");

        function carregarSessoes() {
            let sessoes = JSON.parse(localStorage.getItem("sessoes")) || [];

            lista.innerHTML = "";

            if (sessoes.length === 0) {
                lista.innerHTML = "<p>Nenhuma sessão encontrada.</p>";
                return;
            }

            sessoes.forEach((sessao) => {
                const div = document.createElement("div");
                div.classList.add("sessao");

                div.innerHTML = `
                    <p><strong>Filme:</strong> ${sessao.filme}</p>
                    <p><strong>Sala:</strong> ${sessao.sala}</p>
                    <p><strong>Data e Hora:</strong> ${sessao.dataHora}</p>
                    <p><strong>Preço:</strong> R$ ${sessao.preco}</p>
                `;

                lista.appendChild(div);
            });
        }

        carregarSessoes();