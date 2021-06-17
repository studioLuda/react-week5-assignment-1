import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadInitialData } from './actions';
import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';
// 목표
// 0. 지역, 분류 목록을 얻기
// 1. 지역 선택
// 2. 분류 선택
// 3. 식당 목록

export default function RestaurantsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  }, []);

  return (
    <div>
      {/* <RestaurantsPage/> */}
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}
