import style from './Exchanger.module.css';
import './../../wrapper.css';
import { useEffect} from 'react';

const Exchanger = ({ openedSelect, setOpenedSelect, inputFirstValue, setInputFirstValue, inputFirstCurrenct, setInputFirstCurrenct, setFirstInputFocus, setSecondInputFocus, selectRef, selectRefSecond, selectedCurrency, selectedSecondCurrency, openedSelectSecond, setOpenedSelectSecond, inputSecondValue, setInputSecondValue, inputSecondCurrenct, setInputSecondCurrenct }) => {


    // ------- UI
    const open = (e) => setOpenedSelect(!openedSelect);
    const openSecond = (e) => setOpenedSelectSecond(!openedSelectSecond);

    const selectCurrency = (e) => {
        if (inputSecondCurrenct != e.target.innerHTML) {
            setInputFirstCurrenct(e.target.innerHTML);
            setOpenedSelect(!openedSelect);
            Array.from(selectRef.current.children).forEach(el => {
                el.style.color = 'rgb(138, 138, 138)'
            })
            selectedCurrency.current.focus();
        } else {
            e.target.style.color = 'red';
        }
    }
    const selectCurrencySecond = (e) => {
        if (inputFirstCurrenct != e.target.innerHTML) {
            setInputSecondCurrenct(e.target.innerHTML);
            setOpenedSelectSecond(!openedSelectSecond)
            Array.from(selectRefSecond.current.children).forEach(el => {
                el.style.color = 'rgb(138, 138, 138)'
            })
            selectedSecondCurrency.current.focus();
        } else {
            e.target.style.color = 'red';
        }
    }

    useEffect(() => {
        if (openedSelect) {
            selectRef.current.style = 'max-height: 55px; visibility: visible'
        } else {
            selectRef.current.style = 'max-height: 0; visibility: hidden'
        }
        if (openedSelectSecond) {
            selectRefSecond.current.style = 'max-height: 55px; visibility: visible'
        } else {
            selectRefSecond.current.style = 'max-height: 0; visibility: hidden'
        }
    }, [openedSelect, openedSelectSecond])

    // ------- UI

    return (
        <div className={style.main}>
            <div className="wrapper">
                <div className={style.content}>
                    <div className={style.inputBody}>
                        <input ref={selectedCurrency} onFocus={() => setFirstInputFocus(true)} onBlur={() => setFirstInputFocus(false)} onChange={(e) => setInputFirstValue(e.target.value)} className={style.input} type="number" value={inputFirstValue} placeholder="Enter number" />
                        <div className={style.select}>
                            <div onClick={open} className={style.selectHeader}>{inputFirstCurrenct} <div className={style.selectArrow}>{'>'}</div></div>
                            <div ref={selectRef} className={style.selectContent}>
                                <div onClick={selectCurrency}>UAH</div>
                                <div onClick={selectCurrency}>USD</div>
                                <div onClick={selectCurrency}>EUR</div>
                            </div>
                        </div>
                    </div>
                    <div className={style.inputBody}>
                        <input ref={selectedSecondCurrency} onFocus={() => setSecondInputFocus(true)} onBlur={() => setSecondInputFocus(false)} onChange={(e) => setInputSecondValue(e.target.value)} className={style.input} type="number" value={inputSecondValue} placeholder="Enter number" />
                        <div className={style.select}>
                            <div onClick={openSecond} className={style.selectHeader}>{inputSecondCurrenct} <div className={style.selectArrow}>{'>'}</div></div>
                            <div ref={selectRefSecond} className={style.selectContent}>
                                <div onClick={selectCurrencySecond}>UAH</div>
                                <div onClick={selectCurrencySecond}>USD</div>
                                <div onClick={selectCurrencySecond}>EUR</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Exchanger;