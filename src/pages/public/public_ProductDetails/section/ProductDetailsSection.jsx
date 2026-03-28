import React, { useEffect, useMemo, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import ProductGallery from '../components/ProductGallery';
import ProductInfo from '../components/ProductInfo';
import ProductTabs from '../components/ProductTabs';
import RelatedProducts from '../components/RelatedProducts';

const toSlug = (value = '') =>
  value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');

const ProductDetailsSection = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [allProducts, setAllProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [wishlisted, setWishlisted] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError('');

        const response = await axios.get('/data/product_details.json');
        const products = response.data || {};

        setAllProducts(products);
        setProduct(products[id] || products.default || null);
      } catch (err) {
        setError('Unable to load product details right now.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
    window.scrollTo(0, 0);
  }, [id]);

  const relatedProducts = useMemo(() => {
    const list = Object.entries(allProducts)
      .filter(([key]) => key !== id && key !== 'default')
      .map(([key, value]) => ({ id: key, ...value }));

    if (list.length > 0) {
      return list.slice(0, 4);
    }

    if (!product) {
      return [];
    }

    return Array.from({ length: 4 }).map((_, index) => ({
      id: `${toSlug(product.name)}-${index + 1}`,
      ...product,
      name: `${product.name} ${index + 1}`,
      price: Number(product.price) + (index + 1) * 5,
      oldPrice: Number(product.oldPrice) + (index + 1) * 8,
      rating: Math.min(5, Number(product.rating) + 0.1 * (index % 2)),
      reviews: Number(product.reviews) + (index + 1) * 37,
    }));
  }, [allProducts, id, product]);

  if (loading) {
    return (
      <div className="bg-navy flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-2 border-teal border-t-transparent" />
          <p className="text-gray2 text-sm">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-navy flex min-h-screen items-center justify-center p-6">
        <div className="bg-card w-full max-w-md rounded-md border border-red/30 p-6 text-center">
          <h2 className="mb-2 text-xl font-semibold text-white">Something went wrong</h2>
          <p className="text-gray2 text-sm">{error}</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="bg-navy flex min-h-screen items-center justify-center p-6">
        <div className="bg-card w-full max-w-md rounded-md border border-white/10 p-6 text-center">
          <h2 className="mb-2 text-xl font-semibold text-white">Product not found</h2>
          <p className="text-gray2 text-sm">The item you are looking for is currently unavailable.</p>
        </div>
      </div>
    );
  }

  const categoryLink = `/${toSlug(product.category || 'category')}`;

  return (
    <div className="bg-navy min-h-screen pb-12 selection:bg-teal selection:text-navy">
      <div className="border-b border-white/10 bg-navy2/40">
        <div className="container mx-auto flex items-center gap-2 overflow-x-auto px-4 py-3 text-[0.65rem] font-bold uppercase tracking-widest text-gray2 sm:px-6 lg:px-8 lg:text-xs">
          <Link to="/" className="whitespace-nowrap transition-colors hover:text-teal font-black">
            Marketplace
          </Link>
          <ChevronRight size={10} className="shrink-0 text-white/20" />
          <Link to={categoryLink} className="whitespace-nowrap transition-colors hover:text-teal font-black">
            {product.category}
          </Link>
          <ChevronRight size={10} className="shrink-0 text-white/20" />
          <span className="truncate text-teal">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-6 sm:px-6 lg:px-8 lg:pt-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12 xl:grid-cols-[1.05fr_1fr] xl:gap-16">
          <ProductGallery
            product={product}
            wishlisted={wishlisted}
            onWishlistToggle={() => setWishlisted((prev) => !prev)}
          />
          <ProductInfo product={product} />
        </div>

        <ProductTabs product={product} />

        <RelatedProducts items={relatedProducts} />
      </div>
    </div>
  );
};

export default ProductDetailsSection;
