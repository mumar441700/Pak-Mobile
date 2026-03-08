import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Smartphone, 
  Search, 
  X, 
  Cpu, 
  HardDrive, 
  Camera, 
  Battery, 
  Monitor,
  ChevronRight,
  ShoppingBag,
  Menu,
  PhoneCall
} from 'lucide-react';
import { products, Product } from './data';

export default function App() {
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const brands = ['All', 'Samsung', 'Apple', 'Tecno', 'Oppo'];

  const handleBuy = (productName: string) => {
    const phoneNumber = '6285702554631';
    const message = encodeURIComponent(`Hello, I want to buy ${productName}`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleContact = () => {
    const phoneNumber = '6285702554631';
    const message = encodeURIComponent('i need help');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesBrand = selectedBrand === 'All' || product.brand === selectedBrand;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesBrand && matchesSearch;
    });
  }, [selectedBrand, searchQuery]);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-600 p-1.5 rounded-lg">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">PakMobile<span className="text-emerald-600">Hub</span></span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {brands.map(brand => (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                    selectedBrand === brand ? 'text-emerald-600' : 'text-zinc-500'
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search phones..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-zinc-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 w-48 lg:w-64 transition-all"
                />
              </div>
              <button className="p-2 hover:bg-zinc-100 rounded-full transition-colors relative">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-emerald-500 rounded-full border-2 border-white"></span>
              </button>
              <button 
                className="md:hidden p-2 hover:bg-zinc-100 rounded-full"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-black/5 px-4 py-4 space-y-2"
          >
            {brands.map(brand => (
              <button
                key={brand}
                onClick={() => {
                  setSelectedBrand(brand);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium ${
                  selectedBrand === brand ? 'bg-emerald-50 text-emerald-600' : 'text-zinc-600 hover:bg-zinc-50'
                }`}
              >
                {brand}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header className="relative py-12 sm:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
              Find Your Perfect <br />
              <span className="text-emerald-600">Mobile Companion</span>
            </h1>
            <p className="text-zinc-500 text-lg mb-8 leading-relaxed">
              Explore the latest collection from top brands including Samsung, Apple, Tecno, and Oppo. 
              Authentic products with official warranty and best prices in Pakistan.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-emerald-600 text-white rounded-2xl font-semibold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20">
                Shop Now
              </button>
              <button 
                onClick={handleContact}
                className="px-8 py-4 bg-white border border-zinc-200 rounded-2xl font-semibold hover:bg-zinc-50 transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-emerald-100/50 rounded-full blur-3xl -z-0" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-3xl -z-0" />
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-1">Featured Phones</h2>
            <p className="text-zinc-500 text-sm">Showing {filteredProducts.length} products</p>
          </div>
          
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
            {brands.map(brand => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedBrand === brand 
                    ? 'bg-zinc-900 text-white shadow-lg shadow-zinc-900/20' 
                    : 'bg-white border border-zinc-200 text-zinc-600 hover:border-zinc-300'
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group bg-white rounded-3xl border border-black/5 p-4 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 flex flex-col"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-50 mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-wider text-zinc-500 border border-black/5">
                      {product.brand}
                    </span>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1 group-hover:text-emerald-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-zinc-500 text-sm line-clamp-2 mb-4">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto gap-2">
                    <div className="flex-1">
                      <span className="text-xs text-zinc-400 block uppercase font-bold tracking-widest">Price</span>
                      <span className="text-xl font-black text-zinc-900">
                        Rs. {product.price.toLocaleString()}
                      </span>
                    </div>
                    <button 
                      onClick={() => handleBuy(product.name)}
                      className="px-4 py-2 bg-emerald-600 text-white text-xs font-bold rounded-xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/10"
                    >
                      Buy
                    </button>
                    <button 
                      onClick={() => setSelectedProduct(product)}
                      className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center hover:bg-zinc-200 transition-all"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-24 text-center">
            <div className="bg-zinc-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-zinc-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">No phones found</h3>
            <p className="text-zinc-500">Try adjusting your search or brand filter</p>
          </div>
        )}
      </main>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-[32px] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto no-scrollbar"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-zinc-100 hover:bg-zinc-200 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="md:w-1/2 bg-zinc-50 p-8 flex items-center justify-center">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full max-w-sm h-auto object-contain drop-shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Info Section */}
                <div className="md:w-1/2 p-8 sm:p-12">
                  <div className="mb-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2 block">
                      {selectedProduct.brand}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
                      {selectedProduct.name}
                    </h2>
                    <p className="text-zinc-500 leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-10">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <Cpu className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase text-zinc-400 block">RAM</span>
                        <span className="text-sm font-bold">{selectedProduct.specs.ram}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-purple-50 rounded-lg">
                        <HardDrive className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase text-zinc-400 block">Storage</span>
                        <span className="text-sm font-bold">{selectedProduct.specs.storage}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-orange-50 rounded-lg">
                        <Camera className="w-4 h-4 text-orange-600" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase text-zinc-400 block">Camera</span>
                        <span className="text-sm font-bold">{selectedProduct.specs.camera}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-green-50 rounded-lg">
                        <Battery className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase text-zinc-400 block">Battery</span>
                        <span className="text-sm font-bold">{selectedProduct.specs.battery}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 col-span-2">
                      <div className="p-2 bg-red-50 rounded-lg">
                        <Monitor className="w-4 h-4 text-red-600" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase text-zinc-400 block">Display</span>
                        <span className="text-sm font-bold">{selectedProduct.specs.display}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-6 pt-8 border-t border-zinc-100">
                    <div className="w-full sm:w-auto">
                      <span className="text-xs text-zinc-400 block uppercase font-bold tracking-widest">Price</span>
                      <span className="text-3xl font-black text-zinc-900">
                        Rs. {selectedProduct.price.toLocaleString()}
                      </span>
                    </div>
                    <button 
                      onClick={() => handleBuy(selectedProduct.name)}
                      className="w-full sm:flex-1 py-4 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20 flex items-center justify-center gap-2"
                    >
                      <PhoneCall className="w-5 h-5" />
                      Buy via WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-white border-t border-black/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-600 p-1.5 rounded-lg">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">PakMobile<span className="text-emerald-600">Hub</span></span>
            </div>
            <div className="flex gap-8 text-sm text-zinc-500 font-medium">
              <a href="#" className="hover:text-emerald-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-600 transition-colors">Terms of Service</a>
              <button onClick={handleContact} className="hover:text-emerald-600 transition-colors cursor-pointer">Contact Us</button>
            </div>
            <p className="text-zinc-400 text-sm">
              © 2024 PakMobile Hub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
