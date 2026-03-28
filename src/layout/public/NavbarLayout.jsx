import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  ShoppingBag,
  Smartphone,
  Shirt,
  Home,
  Sparkles,
  Apple,
  Dumbbell,
  BookOpen,
  Baby,
  Wrench,
  Dog,
  Heart,
  Search,
  User,
  ShoppingCart,
  Menu,
  X,
} from 'lucide-react';
import Sidebar from './Sidebar';

const NavbarLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    { id: 1, name: 'All Departments', icon: ShoppingBag, path: '/' },
    { id: 2, name: 'Electronics', icon: Smartphone, path: '/electronics' },
    { id: 3, name: 'Fashion', icon: Shirt, path: '/fashion' },
    { id: 4, name: 'Home & Garden', icon: Home, path: '/home-garden' },
    { id: 5, name: 'Beauty', icon: Sparkles, path: '/beauty' },
    { id: 6, name: 'Food & Grocery', icon: Apple, path: '/food-grocery' },
    { id: 7, name: 'Sports', icon: Dumbbell, path: '/sports' },
    { id: 8, name: 'Books', icon: BookOpen, path: '/books' },
    { id: 9, name: 'Toys & Kids', icon: Baby, path: '/toys-kids' },
    { id: 10, name: 'Tools & DIY', icon: Wrench, path: '/tools-diy' },
    { id: 11, name: 'Pet Supplies', icon: Dog, path: '/pet-supplies' },
    { id: 12, name: 'Health', icon: Heart, path: '/health' },
  ];

  const getActiveCategory = () => {
    const cat = categories.find((c) => c.path === location.pathname);
    return cat ? cat.name : 'All Departments';
  };

  return (
    <>
      <div className="bg-teal text-navy px-4 py-2 text-center text-[0.6rem] font-medium tracking-[0.05em] max-[580px]:hidden lg:text-[0.78rem]">
        Free shipping on orders over $50 | New merchants welcome | Download our app coming soon
      </div>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-16 z-40 bg-black/50 min-[900px]:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <nav className="sticky top-0 z-300 flex h-16 items-center justify-between border-b border-white/10 bg-[rgba(10,15,30,0.97)] px-3 backdrop-blur-lg min-[640px]:px-4 min-[900px]:grid min-[900px]:grid-cols-[auto_1fr_auto_auto] min-[900px]:gap-6 min-[900px]:px-8">
        <div className="flex items-center gap-2 min-[900px]:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="icon-btn text-gray2 hover:text-teal rounded-sm px-2 py-2 transition hover:bg-[rgba(0,201,167,0.15)]"
            title="Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <a
            href="#"
            className="icon-btn text-gray2 hover:text-teal rounded-sm px-2 py-2 no-underline transition hover:bg-[rgba(0,201,167,0.15)]"
            title="Search"
          >
            <Search size={18} />
          </a>
        </div>

        <Link
          to="/"
          className="font-['Syne'] text-[1.2rem] font-extrabold tracking-[-0.02em] text-white no-underline min-[640px]:text-[1.6rem] min-[900px]:col-start-1"
        >
          ES<span className="text-teal">UUQ</span>
        </Link>

        <div className="search-bar bg-navy3 relative hidden items-center overflow-hidden rounded-sm border border-white/10 min-[900px]:flex">
          <select className="bg-navy3 text-gray2 h-full cursor-pointer border-r border-white/10 px-3 text-[0.8rem] outline-none">
            <option>All</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Home</option>
            <option>Food</option>
            <option>Beauty</option>
          </select>
          <input
            type="text"
            placeholder="Search products, brands, categories..."
            className="placeholder:text-gray flex-1 bg-transparent px-4 py-[0.4rem] lg:py-[0.6rem] text-[0.9rem] text-white outline-none"
          />
          <button
            type="button"
            className="bg-teal text-navy hover:bg-teal2 absolute right-0 h-full px-5 transition-colors"
          >
            <Search size={18} />
          </button>
        </div>

        <div className="flex items-center gap-1.5 min-[640px]:gap-2">
          <div className="group relative order-last min-[640px]:order-first">
            <Link
              to="/login"
              className="icon-btn text-gray2 hover:text-teal flex items-center rounded-sm px-1.5 py-2 no-underline transition hover:bg-[rgba(0,201,167,0.15)] min-[900px]:px-[0.7rem]"
              title="Account"
            >
              <User size={20} className="text-[1.1rem]" />
              <div className="ml-1 hidden text-[0.7rem] min-[900px]:block">
                <div className="text-gray text-[0.65rem]">Hello, Sign in</div>
                <div className="text-[0.82rem] font-medium text-white">Account</div>
              </div>
            </Link>

            {/* Account Dropdown */}
            <div className="invisible absolute top-full right-0 z-400 pt-2 group-hover:visible">
              <div className="w-56 overflow-hidden rounded-md border border-white/10 bg-[#0D1626] shadow-2xl backdrop-blur-xl">
                <div className="border-b border-white/10 p-4">
                  <div className="text-[0.88rem] leading-none font-bold text-white">Dummy User</div>
                  <div className="text-gray mt-1 text-[0.7rem] leading-none tracking-widest uppercase">
                    Role Based Access
                  </div>
                </div>
                <div className="space-y-0.5 p-2">
                  <Link
                    to="/dashboard"
                    className="text-gray2 hover:bg-teal/10 hover:text-teal flex items-center gap-2.5 rounded px-3 py-2 text-[0.82rem] no-underline transition"
                  >
                    <User size={14} /> My Dashboard
                  </Link>
                  <Link
                    to="/admin"
                    className="text-gray2 hover:bg-teal/10 hover:text-teal flex items-center gap-2.5 rounded px-3 py-2 text-[0.82rem] no-underline transition"
                  >
                    <Smartphone size={14} /> Admin Portal
                  </Link>
                  <Link
                    to="/merchant"
                    className="text-gray2 hover:bg-teal/10 hover:text-teal flex items-center gap-2.5 rounded px-3 py-2 text-[0.82rem] no-underline transition"
                  >
                    <ShoppingBag size={14} /> Merchant Portal
                  </Link>
                  <div className="my-1 h-px bg-white/10" />
                  <Link
                    to="/login"
                    className="bg-teal/10 hover:bg-teal hover:text-navy flex items-center gap-2.5 rounded px-3 py-2 text-[0.82rem] font-bold text-white no-underline transition"
                  >
                    Sign In / Register
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link
            to="/wishlist"
            className="icon-btn text-gray2 hover:text-teal relative rounded-sm px-1.5 py-2 no-underline transition hover:bg-[rgba(0,201,167,0.15)] min-[640px]:px-[0.7rem]"
            title="Wishlist"
          >
            <Heart size={18} className="min-[640px]:size-5" />
            <span className="bg-teal text-navy absolute top-0.5 right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full text-[0.6rem] font-bold">
              3
            </span>
          </Link>
          <Link
            to="/cart"
            className="icon-btn text-gray2 hover:text-teal relative rounded-sm px-1.5 py-2 no-underline transition hover:bg-[rgba(0,201,167,0.15)] min-[640px]:px-[0.7rem]"
            title="Cart"
          >
            <ShoppingCart size={18} className="min-[640px]:size-5" />
            <span className="bg-teal text-navy absolute top-0.5 right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full text-[0.6rem] font-bold">
              5
            </span>
          </Link>
        </div>
      </nav>

      <Sidebar
        categories={categories}
        selectedCategory={getActiveCategory()}
        mobileMenuOpen={mobileMenuOpen}
        onSelectCategory={(cat) => {
          navigate(cat.path);
          setMobileMenuOpen(false);
        }}
      />

      <div className="cat-nav bg-navy2 scrollbar-hide hidden items-center overflow-x-auto border-b border-white/10 px-4 min-[900px]:flex min-[900px]:px-8">
        {categories.map((cat) => {
          const IconComponent = cat.icon;
          const isActive = location.pathname === cat.path;
          return (
            <Link
              key={cat.id}
              to={cat.path}
              className={`inline-flex items-center gap-1.5 border-b-2 px-[1.1rem] py-3 text-[0.8rem] tracking-[0.04em] whitespace-nowrap no-underline transition-colors ${
                isActive ? 'border-teal text-teal' : 'text-gray2 hover:text-teal border-transparent'
              }`}
            >
              <IconComponent size={16} />
              {cat.name}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default NavbarLayout;
