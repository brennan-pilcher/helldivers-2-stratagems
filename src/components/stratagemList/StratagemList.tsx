import { StratagemDisplayMode, StratagemInfo, StratagemSection } from "../../types"
import { updateQueryParams } from "../../util";
import Stratagem from "../stratagem/Stratagem"


interface StratagemListProps {
    name: string;
    stratagems: StratagemSection;
    selectedStratagems: string[];
    setSelectedStratagems: (value: React.SetStateAction<string[]>) => void;
}

const StratagemList = ({ stratagems, name, selectedStratagems, setSelectedStratagems }: StratagemListProps) => {
    const onClick = (id: string): void => {
        setSelectedStratagems(previousSelected => {
            const selected = [...(new Set([...previousSelected, id]))]
    
            updateQueryParams(selected)
    
            return selected
        })
    }

    return (
        <div className='stratagem-list'>
            <span>{name}</span>
            {
                Object.keys(stratagems).map(id => {
                    const stratagem: StratagemInfo = stratagems[id]

                    return (
                        <Stratagem
                            key={stratagem.name}
                            stratagem={stratagem}
                            mode={StratagemDisplayMode.MINI}
                            selected={selectedStratagems.includes(id)}
                            onClick={() => onClick(id)}
                        />
                    )
                })
            }
        </div>
    )
}

export default StratagemList