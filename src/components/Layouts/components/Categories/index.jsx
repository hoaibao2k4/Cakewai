import Card from '../Card';
import useCake from '~/hooks/useCake';
import usePagination from '~/hooks/usePagination';
import { Pagination } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useRef, useState } from 'react';
import { getCake, searchCakes, sortCakes } from '~/api/apiCakes';
import { toast } from 'react-toastify';
function Categories({ params }) {
  const { cakes, categoryName, setCakes, getTypeOfCakes, categories } = useCake(params);
  const cakesPerPage = usePagination(cakes);
  const [selectedLabel, setSelectedLabel] = useState(3);
  const [prompt, setPrompt] = useState('');
  const ref = useRef(null);
  const handleChange = async (event) => {
    setSelectedLabel(event.target.value);
    const order = event.target.value === 1 ? 'asc' : event.target.value === 2 ? 'desc' : 'default';
    try {
      if (order === 'default') {
        const index = getTypeOfCakes(params);
        const res = await getCake(categories[index].typeId);
        setCakes(res.data);
      } else {
        const res = await sortCakes(order);
        setCakes(res);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = async () => {
    const res = await searchCakes(prompt);
    if (res) setCakes(res);
    else {
      toast.info('Không tìm thấy nội dung', { position: 'bottom-right', onClose: 3000 });
    }
    ref.current.blur();
  };
  const handleEnterPress = async (e) => {
    if (e.key === 'Enter') {
      const res = await searchCakes(prompt);
      setCakes(res);
      ref.current.blur();
    }
  };
  const label = 'Bộ lọc';
  const items = [
    { id: 1, value: 'Giá từ thấp đến cao' },
    { id: 2, value: 'Giá từ cao đến thấp' },
    { id: 3, value: 'Mặc định' },
  ];
  const handleChangePage = (e, value) => {
    cakesPerPage.jump(value);
  };

  return (
    <div className="mt-16 w-full bg-white">
      <div className="mx-[2rem] lg:mx-[5rem]">
        <div className="my-3 ml-[32px] flex h-11 items-center pt-[43px] text-primary">
          <div className="text-sm lg:text-base">
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
        <h1 className="text-center text-3xl font-bold capitalize leading-[72px] md:text-4xl lg:text-5xl">
          {categoryName}
        </h1>
        <p className="py-5 text-center text-sm font-bold leading-4">
          Bánh truyền thống là một trong những loại bánh đã đưa tên tuổi chúng tôi có được ngày hôm nay, đây là một
          trong <br />
          số nhiều loại bán chạy nhất hiện nay
        </p>
        <div className="">
          <div className="mx-16 flex lg:flex-row flex-col items-center lg:gap-[22rem] gap-10">
            <div className="lg:w-3/5 md:w-2/4 w-full">
              <label htmlFor="search" className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Search
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                  <IoIosSearch className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  type="text"
                  id="search"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Tìm kiếm bánh..."
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyDown={handleEnterPress}
                  ref={ref}
                  value={prompt}
                />
                <button
                  type="submit"
                  onClick={handleSearch}
                  className="absolute right-2.5 top-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </div>
            <div className="">
              <Box sx={{ minWidth: 200 }}>
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedLabel}
                    label={label}
                    onChange={handleChange}
                  >
                    {items.map((item, index) => (
                      <MenuItem key={index} value={item.id}>
                        {item.value}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
          <div className="product lg:grid-custom-3 md:grid-custom-2 grid-custom-1 relative grid w-full justify-evenly">
            {cakesPerPage.currentData().map((cake, index) => (
              <Card
                key={index}
                id={cake._id}
                image_link={cake.image_link}
                description={cake.description}
                product_name={cake.product_name}
                categoryName={categoryName}
                price={cake.product_variant[0].price}
                cake={cake}
              />
            ))}
          </div>
          <div className="flex items-center justify-center py-4">
            <ThemeProvider theme={theme}>
              <Pagination
                count={cakesPerPage.maxPage}
                size="large"
                page={cakesPerPage.currentPage}
                color="secondary"
                onChange={handleChangePage}
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
