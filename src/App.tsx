import { useEffect, useState } from 'react';
import './App.css'
import Stratagem from './components/stratagem/Stratagem'
import { patrioticAdministrationCenterStratagems } from './stratagems';
import { StratagemDisplayMode, StratagemInfo, StratagemList } from './types';
import { assetURL } from './util';

const stratagems: StratagemList = {
    ...patrioticAdministrationCenterStratagems
}

const getQueryParams = (): string[] => {
    console.log("location: ", window.location.href)
    const queryParams: URLSearchParams = new URLSearchParams(window.location.search);

    if (queryParams.has('ids')) {
        const paramString: string = queryParams.get('ids') ?? ''

        return paramString.split(',') ?? []
    } else {
        return []
    }
}

const updateQueryParams = (ids: string[]) => {
    const url = new URL(window.location.href)
    url.searchParams.set('ids', ids.join(','))
    url.search = decodeURIComponent(url.search)

    console.log("setting query params to: ", url.search)
    // window.location.search = queryParams.toString()
    window.history.pushState({}, '', url)
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
                <div className='stratagem-list'>
                <span>Patriotic Administration Center</span>
                {
                    Object.keys(patrioticAdministrationCenterStratagems).map(id => {
                        const stratagem: StratagemInfo = patrioticAdministrationCenterStratagems[id]

                        return <Stratagem
                            key={stratagem.name}
                            stratagem={stratagem}
                            mode={StratagemDisplayMode.MINI}
                            selected={selectedStratagems.includes(id)}
                            onClick={
                                () => setSelectedStratagems(previousSelected => {
                                    const selected = [...(new Set([...previousSelected, id]))]

                                    updateQueryParams(selected)

                                    return selected
                                })
                            }
                        />
                    })
                }
            </div>
            </div>
            
        </div>
    )
}

export default App