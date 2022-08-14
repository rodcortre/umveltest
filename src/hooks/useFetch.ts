import { useState } from "react";
export const useFetch = () => {
    const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data,setData] = useState<any>([])
  const refetch = async (url:string) => {   
      setData([])   
    try {
      setIsError(false)
      setIsLoading(true);
      const requestInfo = await fetch(url);
      const waitForInformation = await requestInfo.json();
      waitForInformation.error
        ? setIsError(true)
        : setData(waitForInformation);
    } catch (e) {
        setData([]);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
    return{isLoading,isError,data,refetch}
}