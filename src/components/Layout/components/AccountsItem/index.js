import classNames from "classnames/bind";
import styles from './AccountItem.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);
function AccountsItem() {
    return (
        <div className={cx('wrapper')}>
            <img src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/05aa222706c452c8ad0ea7d2e719a745~c5_100x100.jpeg?x-expires=1675260000&x-signature=gRRRNNOMYiDuj9NYghGM%2FKzgNkE%3D" alt="Hoa" className={cx('avatar')} />
            <div className={cx('info')}>
                 <h4 className={cx('id-account')}>
                     <span>hoaa.hanassii</span>
                     <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                 </h4>
                <span className={cx('user-name')}>Đào Lê Phương Hoa</span>
            </div>
        </div>
    );
}

export default AccountsItem;