import React, { useState, useEffect } from 'react';
import { getDataCollection } from 'fbase/firestoreFuntions';

export function useGetData({ Ref }) {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getDataCollection({
          collectionRef: Ref,
        });
        setDataList(response);
        setLoading(false);
      } catch (error1) {
        setError(error1);
        setLoading(false);
      }
    };
    getData();
  }, []);
  return { dataList, loading, error };
}
