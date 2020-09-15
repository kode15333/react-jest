import React from 'react';
import {useChecks} from "./components/useChecks";

function App() {
           const [isAllChecked, renderChecks] = useChecks(labels)

  return (
      <div>
        {renderChecks()}
        <p>
          <button disabled={!isAllChecked}>다음</button>
        </p>
      </div>
  );
}

export default App;

const labels = ['check 1', 'check 2', 'check 3']

