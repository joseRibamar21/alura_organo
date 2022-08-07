import Colaborador from '../Colaborador';
import './Time.css'

export const Time = (props) => {
    const css = {
        backgroundColor: props.corSecundaria
    };
    const h3Color = {borderColor: props.corPrimaria}
    console.log(props.Colaboradores)

    return(
        props.colaboradores.length > 0 && <div className='time' style={css}>
        <h3 style={h3Color}>
            {props.nome}
        </h3 >
        <div className='colaboradores'>
        {props.colaboradores.map(e => <Colaborador key = {e.nome} nome={e.nome} cargo={e.cargo} corDeFundo ={props.corPrimaria}/>)}
        </div>
    </div>
    )
} 