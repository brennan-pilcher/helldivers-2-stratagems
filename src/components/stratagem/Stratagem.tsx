import { Direction, StratagemDisplayMode, StratagemInfo } from '../../types'
import { assetURL } from '../../util'
import './Stratagem.css'

interface StratagemProps {
    stratagem: StratagemInfo;
    mode: StratagemDisplayMode;
    selected?: boolean;
    onClick: () => void;
}

const renderCode = (code: Direction[]) => {
    return (
        <div className='stratagem-code'>
            {code.map((direction, index) => {
                return <img key={index} className='stratagem-code-arrow' src={assetURL(`/stratagems/directions/${direction}.png`)}></img>
            })}
        </div>
    )
}

const Stratagem = ({ stratagem, mode, selected = false, onClick }: StratagemProps) => {
    const fullMode: boolean = mode === StratagemDisplayMode.FULL
    const icon: string = assetURL(`/stratagems/icons/${stratagem.type}/${stratagem.icon}`)
    const selectedCorner: string = assetURL('/corner-check.svg')

    return (
        <div className={`stratagem${fullMode ? '' : '-mini'}`} onClick={onClick}>
            <img className={`stratagem-icon${fullMode ? '' : '-mini'} ${stratagem.outline}-outline`} src={icon}></img>
            <div className={`stratagem-info${fullMode ? '' : '-mini'}`}>
                <span className='stratagem-name'>{stratagem.name}</span>
                {fullMode ? renderCode(stratagem.code) : <></>}
            </div>
            {fullMode ? <></> : <img className={`selected-corner ${selected ? '' : 'hidden'}`} src={selectedCorner}></img>}
        </div>
    )
}

export default Stratagem