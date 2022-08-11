import AnswerModel from "../../model/answer";
import QuestionModel from "../../model/question";

const questions: QuestionModel[] = [
    new QuestionModel(306, 'Qual bicho transmite a Doença de Chagas?', [
        AnswerModel.wrong('Abelha'),
        AnswerModel.wrong('Barata'),
        AnswerModel.wrong('Pulga'),
        AnswerModel.right('Barbeiro'),
    ]),
    new QuestionModel(203, 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?', [
        AnswerModel.wrong('Caju'),
        AnswerModel.wrong('Côco'),
        AnswerModel.wrong('Chuchu'),
        AnswerModel.right('Abóbora'),
    ]),
    new QuestionModel(204, 'Qual é o coletivo de cães?', [
        AnswerModel.wrong('Manada'),
        AnswerModel.wrong('Alcateia'),
        AnswerModel.wrong('Rebanho'),
        AnswerModel.right('Matilha'),
    ]),
    new QuestionModel(205, 'Qual é o triângulo que tem todos os lados diferentes?', [
        AnswerModel.wrong('Equilátero'),
        AnswerModel.wrong('Isóceles'),
        AnswerModel.wrong('Trapézio'),
        AnswerModel.right('Escaleno'),
    ]),
]

export default questions