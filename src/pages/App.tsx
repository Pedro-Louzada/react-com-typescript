import React, {useState} from 'react';
import Cronometro from '../componentes/Cronometro';
import Formulario from '../componentes/Formulario';
import Lista from '../componentes/Lista';
import { ITarefa } from '../types/tarefas';
import style from './app.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionarTarefa(tarefaSelecionado: ITarefa){
    setSelecionado(tarefaSelecionado);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionado.id ? true : false
    })))
  }
  function finalizarTarefa(){
    if (selecionado){
      setSelecionado(undefined)
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa =>{
        if(tarefa.id === selecionado.id){
          return{
            ...tarefa,
            selecionado: false,
            completado:true
          }
        } 
        return tarefa;
      }))
    }
  }
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista 
        tarefas={tarefas}
        selecionarTarefa={selecionarTarefa}
      />
      <Cronometro  finalizarTarefa={finalizarTarefa} selecionado={selecionado}/>
    </div>
  );
}

export default App;
