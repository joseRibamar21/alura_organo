import './Colaborador.css'

const Colaborador = ({nome, cargo, corDeFundo}) =>{
    const cabecalhoCss = {
        backgroundColor: corDeFundo
    }

    return(
        <div className='colaborador'>
            <div className='cabecalho' style={cabecalhoCss}>
                <img src='https://github.com/joseRibamar21.png' alt='joseRibamar21'/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador