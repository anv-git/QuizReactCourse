import { CountdownCircleTimer } from '../node_modules/react-countdown-circle-timer/lib/index'
import styles from '../styles/countDown.module.css'

interface countDownProps {
    key: any
    duration: number
    timesUp: () => void
}

export default function CountDown(props: countDownProps) {
    return (
        <div className={styles.countDown}>
            <CountdownCircleTimer 
                duration={props.duration}
                size={100}
                isPlaying
                onComplete={props.timesUp}
                colors={['#BCE596', '#F7B801', '#ED827A']} 
                colorsTime={[10,3,0]}> 

                {({ remainingTime }) => remainingTime }
            </CountdownCircleTimer>
        </div>
    )
}