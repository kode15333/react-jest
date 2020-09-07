import React, {useState} from 'react';

const Toggle = (props) => {
    const [state, setState] = useState(false);
    return (
        <button
            onClick={() => {
                setState(prevState => !prevState);
                props.onChange(!state);
            }}
            data-testid="toggle"
        >
            {state === true ? 'Turn Off' : 'Turn On'}
        </button>
    );
};

export default Toggle;
