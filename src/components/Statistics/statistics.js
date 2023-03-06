import css from './statistics.module.css';
import { getRandomColor } from '../getRandomColor';
import propTypes from 'prop-types';

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

Statistics.prototypes = {
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    })
  ).isRequired
}