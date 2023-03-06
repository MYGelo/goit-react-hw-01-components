import css from './statistics.module.css';
import { getRandomColor } from '../getRandomColor';


export function Statistics ({
    stats,
  }) {
    return (
        <>
        <div className={css.container}>
          
        <h2 className={css.title}>Upload stats</h2>
        <ul className={css.stats}> 
        
        
        {
            stats.map(({id, label, percentage}) => { 
                 return (

                    <li className={css.item} style={{backgroundColor: getRandomColor()}}>
                    <span className={css.label}>{label}</span>
                    <span className={css.percentage}>{percentage}%</span>
                   </li>
                 );
            })

        } 
        </ul>
        </div>
        </>
    );
}

