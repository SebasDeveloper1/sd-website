import React, { useState } from 'react';
import { useGetData } from 'hooks/useGetData';

export function useSearchProjects() {
  const { dataList, loading, error } = useGetData({ Ref: 'projects' });
  const [searchValue, setSearchValue] = useState('');

  let searchedProjects = [];

  if (!searchValue >= 1) {
    searchedProjects = dataList;
  } else {
    searchedProjects = dataList.filter((project) => {
      const infoProj = [
        project?.name,
        project?.description,
        project?.type,
        project?.category,
        project?.tools,
      ]
        .join(',')
        .toLowerCase()
        .trim();
      const searchText = searchValue.toLowerCase().trim();
      return infoProj.includes(searchText);
    });
  }

  return {
    loading,
    error,
    searchValue,
    setSearchValue,
    searchedProjects,
  };
}
