import { Direction, StratagemInfo } from '../../types'
import './Stratagem.css'

const renderCode = (code: Direction[]) => {
    return (
        <div className='stratagem-code'>
            {code.map((direction, index) => {
                return <img key={index} className='stratagem-code-arrow' src={`/assets/stratagems/directions/${direction}.png`}></img>
            })}
        </div>
    )
}

const Stratagem = ({ stratagem, onClick }: { stratagem: StratagemInfo, onClick: () => void; }) => {
    
    return (
        <div className='stratagem' onClick={onClick}>
            <img className={`stratagem-icon ${stratagem.outline}-outline`} src={`/assets/stratagems/icons/${stratagem.type}/${stratagem.icon}`}></img>
            <div className='stratagem-info'>
                <span className='stratagem-name'>{stratagem.name}</span>
                {renderCode(stratagem.code)}
            </div>
        </div>
    )
}

export default Stratagem