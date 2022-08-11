export default class AnswerModel {
    #value: string
    #right: boolean
    #revealed: boolean

    constructor(value: string, right: boolean, revealed = false) {
        this.#value = value
        this.#right = right
        this.#revealed = revealed
    }

    static right(value: string) {
        return new AnswerModel(value, true)
    }
    static wrong(value: string) {
        return new AnswerModel(value, false)
    }

    get value() {
        return this.#value
    }

    get right() {
        return this.#right
    }
    
    get revealed() {
        return this.#revealed
    }

    reveal() {
        return new AnswerModel(this.#value, this.#right, true)
    }

    static fromObject(obj: AnswerModel): AnswerModel {
        return new AnswerModel(obj.value, obj.right, obj.revealed)
    }

    toObject() {
        return {
            value: this.#value,
            right: this.#right,
            revealed: this.#revealed
        }
    }
}