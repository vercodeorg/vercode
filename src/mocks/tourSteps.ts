import { Step } from "react-joyride";

export const tourSteps: Step[] = [
    {
        content: "Clique no botão proximo para ver os passos a seguir ou fechar para encerrar o tutorial.",
        placement: "center",
        target: "body",
        title: "Aqui começa o seu tour! 👋"
    },
    {
        content: "Aqui é onde ficarão seus níveis, dentro de cada nível tem seus respectivos projetos",
        placement: "right",
        target: ".levels",
        title: "Levels"
    },
    {
        content: "Ao clicar no icone de levels, você verá um nível desbloqueado, com todos os projetos e exercícios necessários para aprender a usar a plataforma. Isso também te dará pontos 😉",
        placement: "right",
        target: ".levels",
        title: "Como iniciar um level"
    },
    {
        content: "Aqui é onde fica todos os seus projetos independente do seus níveis, você pode acessá-los quando quiser clicando no ícone!",
        placement: "right",
        target: ".projects",
        title: "Projects"
    },
    {
        content: "Aqui é seu perfil, clicando no ícone será possível ver seu progresso, pontos e moedas que já ganhou com os exercícios!",
        placement: "right",
        target: ".user",
        title: "Página de Usuário"
    },
    {
        content: "Além da página de usuário, aqui você sempre poderá ver sua quantidade atual de coins.",
        placement: "bottom",
        target: ".coins",
        title: "Ganhe moedas!"
    },
    {
        content: "Esse foi seu tour aqui na plataforma, marque a caixa se não quiser mais ver esse tutorial. Aproveite o Vercode! 😄",
        placement: "center",
        target: "body",
        title: "Fim do Tour!"
    }
]