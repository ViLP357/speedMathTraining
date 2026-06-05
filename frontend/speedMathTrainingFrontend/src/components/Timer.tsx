import { useEffect } from "react";
import type { TimerProps } from "../types";
import style from '../mystyle.module.css'; 

const Timer = ({seconds, setSeconds} : TimerProps) => {
    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(prev => prev+1);
        }, 1000)
        return () => clearInterval(timer)    
    }, [setSeconds])

    const min = Math.floor(seconds/60)
    const sec = seconds%60

    return (
        <div className = {style.timer}>
            {min.toString().padStart(2, "0")}:{sec.toString().padStart(2, "0")}
        </div>
    )
}

export default Timer