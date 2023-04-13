import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark, faEarthAsia,
    faEllipsisVertical, faKeyboard,
    faMagnifyingGlass,
    faSignIn,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import Button from '../../../Button/index';
import { Wrapper as PopperWrapper } from '../../../Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountsItem from '../AccountsItem';
import Menu from '../../../Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Hỗ trợ và phản hồi',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt trên bàn phím',
    },
];

function Header() {

    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return (<header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt='logo' />
            </div>
            <Tippy
                interactive
                visible={searchResult.length > 0}
                render={(attrs) => (<div className={cx('search-result')} tabIndex='-1' {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>
                            Accounts
                        </h4>
                        <AccountsItem />
                        <AccountsItem />
                        <AccountsItem />
                    </PopperWrapper>
                </div>)}>
                <div className={cx('search')}>
                    <input placeholder='Tìm kiếm tài khoản và video' spellCheck='false' />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
            <div className={cx('actions')}>
                <Button text>Tải Lên</Button>
                <Button primary>Đăng Nhập</Button>

                <Menu items={MENU_ITEMS}>
                    <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                </Menu>
            </div>
        </div>
    </header>);
}

export default Header;
