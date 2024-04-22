import style from './transactionHistory.module.css'

const TransactionHistory = ({items}) => {
    return (
      <table className={style.transaction_history}>
        <thead className={style.header}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody className={style.body}>
          {items.map((elem) => {
            return (<tr key={elem.id}>
              <td>{elem.type}</td>
              <td>{elem.amount}</td>
              <td>{elem.currency}</td>
            </tr>)
          })}
        </tbody>
      </table>
    )
}
export default TransactionHistory
