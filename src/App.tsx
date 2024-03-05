import { useEffect, useState } from 'react';
import './App.css'
import Stratagem from './components/stratagem/Stratagem'
import { patrioticAdministrationCenterStratagems } from './stratagems';
import { StratagemInfo, StratagemList } from './types';
import { assetURL } from './util';

const stratagems: StratagemList = {
    ...patrioticAdministrationCenterStratagems
}

function App() {
    const [selectedStratagems, setSelectedStratagems] = useState<string[]>([]);

    useEffect(() => {
        console.log("location: ", window.location.href)
        const queryParams = new URLSearchParams(window.location.search);
        console.log("queryParams: ", queryParams)
    }, []);

    return (
        <div className='container'>
            <div className='title'>
                <img src={assetURL('/stratagems/stratagem-icon.svg')}></img>
                <span>Stratagems</span>
            </div>
            <div className='stratagem-list'>
                {
                    selectedStratagems.length > 0
                        ? selectedStratagems.map(id =>
                            <Stratagem
                                key={`${stratagems[id].name}-selected`}
                                stratagem={stratagems[id]}
                                onClick={() => setSelectedStratagems(previousSelected => previousSelected.filter(strategemId => id !== strategemId))}
                            />)
                        : <span className='info-message'>No stratagems selected.</span>
                }
            </div>

            <div className='title'>
                <span>Patriotic Administration Center</span>
            </div>
            <div className='stratagem-list'>
                {
                    Object.keys(patrioticAdministrationCenterStratagems).map(id => {
                        const stratagem: StratagemInfo = patrioticAdministrationCenterStratagems[id]

                        return <Stratagem
                            key={stratagem.name}
                            stratagem={stratagem}
                            onClick={() => setSelectedStratagems(previousSelected => {
                                const selected = new Set([...previousSelected, id])

                                return [...selected]
                            })}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default App
