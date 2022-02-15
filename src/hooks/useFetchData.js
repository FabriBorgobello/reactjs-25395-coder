import * as React from "react";

const useFetchData = (url) => {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [url]);

  const reset = () => {
    setData([]);
    setIsLoading(false);
    setError(null);
  };

  return { data, isLoading, error, reset };
};

export default useFetchData;
