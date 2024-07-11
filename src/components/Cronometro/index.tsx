import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './style.module.scss'

export default function Cronometro(){
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card para iniciar o cronômetro</p>

            <div className={style.relogioWrapper}>
                <Relogio/>
            </div>

            <Botao>Começar</Botao>
        </div>
    )
}