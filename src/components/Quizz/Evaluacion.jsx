import React, { useState } from 'react';


const Evaluacion = () => {
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const handleAnswerSelect = (questionId, selectedOption) => {
        setSelectedAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionId]: selectedOption
        }));
    };

    const calculateScore = () => {
        let score = 0;
        questions.forEach(question => {
            if (selectedAnswers[question.id] === question.correctAnswer) {
                score++;
            }
        });
        return score;
    };

    const handleShowResults = () => {
        setShowResults(true);
    };

    return (
        <div className='items-center justify-center  '>
            {questions.map(question => (
                <div className='text-center mb-10' key={question.id}>
                    <p>{question.question}</p>
                    {question.options.map(option => (
                        <button

                            key={option}
                            onClick={(e) => {
                                const button = e.target;

                                // Si el botón ya tiene la clase de fondo verde, la quitamos
                                if (button.classList.contains('bg-black', 'text-white')) {
                                    button.classList.remove('bg-black', 'text-white');
                                } else {
                                    // Si no tiene la clase, la agregamos
                                    button.classList.add('bg-black', 'text-white');
                                }

                                handleAnswerSelect(question.id, option);
                            }}
                            type="button"
                            className={`ml-10 text-center text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300
                                    "hover: text-green"
                                } hover:scale-105 active:scale-100  tablet:first:ml-0`}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            ))
            }

            <button onClick={handleShowResults} className="mt-4">Ver resultados</button>

            {
                showResults && (
                    <div className="mt-4 text-center">
                        <h3>Resultados:</h3>
                        <p>Tu puntuación: {calculateScore()} de {questions.length}</p>
                    </div>
                )
            }
        </div >
    );
};
const questions = [
    {
        id: 1,
        question: 'Consiste en actividades de planeación para alcanzar objetivos señalados',
        options: ['Administración', 'Timepo', 'Organización'],
        correctAnswer: 'Administración'
    },
    {
        id: 2,
        question: 'Crisis, problemas, proyectos conta reloj pertenecen a',
        options: ['Importante-no urgente', 'Importante-urgente', 'No importante-no urgente'],
        correctAnswer: 'Importante-urgente'
    },
    {
        id: 3,
        question: 'Enfoque que sostiene que la mayoria de los problemas de administracion se deben al caos',
        options: ['Habilidades', 'Responsabilidad', 'Orden'],
        correctAnswer: 'Orden'
    },
    {
        id: 4,
        question: 'Ordenar todo, desde el espacio de la oficina hasta el espacio de la cocina',
        options: ['Organización de las cosas', 'Organización de las tareas', 'Organización de las personas'],
        correctAnswer: 'Organización de las cosas'
    },
    {
        id: 5,
        question: 'Son interrupciones, actitudes, ruidos, etc. que roban el tiempo o perjudican su planeación',
        options: ['Sistema deficiente', 'Ocio', 'Enemigos del tiempo'],
        correctAnswer: 'Enemigos del tiempo'
    },
];

export default Evaluacion;
