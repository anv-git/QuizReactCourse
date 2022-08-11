import Button from "../components/Button"
import Statistic from "../components/Statistic"
import { useRouter } from "../node_modules/next/router"
import styles from '../styles/result.module.css'

export default function result() {
    const router = useRouter()

    const total = +router.query.total
    const right = +router.query.right
    const percentage = Math.round((right / total) * 100)

    return(
        <div className={styles.result}>
            <h1> Final Result</h1>
            <div style={{
                display: 'flex',
            }}>
                <Statistic  text= "Questions" value={total}
                backgroundColor="#FDD60F"/>
                <Statistic  text= "Right" value={right}
                backgroundColor="#9CD2A4"/>
                <Statistic  text= "Percentage" value={`${percentage}%`} 
                backgroundColor="#DE6A33"/>
            </div>
                <Button href="/" text="try again" />
        </div>
    )
}