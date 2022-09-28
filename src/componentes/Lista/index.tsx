import style from './lista.module.scss';
import Item from './Item';
import { ITarefa } from '../../types/tarefas';

interface Props{
  tarefas: ITarefa[],
  selecionarTarefa: (tarefaSelecionado: ITarefa) => void
}

function Lista({tarefas, selecionarTarefa}: Props){
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((acao)=> (
                  <Item
                    selecionarTarefa={selecionarTarefa}
                    key={acao.id}
                    {...acao}
                  />
                ))}
               
            </ul>
        </aside>
    )
}

export default Lista;