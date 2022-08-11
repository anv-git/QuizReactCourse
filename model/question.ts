import AnswerModel from "./answer"
import mix from '../functions/arrays'

export default class QuestionModel {
    #id: number
    #statement: string
    #answers: AnswerModel[]
    #correct: boolean
    // #answered: boolean

    constructor(id: number, statement: string, answers: AnswerModel[], correct = false) {
        this.#id = id
        this.#statement = statement
        this.#answers = answers
        this.#correct = correct
    }

    get id() {
        return this.#id
    }
    get statement() {
        return this.#statement
    }
    get answer() {
        return this.#answers
    }
    get correct() {
        return this.#correct
    }
    get notAnswered() {
        return !this.answered
    }
    get answered() {
        for(let answer of this.#answers) {
            if(answer.revealed) return true
        }
        return false
    }

    answeredWith(indice: number): QuestionModel {
        const correct = this.#answers[indice]?.right
        const answers = this.#answers.map((answer, i) => {
            const selectedAnswer = indice === i 
            const shouldReveal = selectedAnswer || answer.right
            return shouldReveal ? answer.reveal() : answer
        })
        return new QuestionModel(this.id, this.statement, answers, correct)
    }

    mixAnswers(): QuestionModel {
        let mixedAnswers = mix(this.#answers)
        return new QuestionModel(this.#id, this.#statement, mixedAnswers, this.#correct)
    }

    static fromObject(obj: QuestionModel): QuestionModel {
        const answers = obj.answers.map( resp => AnswerModel.fromObject(resp))
        return new QuestionModel(obj.id, obj.statement, answers, obj.correct)
    }

    toObject() {
        return {
            id: this.#id,
            statement: this.#statement,
            answers: this.#answers.map(resp => resp.toObject()),
            answered: this.answered,
            correct: this.#correct
        }
    }

}

