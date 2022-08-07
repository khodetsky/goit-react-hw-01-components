import PropTypes from 'prop-types';
import { TransactionHistoryItem } from '../TransactionHistoryItem/TransactionHistoryItem';
import {TransactionsTable} from './TransactionHistory.styled'

export const TransactionHistory = ({ transactions }) => {
    return (
        <TransactionsTable>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transactions.map(({ id, type, amount, currency }) => (
                    <TransactionHistoryItem id={id} type={type} amount={amount} currency={currency} />
                ))}
                
            </tbody>
        </TransactionsTable>
    );
};

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.object),
}