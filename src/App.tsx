import { useEffect, useState } from 'react';
import './App.css'
import Stratagem from './components/stratagem/Stratagem'
import { orbitalCannonsStratagems, patrioticAdministrationCenterStratagems } from './stratagems';
import { StratagemDisplayMode, StratagemInfo, StratagemSection } from './types';
import { assetURL, getQueryParams, updateQueryParams } from './util';
import StratagemList from './components/stratagemList/StratagemList';

const stratagems: StratagemSection = {
    ...patrioticAdministrationCenterStratagems,
    ...orbitalCannonsStratagems
}

function App() {
    const [selectedStratagems, setSelectedStratagems] = useState<string[]>([]);

    useEffect(() => {
        const ids: string[] = getQueryParams().filter(id => stratagems[id] !== undefined)

        updateQueryParams(ids)
        setSelectedStratagems(ids)
    }, []);

    return (
        <div className='container'>
            <div className='header'>
                <div className='title bg-light'>
                    <img src={assetURL('/stratagems/stratagem-icon.svg')}></img>
                    <span>Stratagems</span>
                </div>
                <span className='material-symbols-outlined'>search</span>
            </div>

            <div className='stratagem-list bg-light'>
                {
                    selectedStratagems.length > 0
                        ? selectedStratagems.map(id =>
                            <Stratagem
                                key={`${stratagems[id].name}-selected`}
                                stratagem={stratagems[id]}
                                mode={StratagemDisplayMode.FULL}
                                onClick={
                                    () => setSelectedStratagems(previousSelected => {
                                        const selected: string[] = previousSelected.filter(strategemId => id !== strategemId)

                                        updateQueryParams(selected)

                                        return selected
                                    })
                                }
                            />)
                        : <span className='info-message'>No stratagems selected.</span>
                }
            </div>

            <div className='all-stratagems-container bg-dark'>
                <StratagemList
                    name={'Patriotic Administration Center'}
                    stratagems={patrioticAdministrationCenterStratagems}
                    selectedStratagems={selectedStratagems}
                    setSelectedStratagems={setSelectedStratagems}
                />
                <StratagemList
                    name={'Orbital Cannon'}
                    stratagems={orbitalCannonsStratagems}
                    selectedStratagems={selectedStratagems}
                    setSelectedStratagems={setSelectedStratagems}
                />
            </div>
        </div>
    )
}

export default App