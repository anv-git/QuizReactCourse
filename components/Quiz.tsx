import styles from "../styles/quiz.module.css"
import QuestionModel from "../model/question"
import Question from "./Question"
import Button from "./Button"

interface QuizProps {
    question: QuestionModel
    last: boolean
    questionAnswered: (question: QuestionModel) => void
    next: () => void
}


export default function Quiz(props: QuizProps) {

    function onResponse(indice: number) {
        if(props.question.notAnswered) {
            props.questionAnswered(props.question.answeredWith(indice))
        }
    }
    
    return (
        <div className={styles.quiz}>
            {
                props.question ? 
                <Question 
                    value={props.question}
                    timeToAnswer={6}
                    onResponse={onResponse}
                    timesUp={props.next}
                />
                : false
            }
            <Button onClick={props.next} text={props.last ? 'finish' : 'next'} href={""} />
        </div>
    )
}