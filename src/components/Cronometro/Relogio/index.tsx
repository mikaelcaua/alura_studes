import style from './style.module.scss'

interface RelogioProps{
    tempo:string
}

export default function Relogio({tempo}:RelogioProps){
    return(
        <>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
        </>
    )
}