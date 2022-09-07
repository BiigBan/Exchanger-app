import style from './Footer.module.css';
import './../../wrapper.css';

const Footer = () => {

    return (
        <div className={style.footer}>
            <div className="wrapper">
                <div className={style.content}>
                <a href="https://github.com/BiigBan" target='_blank'>GitHub</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;