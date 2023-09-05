"use client"
import { Checkbox } from "@nextui-org/react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Step } from "react-joyride";

interface State {
  run: boolean;
  sidebarOpen: boolean;
  stepIndex: number;
  steps: Step[];
}

const JoyRideNoSSR = dynamic(
  () => import('react-joyride'),
  { ssr: false }
)

export default function Home() {

  const [isChecked, setIsChecked] = useState(false)
  const [{ run, sidebarOpen, stepIndex, steps }, setState] = useState<State>({
    run: false,
    sidebarOpen: false,
    stepIndex: 0,
    steps: [
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
        content: "Esse foi seu tour aqui na plataforma, marque a caixa se não quiser mais ver esse tutorial. Aproveite o Vercode! 😄",
        placement: "center",
        target: "body",
        title: "Fim do Tour!"
      },

    ]
  })

  function handleCheckbox(){
    localStorage.setItem('isChecked', 'true')
    setIsChecked(true)
  }
  
  useEffect(() => {
    if (localStorage.getItem('isChecked') === 'false') {
      setState({ run: true, sidebarOpen, stepIndex, steps })
    }
  }, [])

  return (
    <div className="h-main grid">
      <JoyRideNoSSR
        continuous
        run={run}
        steps={steps}
        scrollToFirstStep
        showSkipButton
        styles={{
          options: {
            primaryColor: "#B911F3"
          }
        }}
      />
      <div className="w-fit h-full mx-auto justify-self-center">
        <div className="flex flex-col align-middle items-center gap-4">
          <h1 className="font-extrabold text-8xl tracking-tighter">Welcome to Vercode.</h1>
          <h2 className="font-bold text-5xl tracking-normal leading-normal bg-gradient-to-r from-dark-purple to-light-purple bg-clip-text text-transparent">A online plataform to learn code in a different way!</h2>
          <Checkbox size="lg" checked={isChecked} onChange={() => handleCheckbox()}>Não mostrar mais o tour.</Checkbox>
        </div>
      </div>
    </div>
  )
}
