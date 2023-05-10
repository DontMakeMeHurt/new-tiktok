import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBookmark,
    faCircleQuestion,
    faCircleXmark, faCloudUpload, faEarthAsia,
    faEllipsisVertical, faGear, faKeyboard,
    faMagnifyingGlass,
    faSignIn, faSignOut,
    faSpinner, faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import Button from '../../../Button/index';
import { Wrapper as PopperWrapper } from '../../../Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountsItem from '../AccountsItem';
import Menu from '../../../Popper/Menu';
import menu from '../../../Popper/Menu';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Viet Nam',
                },
                {
                    type: 'language',
                    code: 'jp',
                    title: 'Japan',
                },
            ],

        },

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

    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    //handleOnChange

    const handleOnChange = (menuItem) => {
        console.log(menuItem);
    };

    const UserMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Xem hồ sơ ',
        },
        {
            icon: <FontAwesomeIcon icon={faTiktok} />,
            title: 'Nhận xu',
        },
        {
            icon: <FontAwesomeIcon icon={faBookmark} />,
            title: 'Yêu thích',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Cài đặt',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Đăng Xuất',
            separate: true,
        },
    ]

    return (<header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt='logo' />
            </div>
            <HeadlessTippy
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
            </HeadlessTippy>
            <div className={cx('actions')}>

                {currentUser ? (
                    <>
                        <Tippy delay={[0,200]} content="Upload video" placement="bottom">
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faCloudUpload}></FontAwesomeIcon>
                            </button>
                        </Tippy>

                    </>
                ) : (
                    <>
                        <Button text className={cx('upload')}>Tải Lên</Button>
                        <Button primary className={cx('login')} >Đăng Nhập</Button>
                    </>
                )}
                <Menu items={currentUser ? UserMenu : MENU_ITEMS} onChange={handleOnChange}>
                    {currentUser ? (
                        <img className={cx('user-avatar')} src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/86fd7660037e6587340b4cc919516bb5~c5_100x100.jpeg?x-expires=1681912800&x-signature=zZMxam7%2F7y6Qe8242rESGcynMfU%3D' alt='' />
                    ) : (
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    ) }
                </Menu>
            </div>

        </div>
    </header>);
}

export default Header;
