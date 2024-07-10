import "./Questions.scss";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DyslexicContext } from "../../context/DyslexicContext";
function Questions() {
  const navigate = useNavigate();
  const {
    setTickValue,
    tickValue,
    setTickValue2,
    tickValue2,
    setTickValue3,
    setTickValue4,
    setTickValue5,
  } = useContext(DyslexicContext);
  const [questionIndex, setQuestionIndex] = useState(0);
  const questions = [
    {
      id: 1,
      question: "Quel est le pourcentage de femmes dans votre entreprise ?",
      options: [
        {
          type: "radio",
          id: "entre 0 et 5%",
          name: "female-employees-1",
          option: "5% et moins",
        },
        {
          type: "radio",
          id: "entre 5% et 16%",
          name: "female-employees-1",
          option: "5% à 16%",
        },
        {
          type: "radio",
          id: "entre 17% et 30%",
          name: "female-employees-1",
          option: "16% à 30%",
        },
        {
          type: "radio",
          id: "plus de 30%",
          name: "female-employees-1",
          option: "30% ou plus",
        },
      ],
    },
    {
      id: 2,
      question:
        "Dans quel secteur travaillent majoritairement les femmes de votre entreprise ?",
      options: [
        {
          type: "radio",
          id: "Finance",
          name: "female-sector",
          option: "Finance",
          valeur: "Finance", // Ajouté tick pour correspondre à la logique
        },
        {
          type: "radio",
          id: "HR",
          name: "female-sector",
          option: "HR",
          valeur: "HR", // Ajouté tick pour correspondre à la logique
        },
        {
          type: "radio",
          id: "IT",
          name: "female-sector",
          option: "IT",
          valeur: "IT", // Ajouté tick pour correspondre à la logique
        },
        {
          type: "radio",
          id: "Marketing",
          name: "female-sector",
          option: "Marketing",
          valeur: "Marketing", // Ajouté tick pour correspondre à la logique
        },
        {
          type: "radio",
          id: "Operation",
          name: "female-sector",
          option: "Operation",
          valeur: "Operation", // Ajouté tick pour correspondre à la logique
        },
        {
          type: "radio",
          id: "R&D",
          name: "female-sector",
          option: "R&D",
          valeur: "R&D", // Ajouté tick pour correspondre à la logique
        },
        {
          type: "radio",
          id: "Sales",
          name: "female-sector",
          option: "Sales",
          valeur: "Sales", // Ajouté tick pour correspondre à la logique
        },
      ],
    },
    {
      id: 3,
      question:
        "Les femmes occupent-elles majoritairement des postes de cadre dans votre secteur IT ?",
      options: [
        {
          type: "radio",
          id: "Oui",
          name: "management-sector",
          option: "Oui",
          valeur: "Oui", // Ajouté tick pour correspondre à la logique
        },
        {
          type: "radio",
          id: "Non",
          name: "management-sector",
          option: "Non",
          valeur: "Non", // Ajouté tick pour correspondre à la logique
        },
      ],
    },
    {
      id: 4,
      question:
        "Quel est en moyenne le degré d'étude des femmes dans votre entreprise ?",
      options: [
        { type: "radio", id: "master", name: "education-1", option: "master" },
        {
          type: "radio",
          id: "licence",
          name: "education-1",
          option: "licence",
        },
        { type: "radio", id: "doctorat", name: "salary-1", option: "doctorat" },
        {
          type: "radio",
          id: "BEP/CAP",
          name: "education-1",
          option: "BEP/CAP",
        },
        {
          type: "radio",
          id: "études universitaires sans diplôme",
          name: "education-1",
          option: "études universitaires sans diplôme",
        },
        {
          type: "radio",
          id: "pas d'études après le lycée",
          name: "education-1",
          option: "pas d'études après le lycée",
        },
      ],
    },
    {
      id: 5,
      question:
        "Quel est le salaire moyen annuel des femmes dans votre entreprise ?",
      options: [
        {
          type: "radio",
          id: "moins de 3 500$",
          name: "salary-1",
          option: "moins de 3 500$",
        },
        {
          type: "radio",
          id: "entre 3 500$ et 12 500$",
          name: "salary-1",
          option: "entre 3 500$ et 12 500$",
        },
        {
          type: "radio",
          id: "entre 12 500$ et 35 000$",
          name: "salary-1",
          option: "entre 12 500$ et 35 000$",
        },
        {
          type: "radio",
          id: "entre 35 000$ et 75 000$",
          name: "salary-1",
          option: "entre 35 000$ et 75 000$",
        },
        {
          type: "radio",
          id: "plus de 137 500$",
          name: "salary-1",
          option: "plus de 137500$",
        },
      ],
    },
  ];
  const currentQuestion = questions[questionIndex];
  const handleClick = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate("/loading");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Choix de la gestion des changements en fonction du nom de l'option
    switch (name) {
      case "female-employees-1":
        setTickValue(value); // Mettre à jour tickValue pour la première question
        break;
      case "female-sector":
        setTickValue2(value); // Mettre à jour tickValue2 pour la deuxième question
        break;
      case "management-sector":
        setTickValue3(value); // Mettre à jour tickValue pour la troisième question
        break;
      case "education-1":
        setTickValue4(value);
        break;
      case "salary-1":
        setTickValue5(value);
        break;
      default:
        break;
    }
  };
  return (
    <div className="questions-container">
      <div className="question-reponse-container">
        <div className="questions">
          <div className="index-container">
            {questionIndex + 1}/{questions.length}
          </div>
          <div className="one-question-container">
            {currentQuestion.question}
            <div>
              {currentQuestion.options.map((option) => (
                <div key={option.id}>
                  <input
                    type={option.type}
                    id={option.id}
                    name={option.name}
                    value={option.id}
                    onChange={handleChange}
                  />
                  <label htmlFor={option.id}>{option.option}</label>
                </div>
              ))}
            </div>
            <button
              type="button"
              id="button-real-question"
              onClick={handleClick}
            >
              Continuer &rsaquo;{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Questions;
