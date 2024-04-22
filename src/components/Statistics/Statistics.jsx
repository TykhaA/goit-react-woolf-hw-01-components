import style from './statistics.module.css'
import { generateRandomColor } from './generateColor'


const Statistics = ({stats, title}) => {
    return (<section className={style.statistics}>
      <div className={style.title_wrap}>
        <h2 className={style.title}>{title}</h2>
      </div>
      <ul className={style.stats_list}>
      {stats.map((elem) =>{
        return (<li className={style.item} key={elem.id} style={{backgroundColor: generateRandomColor(), width:(100 / stats.length) + '%'}} key={elem.id}>
          <span  className={style.label}>{elem.label}</span>
          <span className={style.percentage}>{elem.percentage}%</span>
        </li>)
        })}
      </ul>
    </section>)
}
export default Statistics
