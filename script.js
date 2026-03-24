// Entrada de dados
const nome = prompt("Digite seu nome:");
const idade = parseInt(prompt("Digite sua idade:"));
const possuiCadastro = prompt("Possui cadastro? (S/N)").toUpperCase();
const possuiAutorizacao = prompt("Possui autorização especial? (S/N)").toUpperCase();
const estaAcompanhado = prompt("Está acompanhado? (S/N)").toUpperCase();

// Validação inicial
if (possuiCadastro !== "S") {
    console.log("Acesso negado: usuário não cadastrado.");
} else {

    // Maior de idade com cadastro
    if (idade >= 18) {
        console.log(`Acesso liberado. Bem-vindo, ${nome}!`);
    } else {

        // Validação adicional (OR)
        if (idade < 18 || possuiAutorizacao !== "S") {

            // IF Aninhado
            if (estaAcompanhado === "S") {
                console.log("Acesso permitido com restrição: entrada somente com responsável.");
            } else {
                console.log("Acesso negado: menor desacompanhado.");
            }

        } else {
            console.log("Acesso liberado.");
        }
    }
}