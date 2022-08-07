import { Profile } from '../components/Profile/Prifile';
import user from '../user.json';
import { Statistics } from '../components/Statistics/Statistics';
import stats from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json'
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={"Upload stats"} stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
    );
};
