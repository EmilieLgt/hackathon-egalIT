import { createContext, useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
export const DyslexicContext = createContext(null);

export default function DyslexicContextProvider({ children }) {
  const [messageDyslexic, setMessageDyslexic] = useState(false);
  const [dyslexic, setDyslexic] = useState(false);

  function handleMessageDyslexic() {
    setMessageDyslexic(!messageDyslexic);
  }

  function handleDyslexicChange() {
    setDyslexic((prevDyslexic) => {
      const newDyslexic = !prevDyslexic;
      if (newDyslexic) {
        document.body.classList.add("dyslexic-font");
      } else {
        document.body.classList.remove("dyslexic-font");
      }
      return newDyslexic;
    });
  }

  useEffect(() => {
    if (dyslexic) {
      document.body.classList.add("dyslexic-font");
    } else {
      document.body.classList.remove("dyslexic-font");
    }
  }, [dyslexic]);

  const [dataFemale, setDataFemale] = useState([]);
  const [dataMale, setDataMale] = useState([]);
  const [dataAll, setDataAll] = useState([]);
  const fetchData = async () => {
    const result = await axios("http://127.0.0.1:5000/question/1");
    const data = result.data;
    setDataFemale(data.Female);
    setDataMale(data.Male);
    setDataAll(data);

    // console.log("ici le genre" + dataGender);
  };
  useEffect(() => {
    fetchData();
    console.log(dataAll);
  }, []);

  const [womenInFinance, setWomenInFinance] = useState();
  const [menInFinance, setMenInFinance] = useState();

  const [womenInHR, setWomenInHR] = useState();
  const [menInHR, setMenInHR] = useState();

  const [womenInIT, setWomenInIT] = useState();
  const [menInIT, setMenInIT] = useState();

  const [womenInMarketing, setWomenInMarketing] = useState();
  const [menInMarketing, setMenInMarketing] = useState();

  const [womenInOperations, setWomenInOperations] = useState();
  const [menInOperations, setMenInOperations] = useState();

  const [womenInRD, setWomenInRD] = useState();
  const [menInRD, setMenInRD] = useState();

  const [womenInSales, setWomenInSales] = useState();
  const [menInSales, setMenInSales] = useState();

  const fetchData3 = async () => {
    const result = await axios("http://127.0.0.1:5000/question/2");

    const data = result.data;
    setWomenInFinance(data.Finance.Female);
    setMenInFinance(data.Finance.Male);

    setWomenInHR(data.HR.Female);
    setMenInHR(data.HR.Male);

    setWomenInIT(data.IT.Female);
    setMenInIT(data.IT.Male);

    setWomenInMarketing(data.Marketing.Female);
    setMenInMarketing(data.Marketing.Male);

    setWomenInOperations(data.Operations.Female);
    setMenInOperations(data.Operations.Male);

    setWomenInRD(data.RD.Female);
    setMenInRD(data.RD.Male);

    setWomenInSales(data.Sales.Female);
    setMenInSales(data.Sales.Male);

    console.log(womenInFinance);
  };
  useEffect(() => {
    fetchData3();
  }, []);

  const [noWoman, setNoWoman] = useState();
  const [noMan, setNoMan] = useState();
  const [yesWoman, setYesWoman] = useState();
  const [yesMan, setYesMan] = useState();

  const fetchData2 = async () => {
    const result = await axios("http://127.0.0.1:5000/question/3");
    const data = result.data;
    setNoWoman(data.No.Female);
    setNoMan(data.No.Male);
    setYesWoman(data.Yes.Female);
    setYesMan(data.Yes.Male);
  };
  useEffect(() => {
    fetchData2();
  }, []);

  const [master, setMaster] = useState();
  const [licence, setLicence] = useState();
  const [doctorat, setDoctorat] = useState();
  const [bepcap, setBepcap] = useState();
  const [studies, setStudies] = useState();
  const [nostudies, setNoStudies] = useState();

  const fetchData4 = async () => {
    const result = await axios("http://127.0.0.1:5000/question/4");
    const data = result.data;

    setMaster(data.Master_s_degree);
    // setLicence(data.);
    setDoctorat(data.Doctoraldegree);
    setBepcap(data);
    setStudies(data);
    setNoStudies(data);
    console.log("laaaaaaa :", doctorat);
  };
  useEffect(() => {
    fetchData4();
  }, []);

  const [tickValue, setTickValue] = useState();
  const [tickValue2, setTickValue2] = useState();
  const [tickValue3, setTickValue3] = useState();
  const [tickValue4, setTickValue4] = useState();
  const [tickValue5, setTickValue5] = useState();

  const contextValue = useMemo(
    () => ({
      noWoman,
      setNoWoman,
      noMan,
      setNoMan,
      yesWoman,
      setYesWoman,
      yesMan,
      setYesMan,

      tickValue2,
      setTickValue2,
      tickValue3,
      setTickValue3,
      tickValue4,
      setTickValue4,
      tickValue5,
      setTickValue5,
      tickValue,
      setTickValue,
      dataFemale,
      setDataFemale,
      dataMale,
      setDataMale,
      dataAll,
      setDataAll,
      messageDyslexic,
      setMessageDyslexic,
      dyslexic,
      setDyslexic,
      handleMessageDyslexic,
      handleDyslexicChange,
      womenInFinance,
      setWomenInFinance,
      menInFinance,
      setMenInFinance,
      womenInHR,
      setWomenInHR,
      menInHR,
      setMenInHR,
      womenInIT,
      setWomenInIT,
      menInIT,
      setMenInIT,
      womenInMarketing,
      setWomenInMarketing,
      menInMarketing,
      setMenInMarketing,
      womenInOperations,
      setWomenInOperations,
      menInOperations,
      setMenInOperations,
      womenInRD,
      setWomenInRD,
      menInRD,
      setMenInRD,
      womenInSales,
      setWomenInSales,
      menInSales,
      setMenInSales,
      master,
      setMaster,
      licence,
      setLicence,
      doctorat,
      setDoctorat,
      bepcap,
      setBepcap,
      studies,
      setStudies,
      nostudies,
      setNoStudies,
    }),
    [
      noWoman,
      setNoWoman,
      noMan,
      setNoMan,
      yesWoman,
      setYesWoman,
      yesMan,
      setYesMan,
      tickValue2,
      setTickValue2,
      tickValue3,
      setTickValue3,
      tickValue4,
      setTickValue4,
      tickValue5,
      setTickValue5,
      tickValue,
      setTickValue,
      dataFemale,
      setDataFemale,
      dataMale,
      setDataMale,
      dataAll,
      setDataAll,
      messageDyslexic,
      setMessageDyslexic,
      dyslexic,
      setDyslexic,
      handleMessageDyslexic,
      handleDyslexicChange,
      womenInFinance,
      setWomenInFinance,
      menInFinance,
      setMenInFinance,
      womenInHR,
      setWomenInHR,
      menInHR,
      setMenInHR,
      womenInIT,
      setWomenInIT,
      menInIT,
      setMenInIT,
      womenInMarketing,
      setWomenInMarketing,
      menInMarketing,
      setMenInMarketing,
      womenInOperations,
      setWomenInOperations,
      menInOperations,
      setMenInOperations,
      womenInRD,
      setWomenInRD,
      menInRD,
      setMenInRD,
      womenInSales,
      setWomenInSales,
      menInSales,
      setMenInSales,
      master,
      setMaster,
      licence,
      setLicence,
      doctorat,
      setDoctorat,
      bepcap,
      setBepcap,
      studies,
      setStudies,
      nostudies,
      setNoStudies,
    ]
  );

  return (
    <DyslexicContext.Provider value={contextValue}>
      {children}
    </DyslexicContext.Provider>
  );
}
DyslexicContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
