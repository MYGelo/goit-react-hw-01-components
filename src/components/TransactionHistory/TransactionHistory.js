import css from './TransactionHistory.module.css';

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
                            
                            <tr className={css.tr}>
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
// {transactions.map(({id, type, amount, currency}) => {
//     return (
//         <table className={css.trans}>
//             <thead>
//                 <tr>
//                     <th>Type</th>
//                     <th>Amount</th>
//                     <th>Currency</th>
//                 </tr>

//                 <tbody>
//                 <tr>
//                     <td>{type}</td>
//                     <td>{amount}</td>
//                     <td>{currency}</td>
//                 </tr>
//                 </tbody>
//             </thead>
//         </table>
//     )
// })}