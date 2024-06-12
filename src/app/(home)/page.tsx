"use client";
import { Checkbox } from "@nextui-org/react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Step } from "react-joyride";
import { tourSteps } from "~/mocks/tourSteps";

interface State {
  run: boolean;
  sidebarOpen: boolean;
  stepIndex: number;
  steps: Step[];
}

const JoyRideNoSSR = dynamic(() => import("react-joyride"), { ssr: false });

export default function Home() {
  const [{ run, sidebarOpen, stepIndex, steps }, setState] = useState<State>({
    run: false,
    sidebarOpen: false,
    stepIndex: 0,
    steps: tourSteps,
  });

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const checked = localStorage.getItem("isChecked") === "true";
    setIsChecked(checked);
    console.log(checked);
    if (!checked) {
      setState({ run: true, sidebarOpen, stepIndex, steps });
    }
  }, [run, sidebarOpen, stepIndex, steps]);

  const handleCheckbox = () => {
    const newIsChecked = !isChecked;
    setIsChecked(newIsChecked);
    localStorage.setItem("isChecked", String(newIsChecked));
  };
  return (
    <>
      <div className="w-fit h-main mx-auto flex flex-col justify-center">
        <h1 className="font-extrabold text-8xl tracking-tight">
          Bem-vindo ao Vercode.
        </h1>
        <h2 className="font-bold text-5xl tracking-normal leading-normal bg-gradient-to-r from-dark-purple to-light-purple bg-clip-text text-transparent">
          Aprenda programação de um jeito diferente!
        </h2>
        <div className="self-center">
          <Checkbox size="lg" isSelected={isChecked} onChange={handleCheckbox}>
            Não mostrar mais o tour.
          </Checkbox>
        </div>
      </div>
      <div className="grid">
        <JoyRideNoSSR
          continuous
          run={run}
          steps={steps}
          scrollToFirstStep
          showSkipButton
          locale={{
            next: "Próximo",
            back: "Voltar",
            close: "Fechar",
            skip: "Pular",
            last: "Finalizar",
          }}
          styles={{
            options: {
              primaryColor: "#B911F3",
            },
          }}
        />
      </div>
    </>
  );
}
