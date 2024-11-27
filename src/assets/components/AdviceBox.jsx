import { useEffect, useState } from "react"
import { AdviceButton } from "./AdviceButton";
import { useScreenWidth } from "../../hooks/useScreenWidth";
import { AdviceNumber } from "./AdviceNumber";
import { AdviceQuote } from "./AdviceQuote";

export const AdviceBox = () => {

  const [advice, setAdvice] = useState({});
  const width = useScreenWidth();

  const newAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const json = await response.json();
      setAdvice(prev => json.slip);
    }
    catch (error) {
      console.log(error)
    }
  }
  

  // grab new advice on load
  useEffect(() => {
    newAdvice();
  }, []);

  return (
    <section className="rounded-xl bg-dark-grayish-blue relative flex flex-col p-10 items-center gap-6 lg:gap-10 h-fit text-center max-w-[540px] w-full shadow-2xl">
      <AdviceNumber {...advice} />
      <AdviceQuote {...advice} />
      <img src={`images/pattern-divider-${width}.svg`} alt="dice icon" className="mb-8"/>
      <AdviceButton onClick={newAdvice}/>
    </section>
  )
}