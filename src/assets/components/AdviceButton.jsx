import { useEffect, useState } from "react"

export const AdviceButton = ({onClick}) => {

  const [isDisabled, setIsDisabled] = useState(false);

  const colorClass = isDisabled ? "bg-grayish-blue" : "bg-neon-green"
  const loadBarClass = isDisabled ? "animate-loadIn" : ""

  useEffect(() => {
    let timer;
    if (isDisabled) {
      timer = setTimeout(() => {
        setIsDisabled(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isDisabled])

  const handleClick = () => {
    setIsDisabled(true);
    onClick();
  }

  return (
    <button disabled={isDisabled} className={`flex items-center justify-center rounded-full w-16 h-16 absolute left-1/2 -bottom-8 -translate-x-1/2 ${colorClass} overflow-hidden`} onClick={handleClick}>
      <img className="z-20" src="images/icon-dice.svg"></img>
      <div className={`h-24 w-24 absolute bg-neon-green ${loadBarClass}`}></div>
    </button>
  )
}