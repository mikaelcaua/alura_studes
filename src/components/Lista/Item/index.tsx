import ITarefa from '../../../types/ITarefa'

interface ItemProps extends ITarefa {
    selecionarTarefa: (id: number) => void
}

export default function Item({ id, name, time, selected, selecionarTarefa }: ItemProps) {
    return (
        <li 
            className={`item ${selected ? 'itemSelecionado' : ''}`} 
            onClick={(e) => {
                selecionarTarefa(id)
                e.preventDefault()
            }}
        >
            <h3>{name}</h3>
            <span>{time}</span>
        </li>
    )
}
