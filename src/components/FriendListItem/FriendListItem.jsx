import style from './friendListItem.module.css'
import { generateClasses } from './utils'


const FriendListItem = ({elem}) => {
  return (<li className={style.item} key={elem.id}>
    <span className={generateClasses(elem.isOnline, style)}></span>
    <img className={style.avatar} src={elem.avatar} alt={elem.name} width="48" />
    <p className={style.name}>{elem.name}</p>
  </li>)
    
}
export default FriendListItem