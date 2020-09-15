import React, {useState} from 'react';
import {Checks} from "./Checks";

export const useChecks = (labels) => {
    const [checkList, setCheckList] = useState(() => labels.map(() => false))

    const handleCheckClick = (index) => {

        setCheckList((checks) => {
            return checks.map((c, i) => (i === index ? !c : c))})
    }

    const isAllChecked = checkList.every((x) => x)

    const renderChecks = () => (
        <Checks checkList={checkList} labels={labels} onCheck={handleCheckClick} />
    )

    return [isAllChecked, renderChecks]
}
