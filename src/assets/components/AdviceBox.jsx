import { useEffect, useState } from "react"
import { AdviceButton } from "./AdviceButton";
import { useScreenWidth } from "../../hooks/useScreenWidth";

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
      {advice.id && <p className="text-neon-green uppercase text-center tracking-[2.5px] font-semibold text-sm">ADVICE #{advice.id}</p>}
      {advice.advice && <blockquote className="text-light-cyan text-3xl font-semibold">"{advice.advice}"</blockquote>}
      <img src={`images/pattern-divider-${width}.svg`} alt="" className="mb-8"/>
      <AdviceButton onClick={newAdvice}/>
    </section>
  )
}