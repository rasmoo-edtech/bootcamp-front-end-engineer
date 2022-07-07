function Aluno(nome, disciplinas) {
    this.nome = nome;
    this.disciplinas = disciplinas;
}

function Escola(nome, alunos) {
    this.nome = nome;
    this.alunos = alunos;
}

const a1 = new Aluno('Sergio', ['HTML', 'CSS']);
const a2 = new Aluno('Rafael', ['JS', 'HTML']);
const a3 = new Aluno('Fernando Franco', ['JAVA', 'NODE']);
const a4 = new Aluno('Fernando Nascimento', ['PHP', 'SQL']);
const a5 = new Aluno('Jefferson', ['ELIXIR', 'GO']);
const a6 = new Aluno('Pedro', ['JAVA', 'C#']);

const e1 = new Escola('Rasmoo', [a1, a2, a3, a4]);
const e2 = new Escola('Rasmoo Club', [a5, a6]);

const escolas = [e1, e2];

// 1) Retorne um array contendo somente os nomes das escolas
const nomesEscolas = escolas.map((escola) => {
    return escola.nome;
});

console.log('Nomes Escolas: ', nomesEscolas);

// 2) Retorne um array contendo somente os nomes de todos os alunos de todas as escolas
const nomesAlunos = escolas.flatMap((escola) => {
    return escola.alunos;
}).map((aluno) => {
    return aluno.nome;
});

console.log('Nomes Alunos: ', nomesAlunos);

// 3) Retorne um array contendo somente os nomes de todas as disciplinas de todas as escolas
const alunosDisciplinas = escolas.flatMap((escola) => {
    return escola.alunos;
}).flatMap((aluno) => {
    return aluno.disciplinas;
});

console.log('Disciplinas: ', alunosDisciplinas);