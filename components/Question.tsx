
import styles from '../styles/Question.module.css';
import QuestionModel from '../model/question';
import Statement from './statement';
import Answer from './Answer';
import CountDown from './countdown';

const letters = [
    { value: 'A', color: '#f2c866'},
    { value: 'b', color: '#f266ba'},
    { value: 'c', color: '#58d4f2'},
    { value: 'd', color: '#BCE596'},
]

interface QuestionProps {
    value: QuestionModel
    timeToAnswer?: number
    onResponse: (indice: number) => void
    timesUp: () => void
}

export default function Question(props: QuestionProps) {
    const question = props.value

    function renderAnswers() {
        return question.answer.map((answer, i) => {
            return <Answer 
                key={`${question.id}${i}`}
                value={answer}
                indice={i}
                letter={letters[i].value}
                letterBackgroundColor={letters[i].color}
                onResponse={props.onResponse}
            />
        })
    }
    return (
        <div className={styles.question}>
            <Statement text={question.statement} />
            <CountDown key={question.id} duration={props.timeToAnswer ?? 10}
             timesUp={props.timesUp} />
            {renderAnswers()}

        </div>
    )

}