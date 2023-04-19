import {useParams} from "react-router";
import {Navigate} from "react-router-dom";
import ImageTemplate from "@components/templates/ImageTemplate";

// export interface ImagePageProps {
//   tag: string;
// }

const Image = ()=>{
  const {im} = useParams();

  if (!im)
    return <Navigate to={'/'}/>
  else
    return(<>
        <ImageTemplate img={im}/>
      </>);

};

export default Image;