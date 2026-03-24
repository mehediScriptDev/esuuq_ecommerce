import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

const NavbarLayout = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Departments');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    { id: 1, name: 'All Departments', icon: ShoppingBag },
    { id: 2, name: 'Electronics', icon: Smartphone },
    { id: 3, name: 'Fashion', icon: Shirt },
    { id: 4, name: 'Home & Garden', icon: Home },
    { id: 5, name: 'Beauty', icon: Sparkles },
    { id: 6, name: 'Food & Grocery', icon: Apple },
    { id: 7, name: 'Sports', icon: Dumbbell },
    { id: 8, name: 'Books', icon: BookOpen },
    { id: 9, name: 'Toys & Kids', icon: Baby },
    { id: 10, name: 'Tools & DIY', icon: Wrench },
    { id: 11, name: 'Pet Supplies', icon: Dog },
    { id: 12, name: 'Health', icon: Heart },
  ];

  return (
    <>
      <div className="bg-teal px-4 py-2 text-center text-[0.78rem] font-medium tracking-[0.05em] text-navy max-[580px]:hidden">
        Free shipping on orders over $50 | New merchants welcome | Download our app coming soon
      </div>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-16 z-40 bg-black/50 min-[900px]:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Main Navbar */}
      <nav className="sticky top-0 z-300 flex h-16 items-center justify-between border-b border-white/10 bg-[rgba(10,15,30,0.97)] px-3 backdrop-blur-lg min-[640px]:px-4 min-[900px]:grid min-[900px]:grid-cols-[auto_1fr_auto_auto] min-[900px]:gap-6 min-[900px]:px-8">
        
        {/* Left Section: Menu + Search (Mobile) */}
        <div className="flex items-center gap-2 min-[900px]:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="icon-btn rounded-sm px-2 py-2 text-gray2 transition hover:bg-[rgba(0,201,167,0.15)] hover:text-teal"
            title="Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <a href="#" className="icon-btn rounded-sm px-2 py-2 text-gray2 transition hover:bg-[rgba(0,201,167,0.15)] hover:text-teal no-underline" title="Search">
            <Search size={18} />
          </a>
        </div>

        {/* Center: Logo */}
        <Link to="/" className="font-['Syne'] text-[1.2rem] font-extrabold tracking-[-0.02em] text-white no-underline min-[640px]:text-[1.6rem] min-[900px]:col-start-1">
          ES<span className="text-teal">UUQ</span>
        </Link>

        {/* Desktop Search Bar */}
        <div className="relative search-bar hidden items-center overflow-hidden rounded-sm border border-white/10 bg-navy3 min-[900px]:flex">
          <select className="h-full cursor-pointer border-r border-white/10 bg-navy3 px-3 text-[0.8rem] text-gray2 outline-none">
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
            className="flex-1 bg-transparent px-4 py-[0.6rem] text-[0.9rem] text-white outline-none placeholder:text-gray"
          />
          <button type="button" className="h-full absolute right-0 bg-teal px-5 text-navy transition-colors hover:bg-teal2">
            <Search size={18} />
          </button>
        </div>

        {/* Right Section: Account (Desktop only) + Wishlist + Cart */}
        <div className="flex items-center gap-1.5 min-[640px]:gap-2">
          <a href="#" className="icon-btn hidden items-center rounded-sm px-1.5 py-2 text-gray2 transition hover:bg-[rgba(0,201,167,0.15)] hover:text-teal no-underline min-[900px]:flex min-[900px]:px-[0.7rem]" title="Account">
            <User size={20} className="text-[1.1rem]" />
            <div className="ml-1 text-[0.7rem]">
              <div className="text-[0.65rem] text-gray">Hello, Sign in</div>
              <div className="text-[0.82rem] font-medium text-white">Account</div>
            </div>
          </a>
          <a href="#" className="icon-btn relative rounded-sm px-1.5 py-2 text-gray2 transition hover:bg-[rgba(0,201,167,0.15)] hover:text-teal no-underline min-[640px]:px-[0.7rem]" title="Wishlist">
            <Heart size={18} className="min-[640px]:size-5" />
            <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-teal text-[0.6rem] font-bold text-navy">3</span>
          </a>
          <a href="#" className="icon-btn relative rounded-sm px-1.5 py-2 text-gray2 transition hover:bg-[rgba(0,201,167,0.15)] hover:text-teal no-underline min-[640px]:px-[0.7rem]" title="Cart">
            <ShoppingCart size={18} className="min-[640px]:size-5" />
            <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-teal text-[0.6rem] font-bold text-navy">5</span>
          </a>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-navy2 border-r border-white/10 overflow-y-auto transition-transform duration-300 z-50 min-[900px]:hidden ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {categories.map((cat) => {
          const IconComponent = cat.icon;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setSelectedCategory(cat.name);
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-[0.9rem] tracking-[0.04em] transition-colors border-l-4 ${
                selectedCategory === cat.name
                  ? 'border-teal bg-[rgba(0,201,167,0.1)] text-teal'
                  : 'border-transparent text-gray2 hover:bg-[rgba(0,201,167,0.05)] hover:text-teal'
              }`}
            >
              <IconComponent size={20} />
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Desktop Category Nav */}
      <div className="cat-nav hidden items-center overflow-x-auto border-b border-white/10 bg-navy2 px-4 scrollbar-hide min-[900px]:flex min-[900px]:px-8">
        {categories.map((cat) => {
          const IconComponent = cat.icon;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.name)}
              className={`whitespace-nowrap border-b-2 px-[1.1rem] py-3 text-[0.8rem] tracking-[0.04em] transition-colors inline-flex items-center gap-1.5 ${
                selectedCategory === cat.name
                  ? 'border-teal text-teal'
                  : 'border-transparent text-gray2 hover:text-teal'
              }`}
            >
              <IconComponent size={16} />
              {cat.name}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default NavbarLayout;
