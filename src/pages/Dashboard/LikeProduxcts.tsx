import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { ProductCard } from '../../components';
import { removeLikeProduct } from '../../store/LikeSlice';
import type { ProductsType } from '../../@types';
import { AiFillDelete } from 'react-icons/ai';

const LikeProducts = () => {
  const dispatch = useDispatch();
  const products: ProductsType[] = useSelector(
    (state: any) => state.likelist || []
  );
  const [search, setSearch] = useState('');
  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  const handleDelete = (id: number) => {
    dispatch(removeLikeProduct(id));
  };
  return (
    <div className="max-w-6xl mx-auto p-5">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      {filteredProducts.length > 0 ? (
        <ul className="grid grid-cols-4 gap-5">
          {filteredProducts.map((item) => (
            <li key={item.id} className="relative">
              <ProductCard item={item} />
              <button
                onClick={() => handleDelete(item.id)}
                className="absolute top-18 right-1 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition"
                title="Delete"
              >
                <AiFillDelete size={16} />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">Cardlar yo‘q</p>
      )}
    </div>
  );
};

export default LikeProducts;
