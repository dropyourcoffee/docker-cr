import {useParams} from "react-router";

// export interface ImagePageProps {
//   tag: string;
// }

const Image = ()=>{
  const {tag} = useParams();
  console.log(`tag ${tag}`);

  return(<div>
      Page for image, {tag}
    </div>);

};

export default Image;