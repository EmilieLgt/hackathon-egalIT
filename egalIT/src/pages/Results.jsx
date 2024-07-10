import "./style/Results.scss";
import { useContext } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import tick from "../assets/images/green-tick.png";
import redcross from "../assets/images/red-cross.png";
import { DyslexicContext } from "../context/DyslexicContext";
import { Link } from "react-router-dom";
import videotest from "./video2.mp4";

function Results() {
  const {
    tickValue4,
    yesWoman,
    yesMan,
    tickValue3,
    tickValue5,
    tickValue2,
    dataFemale,
    dataMale,
    womenInFinance,
    menInFinance,
    womenInHR,
    menInHR,
    womenInIT,
    menInIT,
    womenInMarketing,
    menInMarketing,
    womenInOperations,
    menInOperations,
    womenInRD,
    menInRD,
    womenInSales,
    menInSales,
    tickValue,
  } = useContext(DyslexicContext);

  const dataMalePt = Math.floor(dataMale * 100);
  const dataFemalePt = Math.floor(dataFemale * 100);

  console.log("là le 1", tickValue);
  console.log("là le 2", tickValue2);

  const optionGraph1 = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Répartition des hommes et femmes en entreprise IT",
    },
    series: [
      {
        name: "%",
        colorByPoint: true,
        data: [
          {
            name: "Femmes",
            y: dataFemalePt,
            color: "#6d39a8",
          },
          {
            name: "Hommes",
            y: dataMalePt,
            color: "#ffde59",
          },
        ],
      },
    ],
  };

  const optionGraph2 = {
    chart: {
      type: "column",
    },
    title: {
      text: "Part des femmes par secteur de l'entreprise",
    },
    xAxis: {
      categories: [
        "Finance",
        "HR",
        "IT",
        "Marketing",
        "Operations",
        "R&D",
        "Sales",
      ],
      title: {
        text: "Secteur d'entreprise",
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Pourcentage",
        align: "high",
      },
      labels: {
        format: "{value}%",
      },
    },
    tooltip: {
      valueSuffix: "%",
      format: "{y:.1f}%",
    },
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true,
          format: "{y:.1f}%",
        },
      },
    },
    series: [
      {
        name: "Homme",
        data: [
          menInFinance,
          menInHR,
          menInIT,
          menInMarketing,
          menInOperations,
          menInRD,
          menInSales,
        ],
      },
      {
        name: "Femme",
        data: [
          womenInFinance,
          womenInHR,
          womenInIT,
          womenInMarketing,
          womenInOperations,
          womenInRD,
          womenInSales,
        ],
      },
    ],
  };

  const optionGraph3 = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Répartition des hommes et femmes en entreprise IT",
    },
    series: [
      {
        name: "",
        colorByPoint: true,
        data: [
          {
            name: "Femmes",
            y: yesWoman,
            color: "#6d39a8",
          },
          {
            name: "Hommes",
            y: yesMan,
            color: "#ffde59",
          },
        ],
      },
    ],
  };

  const optionGraph4 = {
    chart: { type: "pie" },
    title: {
      text: "Pourcentage des niveaux d'éducation des femmes dans l'IT",
    },
    series: [
      {
        name: "%",
        colorByPoint: true,
        data: [
          { name: "Master", y: 47 },
          { name: "Licence", y: 27 },
          { name: "Doctorat", y: 16 },
          { name: "BEP/CAP", y: 3 },
          { name: "Études universitaires sans diplôme", y: 2 },
          { name: "Pas d'études après le lycée", y: 0 },
        ],
      },
    ],
  };

  const optionGraph5 = {
    chart: { type: "column" },
    title: { text: "Pourcentage des salaires moyens des femmes dans l'IT" },
    xAxis: {
      categories: [
        "moins de 3 500$",
        "entre 3 500$ et 12 500$",
        "entre 12 500$ et 35 000$",
        "entre 35 000$ et 75 000$",
        "entre 75 000$ et 137 500$",
        "plus de 137 500$",
      ],
      title: { text: "Salaire" },
    },
    yAxis: {
      min: 0,
      title: { text: "Pourcentage", align: "high" },
      labels: { format: "{value}" },
    },
    tooltip: { valueSuffix: "" },
    plotOptions: {
      column: { dataLabels: { enabled: true, format: "{y:.1f}" } },
    },
    series: [
      { name: "moins de 3 500$", data: [555] },
      { name: "entre 3 500$ et 12 500$", data: [308] },
      { name: "entre 12 500$ et 35 000$", data: [291] },
      { name: "entre 35 000$ et 75 000$", data: [329] },
      { name: "entre 75 000$ et 137 500$", data: [264] },
      { name: "plus de 137 500$", data: [178] },
    ],
  };
  const results = [
    {
      index: 1,
      title: "La présence des femmes dans votre entreprise",
      reponse: tickValue,
      tick:
        tickValue === "entre 17% et 30%" || tickValue === "plus de 30%"
          ? tick
          : redcross,
      options: optionGraph1,
      texte:
        tickValue === "entre 17% et 30%" || tickValue === "plus de 30%"
          ? `Votre entreprise emploie plus de femmes que la moyennes des autres entreprises en IT de notre panel `
          : `Votre entreprise est en deça des normes d'emploi de femmes dans l'IT de notre panel`,
    },
    {
      index: 2,
      title: "La présence des femmes selon les secteurs de l'entreprise",
      reponse: tickValue2,
      tick:
        tickValue2 === "Finance" ||
        tickValue2 === "IT" ||
        tickValue2 === "Operation"
          ? tick
          : redcross,
      options: optionGraph2,
      texte:
        tickValue2 === "Finance" ||
        tickValue2 === "IT" ||
        tickValue2 === "Operation"
          ? `La majorité des femmes de votre entreprise se trouvent dans un secteur où les femmes sont habituellement moins représentées.`
          : `La majorité des femmes de votre entreprise se trouvent dans un secteur où les femmes sont habituellement sur-représentées dans les autres entreprises IT.`,
    },
    {
      index: 3,
      title: "Les femmes aux postes de manager",
      reponse: tickValue3,
      tick: tickValue3 === "Oui" ? tick : redcross,
      options: optionGraph3,
      texte:
        tickValue3 === "Oui"
          ? `Bravo ! Contrairement à notre panel d'entreprise IT, vous avez plus de femmes à des postes de décision dans votre pôle IT`
          : `Comme la plupart des entreprises IT, les femmes de votre pôle IT ne sont pas majoritaires`,
    },
    {
      index: 4,
      title: "Le niveau d'éducation des femmes",
      reponse: tickValue4,
      tick:
        tickValue4 === "BEP/CAP" ||
        tickValue4 === "études universitaires sans diplôme" ||
        tickValue4 === "pas d'études après le lycée"
          ? tick
          : redcross,
      options: optionGraph4,
      texte:
        tickValue4 === "BEP/CAP" ||
        tickValue4 === "études universitaires sans diplôme" ||
        "pas d'études après le lycée"
          ? "Vous employez principalement des femmes ayant des parcours scolaires divers."
          : "Vous employez principalement des femmes ayant fait de longues études, il peut être intéressant de diversifier les profils de votre entreprise.",
    },
    {
      index: 5,
      title: "Les salaires moyens des femmes dans l'IT",
      reponse: tickValue5,
      tick:
        tickValue5 === "moins de 3 500$" ||
        tickValue5 === "entre 3 500$ et 12 500$" ||
        tickValue5 === "entre 12 500$ et 35 000$"
          ? redcross
          : tick,
      options: optionGraph5,
      texte:
        tickValue5 === "moins de 3 500$" ||
        tickValue5 === "entre 3 500$ et 12 500$" ||
        tickValue5 === "entre 12 500$ et 35 000$"
          ? "Les salaires moyens des femmes dans votre entreprise sont dans la tranche basse."
          : "Les salaires moyens des femmes dans votre entreprise sont dans la moyenne haute.",
    },
  ];

  let tickCount = 0;
  let redCrossCount = 0;

  results.forEach((result) => {
    if (result.tick === tick) {
      tickCount++;
    } else if (result.tick === redcross) {
      redCrossCount++;
    }
  });

  return (
    <div>
      <h2 className="title-results">PROFIL DE VOTRE ENTREPRISE</h2>
      <div className="results-container">
        {results.map((result) => (
          <div className="text-results" key={result.title}>
            <div className="titles-text-results">
              <div className="number-title">
                <h3 className="index-result">{result.index}</h3>
              </div>

              <h3>{result.title}</h3>
            </div>
            <div className="img-diagram">
              <HighchartsReact
                highcharts={Highcharts}
                options={result.options}
              />{" "}
              <img
                className="tick"
                alt="coche verte ou croix rouge"
                src={result.tick}
              />
            </div>
            <div className="entreprise" style={{ marginTop: "1em" }}>
              <h3 className="entreprise-results">VOTRE ENTREPRISE</h3>
              <p className="text">
                {" "}
                <span className="color-pink">
                  {" "}
                  Votre réponse : {result.reponse}. <br />
                </span>{" "}
                {result.texte}{" "}
              </p>
            </div>
          </div>
        ))}
        <div className="global-results">
          <h3 className="global-results-title" style={{ marginBottom: "1em" }}>
            RÉSULTATS FINAUX
          </h3>

          <div className="result-final">
            {tickCount > redCrossCount ? (
              <div className="resultat-final-reponse-donne">
                {" "}
                <h4 className="result-final-title">
                  <span className="color-pink">
                    Vous êtes éligibles à notre label Egal-IT !
                  </span>{" "}
                  <br /> <br /> Contactez notre équipe pour avoir plus
                  d'informations sur l'obtention de celui-ci. <br />
                  Si vous êtes intéressé.e pour obtenir plus d'informations sur
                  l'intégration des femmes dans votre entreprise.
                  <br /> Consultez notre{" "}
                  <Link to="/ressources"> rubrique ressource </Link>.{" "}
                </h4>
                <div>
                  <img
                    alt="gif selon les résultats"
                    className="gif"
                    src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXFqZXJpNTRld3Bhc3E4ZDB0Y2s3Y282eDM4MXVlMXZwdzd6azNuZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZXBCQjBvOJ5bQXP95h/giphy.webp"
                  />
                </div>
              </div>
            ) : (
              <div className="resultat-final-reponse-donne">
                <h4 className="result-final-title">
                  <span className="color-pink">
                    Vous n'êtes pas encore éligible à notre label Egal-IT !
                  </span>{" "}
                  <br /> <br /> Mais pas de panique, nous proposons des
                  formations, des ressources et des solutions pour que vous
                  puissiez améliorer l'intégration des femmes dans votre
                  entreprise. <br />
                  Consultez notre{" "}
                  <Link to="/ressources"> rubrique ressource </Link>.{" "}
                </h4>
                <div>
                  <img
                    alt="gif selon les résultats"
                    className="gif"
                    src="https://media1.tenor.com/m/N-wmAOcdlVMAAAAC/rhobh-not-cool.gif"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="new-stuff">
        <h3>Pour aller plus loin</h3>
        <p className="p-new-stuff">
          Vous pouvez bénéficier d'un forfait formation et d'un quizz plus
          précis,
          <br /> jouez à{" "}
          <Link to="/contact">déterminer votre positionnnement !</Link>
        </p>
        <p className="p-new-stuff">En voici un aperçu !</p>
        <video
          controls
          autoPlay
          loop
          muted
          className="video-stuff"
          src={videotest}
          alt="vidéo de présentation d'un nouveau quizz"
          type="video/mp4"
        />
      </div>
    </div>
  );
}

export default Results;
