import Cronometro from "../components/Cronometro"
import Formulario from "../components/Formulario"
import Lista from "../components/Lista"
import style from './style.module.scss'
import { useState, useEffect } from 'react'
import ITarefa from '../types/ITarefa'

function App() {
    const [tarefas, setTarefas] = useState<ITarefa[]>([
        {
            id: 1,
            name: 'React',
            time: '01:00:00',
            selected: false,
            completed: false  
        },
        {
            id: 2,
            name: 'Java',
            time: '01:30:00',
            selected: false,
            completed: false  
        }
    ])

    const selecionarTarefa = (id: number) => {
        setTarefas(prevTarefas =>
            prevTarefas.map(tarefa =>
                tarefa.id === id ? { ...tarefa, selected: !tarefa.selected } : { ...tarefa, selected: false }
            )
        )
        setTempo('01:00:00')
    }

    let [tempo,setTempo] = useState<string>('00:00:00')
    useEffect(() => {
        console.log(tarefas)
        
    }, [tarefas])


    return (
        <div className={style.AppStyle}>
            <Formulario setTarefas={setTarefas} />
            <Lista tarefas={tarefas} selecionarTarefa={selecionarTarefa} />
            <Cronometro  tempo={tempo}/>
        </div>
    )
}

export default App
