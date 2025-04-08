import { useState } from 'react';
import Select from 'react-select';

type Option = { value: string; label: string };
const options: Option[] = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

export default function ReactSelect() {
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    return (
        <div className="App">
            <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
            />
        </div>
    );
}