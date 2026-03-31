 const form = document.getElementById("formSala");
        const mensagem = document.getElementById("mensagem");

        form.addEventListener("submit", function(e) {
            e.preventDefault();

            const sala = {
                nome: document.getElementById("nome").value,
                capacidade: document.getElementById("capacidade").value,
                tipo: document.getElementById("tipo").value
            };

            // Validação simples
            if (sala.nome === "" || sala.capacidade === "" || sala.tipo === "") {
                mensagem.textContent = "Preencha todos os campos!";
                mensagem.style.color = "red";
                return;
            }

            let salas = JSON.parse(localStorage.getItem("salas")) || [];

            salas.push(sala);

            localStorage.setItem("salas", JSON.stringify(salas));

            mensagem.textContent = "Sala salva com sucesso!";
            mensagem.style.color = "green";

            form.reset();

            setTimeout(() => {
                mensagem.textContent = "";
            }, 3000);
        });
        console.log("JS SALAS OK");