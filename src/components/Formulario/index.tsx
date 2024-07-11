import React, { useState } from "react";
import Botao  from "../Botao";
import './style.scss'
import ITarefa from '../../types/ITarefa'

interface FormularioProps{
    setTarefas:any
}

export default function Formulario({setTarefas}:FormularioProps){
    
    
        let [name,setName] = useState<string>('') 
        let [time,setTime] = useState<string>('00:00:00')

        return(
            <form className="novaTarefa" onSubmit={(e)=>{
                    e.preventDefault()
                    
                    setTarefas((antigasTarefas:ITarefa[]) => [...(antigasTarefas), {id:antigasTarefas.length+1,name:name, time:time, selected:false,complected:false}])

                    setName('')
                    setTime('00:00:00')
                }
            }>
                <div className="inputContainer">
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                    <input 
                        type="text" 
                        name="tarefa"
                        id="tarefa"
                        value={name}
                        onChange={e => {
                            setName(e.target.value)
                            console.log(name)}
                        }
                        placeholder="O ue você quer estudar?"
                        required
                    />
                </div>

                <div className="inputContainer">
                    <label htmlFor="tempo">Tempo</label>
                    <input 
                        type="time" 
                        step={1}
                        name="tempo"
                        value={time}
                        onChange={e => setTime(e.target.value)}
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>

                <Botao>Botao</Botao>
            </form>
        )
    }
