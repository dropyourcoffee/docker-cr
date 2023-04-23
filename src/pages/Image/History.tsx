import { Navigate, useParams } from "react-router";

const History = ()=>{
  const {im} = useParams();

  if (!im)
    return <Navigate to={'/'}/>
  else
    return(<>
      history page for {im}
    </>);


};

export default History;