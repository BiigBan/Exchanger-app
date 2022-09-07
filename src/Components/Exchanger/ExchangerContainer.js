import style from './Exchanger.module.css';
import './../../wrapper.css';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Exchanger from './Exchanger';

const ExchangerContainer = () => {

    // ------- UI
    const [openedSelect, setOpenedSelect] = useState(false);
    const [inputFirstValue, setInputFirstValue] = useState('');
    const [inputFirstCurrenct, setInputFirstCurrenct] = useState('UAH');
    const [firstInputFocus, setFirstInputFocus] = useState(false);
    const [secondInputFocus, setSecondInputFocus] = useState(false);

    const selectRef = useRef(null);
    const selectRefSecond = useRef(null);

    const selectedCurrency = useRef(null);
    const selectedSecondCurrency = useRef(null);

    const [openedSelectSecond, setOpenedSelectSecond] = useState(false);
    const [inputSecondValue, setInputSecondValue] = useState('');
    const [inputSecondCurrenct, setInputSecondCurrenct] = useState('USD');

    // ------- UI

    // ------- FUNCTIONAL
    const [convert, setConvert] = useState(undefined);

    const requestToInfo = (from, to) => {
        return axios.get(`https://api.fastforex.io/fetch-one?from=${from}&to=${to}&api_key=2b8891f92c-076849c92a-rhsubr`).then(
            response => response
        )
    }

    useEffect(() => {
        requestToInfo(inputFirstCurrenct, inputSecondCurrenct).then(
            response => {
                let currency = inputSecondCurrenct;
                setConvert(response.data.result[currency]);
            }
        )
    }, [inputFirstCurrenct, inputSecondCurrenct])

    useEffect(() => {
        if (firstInputFocus) {
            setInputSecondValue(convert * inputFirstValue)
        }
    }, [inputFirstValue, convert])

    useEffect(() => {
        if (secondInputFocus) {
            requestToInfo(inputSecondCurrenct, inputFirstCurrenct).then(
                response => {
                    let currency = inputFirstCurrenct;
                    setConvert(response.data.result[currency]);
                }
            )
            setInputFirstValue(convert * inputSecondValue)
        }
    }, [inputSecondValue, convert])
    // ------- FUNCTIONAL

    return (
        <Exchanger openedSelect={openedSelect}
            setOpenedSelect={setOpenedSelect}
            inputFirstValue={inputFirstValue}
            setInputFirstValue={setInputFirstValue}
            inputFirstCurrenct={inputFirstCurrenct}
            setInputFirstCurrenct={setInputFirstCurrenct}
            setFirstInputFocus={setFirstInputFocus}
            setSecondInputFocus={setSecondInputFocus}
            selectRef={selectRef}
            selectRefSecond={selectRefSecond}
            selectedCurrency={selectedCurrency}
            selectedSecondCurrency={selectedSecondCurrency}
            openedSelectSecond={openedSelectSecond}
            setOpenedSelectSecond={setOpenedSelectSecond}
            inputSecondValue={inputSecondValue}
            setInputSecondValue={setInputSecondValue}
            inputSecondCurrenct={inputSecondCurrenct}
            setInputSecondCurrenct={setInputSecondCurrenct} />
    )
}

export default ExchangerContainer;