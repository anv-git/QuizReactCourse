import questions from "../questionsData"

export default (req, res) => {

  const selectedId = +req.query.id 

  const oneQuestionOrNothing = questions.filter(questions => questions.id === selectedId)

  if(oneQuestionOrNothing.length === 1) {
    const selectedQuestion = oneQuestionOrNothing[0].mixAnswers() 
    return res.status(200).json(selectedQuestion.toObject())
  }else {
    res.status(204).send()
  }

    res.status(200).json(questions[0].toObject())
  }
  