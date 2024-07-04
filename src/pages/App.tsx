import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import style from './style.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>

        <Formulario/>
        <Lista/>

    </div>
    
  );
}

export default App;
