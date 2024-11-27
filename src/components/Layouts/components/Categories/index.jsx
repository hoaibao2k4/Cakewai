import { CakeDropdown } from '~/components/clients/client';
import Card from '../Card';
import useCake from '~/hooks/useCake';
function Categories({params}) {
  const {cakes, categoryName} = useCake(params)
  return (
    <div className="mt-16 w-full bg-slate-100">
      <div className="mx-[5rem]">
        <div className="flex h-11 items-center text-primary">
          <div>
            <a href="/">Trang chủ </a>
            <span>&gt;&gt;</span>
            <a href="/"> Menu Bánh </a>
          </div>
        </div>
        <h1 className="text-center text-5xl font-bold leading-[72px] capitalize">{categoryName}</h1>
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
            {cakes.map((cake, index) => (
              <Card
                key={index}
                image_link={cake.image_link}
                description={cake.description}
                product_name={cake.product_name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
