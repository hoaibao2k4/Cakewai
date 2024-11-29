import { CakeDropdown } from '~/components/clients/client';
import Card from '../Card';
import useCake from '~/hooks/useCake';
import usePagination from '~/hooks/usePagination';
import { useState } from 'react';
import { Pagination } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
function Categories({ params }) {
  const { cakes, categoryName } = useCake(params);
  const cakesPerPage = usePagination(cakes);
  // console.log(cakesPerPage.currentData()[0].product_variant[0].price)
  return (
    <div className="mt-16 w-full bg-slate-100">
      <div className="mx-[5rem]">
        <div className="flex h-11 items-center text-primary">
          <div>
            <a href="/">Trang chủ </a>
            <span>&gt;&gt;</span>
            <a href="/category"> Menu Bánh </a>
            {categoryName !== 'Tất cả sản phẩm' && (
              <>
                <span>&gt;&gt;</span>
                <NavLink to="/" className="capitalize">
                  {' '}
                  {categoryName}{' '}
                </NavLink>
              </>
            )}
          </div>
        </div>
        <h1 className="text-center text-5xl font-bold capitalize leading-[72px]">{categoryName}</h1>
        <p className="py-5 text-center text-sm font-bold leading-4">
          Bánh truyền thống là một trong những loại bánh đã đưa tên tuổi chúng tôi có được ngày hôm nay, đây là một
          trong <br />
          số nhiều loại bán chạy nhất hiện nay
        </p>
        <div className="">
          <div className="float-right mx-4">
            <CakeDropdown></CakeDropdown>
          </div>
          <div className="product grid-custom-3 relative grid w-full justify-evenly">
            {cakesPerPage.currentData().map((cake, index) => (
              <Card
                key={index}
                id={cake._id}
                image_link={cake.image_link}
                description={cake.description}
                product_name={cake.product_name}
                categoryName={categoryName}
                price={cake.product_variant[0].price}
              />
            ))}
          
          </div>
         <div className='flex items-center justify-center py-4'>
           <ThemeProvider theme={theme}>
             <Pagination
               count={cakesPerPage.maxPage}
               size="large"
               page={cakesPerPage.currentPage}
               color="secondary"
               onChange={(e, value) => cakesPerPage.jump(value)}
             />
           </ThemeProvider>
         </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;

const theme = createTheme({
  palette: {
    secondary: {
      main: '#CDB0A9',
    },
  },
});
