import style from './Header.module.css';
import logo from './../../assets/logo/icons8-bbb-48.svg';
import './../../wrapper.css';

const Header = ({ cache }) => {
    let items = cache.map(el => {
        return <div key={el.id} className={style.exchangerBody}> <div className={style.currency}>{el.cc}</div><div className={style.money}>{el.rate}</div></div>
    })

    return (
        <div className={style.header}>
            <div className="wrapper">
                <div className={style.content}>
                    <div className={style.mainLink}>
                        <img className={style.image} src={logo} alt="logo of web site" />
                    </div>
                    <div className={style.exchanger}>
                        {items}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;