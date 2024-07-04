import './style.scss'

export default function Lista(){
    

    const tarefas = [
        {
            name:'React',
            time:'01:00:00'
        },
        {
            name:'Java',
            time:'01:30:00'
        }
    ]

    return(
        <aside className="listaTarefas">
            <h2>Tarefas do dia</h2>

            <ul>
                {tarefas.map((t,index) => {
                    return <li key={index} className='item'>
                                <h3>{t.name}</h3>
                                <span>{t.time}</span>
                            </li>
                })}
            </ul>
        </aside>
    )
}