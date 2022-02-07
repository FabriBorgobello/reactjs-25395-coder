import { useParams } from "react-router-dom";

const MisionPage = () => {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1>MisionPage</h1>
    </div>
  );
};

export default MisionPage;
