import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './style.module.scss'

interface CronometroProps{
    tempo:string
}

export default function Cronometro({tempo}:CronometroProps){
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card para iniciar o cronômetro</p>

            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>

            <Botao>Começar</Botao>
        </div>
    )
}