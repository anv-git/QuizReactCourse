import AnswerModel from '../model/answer'
import styles from '../styles/Answer.module.css'



interface AnswerProps {
    value: AnswerModel
    indice: number
    letter: string
    letterBackgroundColor: string
    onResponse: (indice: number) => void
}

export default function Answer(props: AnswerProps) {
    const answer = props.value
    const revealedAnswer = answer.revealed ? styles.revealedAnswer : ''
    return (
        <div className={styles.answer} onClick={() => props.onResponse(props.indice)}>
            <div className={ `${revealedAnswer} ${styles.answerContent}` }>
               
                    <div className={styles.front}>
                        <div className={styles.letter}
                            style={{ backgroundColor: props.letterBackgroundColor }}>
                            {props.letter}
                        </div>
                        <div className={styles.value}>
                            {answer.value}
                        </div>
                    </div>
               
                    <div className={styles.back}>
                        {answer.right ? (
                            <div className={styles.right}>
                                <div>the right answer is...</div>
                                <div className={styles.value}>{answer.value}</div>
                            </div>
                        ) : (
                            <div className={styles.wrong} >
                                <div>the answer is wrong...</div>
                                <div className={styles.value}>{answer.value}</div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}