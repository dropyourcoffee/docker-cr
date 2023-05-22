import { Navigate, useParams } from "react-router";
import HistoryTemplate from "@components/templates/HistoryTemplate";

const History = ()=>{
  const {im} = useParams();

  if (!im)
    return <Navigate to={'/'}/>
  else
    return(
      <HistoryTemplate img={im}/>
    );


};

export default History;