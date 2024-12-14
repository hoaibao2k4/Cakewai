import { useEffect, useState } from 'react';
import { getCake } from '~/api/apiCakes';

const useCake = (params) => {
  const [cakes, setCakes] = useState([]);
  const categories = [
    { typeId: '', name: 'Tất cả sản phẩm', title: '' },
    { typeId: '672ece906add28a7d3c76449', name: 'Bánh sinh nhật', title: '' },
    { typeId: '672ecebd6add28a7d3c7644a', name: 'Bánh truyền thống', title: '' },
    { typeId: '672ecede6add28a7d3c7644b', name: 'Cookies and Mini Cakes', title: '' },
    { typeId: '672ecefe6add28a7d3c7644c', name: 'Bánh mì và bánh mặn', title: '' },
  ];

  const getTypeOfCakes = (param) => {
    switch (param) {
      case 'birthday':
        return 1;
      case 'tradition':
        return 2;
      case 'cookie':
        return 3;
      case 'bread':
        return 4;
      default:
        return 0;
    }
  };

  const fetchCakes = async (typeId) => {
    try {
      const result = await getCake(typeId);
      setCakes(result?.data || []);
    } catch (error) {
      console.error('Failed to fetch cakes:', error);
      setCakes([]);
    }
  };

  useEffect(() => {
    const index = getTypeOfCakes(params);
    fetchCakes(categories[index].typeId);
  }, [params]);

  const index = getTypeOfCakes(params);
  return { cakes, categoryName: categories[index]?.name };
};

export default useCake;
