import style from './friendList.module.css'
import FriendListItem from '../FriendListItem/FriendListItem.jsx';


const FriendList = ({friends}) => {
  return (<ul className={style.friend_list}>
    {friends.map((elem) => {
      return (<FriendListItem elem={elem}></FriendListItem>
      )
    })}
  </ul>)
    
}
export default FriendList
