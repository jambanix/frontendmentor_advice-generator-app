import { useEffect, useState} from "react"

export const AdviceButton = ({onClick}) => {

  const [isDisabled, setIsDisabled] = useState(true);

  const colorClass = isDisabled ? "bg-grayish-blue" : "bg-neon-green hover:shadow-3xl"
  const loadBarClass = isDisabled ? "animate-loadIn visible" : "hidden"

  // disables button for 3s after being clicked. button disabled for 3 sec on initial render
  useEffect(() => {
    let timer;
    if (isDisabled) {
      timer = setTimeout(() => {
      setIsDisabled(!isDisabled);
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
      <img className="z-20" src="images/icon-dice.svg" alt="dice icon"></img>
      <div className={`h-24 w-24 absolute bg-neon-green ${loadBarClass}`}></div>
    </button>
  )
}