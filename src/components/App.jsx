import './style.css'
import user from '../user.json'
import data from '../data.json'
import friends from '../friends.json'
import transactions from '../transactions.json';

import Profile from './Profile/Profile.jsx'
import Statistics from './Statistics/Statistics.jsx';
import FriendList from './FriendList/FriendList.jsx';
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile user={user}></Profile>
      <Statistics stats={data} title='Upload stats'></Statistics>
      <FriendList friends={friends}></FriendList>
      <TransactionHistory items={transactions} />
    </div>
  );
};
export default App