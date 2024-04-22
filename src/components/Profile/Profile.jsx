// import './profile.module.css'
import clsx from 'clsx'
import style from './profile.module.css'
import { formatNumbers } from './format'


const Profile = ({user}) => {
    return (
    <div className={style.profile}>
        <div className={style.description}>
            <img
            src={user.avatar}
            alt="User avatar"
            className={style.avatar}
            />
            <p className={style.name}>{user.username}</p>
            <p className={style.tag}>@{user.tag}</p>
            <p className={style.location}>{user.location}</p>
        </div>

        <ul className={style.stats}>
            <li className={style.stats_item}>
            <span className={style.label}>Followers</span>
            <span className={style.quantity}>{formatNumbers(user.stats.followers)}</span>
            </li>
            <li className={style.stats_item}>
            <span className={style.label}>Views</span>
            <span className={style.quantity}>{formatNumbers(user.stats.views)}</span>
            </li>
            <li className={style.stats_item}>
            <span className={style.label}>Likes</span>
            <span className={style.quantity}>{formatNumbers(user.stats.likes)}</span>
            </li>
        </ul>
    </div>
    )
}
export default Profile
