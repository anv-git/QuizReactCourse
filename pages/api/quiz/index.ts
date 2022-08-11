import  mix  from '../../../functions/arrays'
import questions from '../questionsData'

export default (req, res) => {
    const ids = questions.map(question => question.id)
    res.status(200).json(mix(ids))
}