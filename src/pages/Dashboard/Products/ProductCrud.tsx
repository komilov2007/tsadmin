import { useEffect, useState, type SubmitEvent } from 'react';
import { Button, Input, Select } from '../../../components';
import { LoadingWhite } from '../../../assets/images';
import { useNavigate, useParams } from 'react-router-dom';
import { CrudFn } from '../../../services';
import { instance } from '../../../hooks';

const ProductCreate = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<any[]>([]);

  const [title, setTitle] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [categoryId, setCategoryId] = useState<string>('');
  const [images, setImages] = useState<string>('');

  // 🔥 SUBMIT
  function handleSubmit(evt: SubmitEvent<HTMLFormElement>) {
    evt.preventDefault();
    setLoading(true);

    const data = {
      title,
      price: Number(price),
      description,
      categoryId: Number(categoryId),
      images: [images],
    };

    CrudFn('/products', data, navigate, setLoading, id);
  }

  // 🔥 CATEGORY LOAD
  useEffect(() => {
    instance
      .get('/categories')
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  // 🔥 EDIT MODE
  useEffect(() => {
    if (id) {
      instance.get(`/products/${id}`).then((res) => {
        setTitle(res.data.title);
        setPrice(String(res.data.price));
        setCategoryId(String(res.data.category.id));
        setDescription(res.data.description);
        setImages(res.data.images[0]);
      });
    }
  }, [id]);

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">
            {id ? "O'zgartirish" : 'Yangi Mahsulot'}
          </h1>

          <Button
            extraClass="w-25 flex items-center justify-center h-[44px]"
            type="submit"
          >
            {loading ? (
              <img src={LoadingWhite} alt="loading" width={28} />
            ) : (
              'Saqlash'
            )}
          </Button>
        </div>

        <div className="bg-white/5 w-[600px] mx-auto p-6 rounded-2xl ring-1 ring-white/10 flex flex-col gap-5">
          {/* TITLE */}
          <label className="text-xs text-slate-300">
            Title
            <Input
              value={title}
              setValue={setTitle}
              extraClass="bg-slate-200 text-black"
              name="title"
              type="text"
              placeholder="New Product"
            />
          </label>

          {/* PRICE + CATEGORY */}
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="text-xs text-slate-300">
              Price
              <Input
                value={price}
                setValue={setPrice}
                extraClass="bg-slate-200 text-black"
                name="price"
                type="text"
                placeholder="Price"
              />
            </label>

            <label className="text-xs text-slate-300">
              Category
              <Select
                list={categories}
                value={categoryId}
                setValue={setCategoryId}
                extraClass="bg-slate-200 text-black"
              />
            </label>
          </div>

          {/* DESC */}
          <label className="text-xs text-slate-300">
            Description
            <Input
              value={description}
              setValue={setDescription}
              extraClass="bg-slate-200 text-black"
              name="description"
              type="text"
              placeholder="A description"
            />
          </label>

          {/* IMAGE */}
          <label className="text-xs text-slate-300">
            Image URL
            <Input
              value={images}
              setValue={setImages}
              extraClass="bg-slate-200 text-black"
              name="images"
              type="text"
              placeholder="https://placehold.co"
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default ProductCreate;
