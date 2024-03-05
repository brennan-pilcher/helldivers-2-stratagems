import { Direction, StratagemInfo } from '../../types'
import { assetURL } from '../../util'
import './Stratagem.css'

const renderCode = (code: Direction[]) => {
    return (
        <div className='stratagem-code'>
            {code.map((direction, index) => {
                return <img key={index} className='stratagem-code-arrow' src={assetURL(`/assets/stratagems/directions/${direction}.png`)}></img>
            })}
        </div>
    )
}

const Stratagem = ({ stratagem, onClick }: { stratagem: StratagemInfo, onClick: () => void; }) => {
    const iconUrl: string = assetURL(`/assets/stratagems/icons/${stratagem.type}/${stratagem.icon}`)

    return (
        <div className='stratagem' onClick={onClick}>
            <img className={`stratagem-icon ${stratagem.outline}-outline`} src={iconUrl}></img>
            <div className='stratagem-info'>
                <span className='stratagem-name'>{stratagem.name}</span>
                {renderCode(stratagem.code)}
            </div>
        </div>
    )
}

export default Stratagem