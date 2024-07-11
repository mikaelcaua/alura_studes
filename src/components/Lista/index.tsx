import Item from './Item';
import './style.scss';
import ITarefa from '../../types/ITarefa';

interface ListaProps {
    tarefas: ITarefa[];
    selecionarTarefa: (id: number) => void;
}

export default function Lista({ tarefas, selecionarTarefa }: ListaProps) {
    return (
        <aside className="listaTarefas">
            <h2>Tarefas do dia</h2>
            <ul>
                {tarefas.map(tarefa => {
                    return <Item key={tarefa.id} {...tarefa} selecionarTarefa={selecionarTarefa} />;
                })}
            </ul>
        </aside>
    );
}
