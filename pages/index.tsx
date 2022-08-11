import QuestionModel from '../model/question';
import { useEffect, useState } from 'react';
import Quiz from '../components/Quiz';
import { useRouter } from '../node_modules/next/router';


const BASE_URL = 'http://localhost:3000/api'

export default function Home() {

  const router = useRouter()

  const [questionsIds, setQuestionIds ] = useState<number[]>([])
  const [question, setQuestion] = useState() 
  const [rightAnswers, setRightAnswers] = useState<number>(0) 

  async function loadQuestionsIds() {
    const resp = await fetch(`${BASE_URL}/quiz`)
    const questionsIds = await resp.json()
    console.log(questionsIds)
    setQuestionIds(questionsIds)
  } 
  async function loadQuestion(idQuestion: number) {
    const resp = await fetch(`${BASE_URL}/questions/${idQuestion}`)
    const json = await resp.json()
    const newQuestion = QuestionModel.fromObject(json)
    setQuestion(newQuestion)
  } 

  useEffect(() => {
    loadQuestionsIds()
  }, [])
  
  useEffect(() => {
    questionsIds.length > 0 && loadQuestion(questionsIds[0])
  }, [questionsIds])

  function questionAnswered(questionAnswered: QuestionModel) {
    setQuestion(questionAnswered)
    const correct = questionAnswered.correct 
    setRightAnswers(rightAnswers + (correct ? 1 : 0))
    
  }

  function nextQuestionId() {
      const nextIndice = questionsIds.indexOf(question.id) + 1
      return questionsIds[nextIndice]
    }

  function next(){
    const nextId = nextQuestionId()
    nextId ? nextQuiz(nextId) : finish()
  }

  function nextQuiz(nextId: number){
    loadQuestion(nextId)
  }

  function finish() {
    router.push({
      pathname: "/result",
      query: {
        total: questionsIds.length,
        right: rightAnswers
      }
    })
  }

  return question ? (
    <Quiz 
        question={question}
        last={nextQuestionId() === undefined}
        questionAnswered={questionAnswered}
        next={next}/> 
        ) : false
       

      
  
}
