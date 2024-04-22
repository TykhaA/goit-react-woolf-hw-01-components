import clsx from 'clsx'
import style from './friendList.module.css'
import { generateClasses } from './utils'


const FriendList = ({friends, isOnline}) => {
  return (<ul className={style.friend_list}>
    {friends.map((elem) => {
      return (
        <li className={style.item} key={elem.id}>
          <span className={generateClasses(elem.isOnline, style)}></span>
          <img className={style.avatar} src={elem.avatar} alt={elem.name} width="48" />
          <p className={style.name}>{elem.name}</p>
        </li>
      )
    })}
  </ul>)
    
}
export default FriendList
