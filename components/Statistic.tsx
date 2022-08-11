import styles from '../styles/statistic.module.css'

interface StatisticProps {
     value: any
     text: string
     backgroundColor?: string
     fontColor?: string
}

export default function Statistic(props:StatisticProps){
    return ( 
        <div className={styles.statistic}>
            <div className={styles.value} style={{
                backgroundColor: props.backgroundColor ?? '#ccc',
                color: props.fontColor ?? '#333'
            }}>
                {props.value}
            </div>
            <div className={styles.text}> 
                {props.text}
            </div>
        </div>
    )
}