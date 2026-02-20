import type { FC } from 'react';
import type { ProductsType } from '../@types';
import { EllipsisVertical, ThumbsUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { collectLikeProduct } from '../store/LikeSlice';

const ProductCard: FC<{ item: ProductsType }> = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(item.id);

  const erroImg =
    'https://cdni.iconscout.com/illustration/premium/thumb/sorry-item-not-found-illustration-svg-download-png-2809510.png';
  return (
    <div className="w-68 rounded-2xl overflow-hidden bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="h-50 relative overflow-hidden">
        <img
          onError={(evt) => ((evt.target as HTMLImageElement).src = erroImg)}
          src={item.images[0]}
          alt={item.title}
          className="w-full h-full object-cover transition duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
        <span className="absolute top-3 left-3 text-xs px-3 py-1 rounded-full bg-indigo-500/30 text-indigo-300 border border-indigo-400/20">
          {item.category.name}
        </span>
        <span
          onClick={() => navigate(`${item.id}`)}
          className="absolute cursor-pointer top-3 right-3 text-xs p-1 rounded-full hover:bg-indigo-600 duration-300 bg-indigo-500/30 hover:text-white text-indigo-300 border border-indigo-400/20"
        >
          <EllipsisVertical size={15} />
        </span>
        <span
          onClick={() => dispatch(collectLikeProduct(item))}
          className="absolute top-10 right-3 text-xs p-1 rounded-full bg-indigo-500/30 text-indigo-300 border border-indigo-400/20"
        >
          <ThumbsUp size={15} />
        </span>
      </div>
      <div className="p-4 flex-col justify-between">
        <h3 className="text-white font-semibold text-base line-clamp-1">
          {item.title}
        </h3>
        <p className="text-slate-400 text-sm mt-2 line-clamp-4">
          {item.description}
        </p>
        <div className="flex items-center mt-5 justify-between">
          <span className="text-indigo-200 font-semibold text-lg">
            {item.price.toLocaleString()} $
          </span>
          <span className="text-xs text-slate-200">#{item.id}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
