import css from './TransactionHistory.module.css';
import propTypes from 'prop-types';

export function TransactionHistory({items}) {
    return (
        <table className={css.transaction}>
            <thead className={css.transaction__head}>
                <tr className={css.transaction__head_item}>
                <th className={css.transaction__title}>Type</th>
                <th className={css.transaction__title}>Amount</th>
                <th className={css.transaction__title}>Currency</th>
                </tr>
            </thead>
                
            <tbody className={css.transaction__body}>
                {items.map(({
                        id,
                        type,
                        amount,
                        currency,
                    }) => {
                        return (
                            
                            <tr className={css.tr} key= {id}>
                            <td className={css.td}>{type}</td>
                            <td className={css.td}>{amount}</td>
                            <td className={css.td}>{currency}</td>
                            
                            </tr>
                               
                            
                        );
                    })}
            </tbody>
        </table>
    );

};

TransactionHistory.propTypes = {
    items: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string.isRequired,
            type: propTypes.string.isRequired,
            amount: propTypes.string.isRequired,
            currency: propTypes.string.isRequired,
        })
    ).isRequired
};