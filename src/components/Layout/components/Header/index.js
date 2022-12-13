import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo" />
                </div>
                <div className={cx('search')}>
                    <input placeholder="Search accounts and video" spellCheck="false" />
                    <button>{/* icon close */}</button>
                    {/* loading */}
                    <div className={cx('search-btn')}>{/* icon search */}</div>
                </div>
            </div>
        </header>
    );
}

export default Header;
