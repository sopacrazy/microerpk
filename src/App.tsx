
import React, { useState } from 'react';
import { 
  Store, 
  TrendingUp, 
  Package, 
  CreditCard, 
  CheckCircle2, 
  BarChart3, 
  ShieldCheck, 
  Zap,
  ArrowRight,
  Search,
  ShoppingCart,
  X,
  Plus,
  Trash2,
  DollarSign
} from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-brand-500/30">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-brand-600 p-2 rounded-lg">
              <Store className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">
              MicroERP Varejo
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-brand-600 transition-colors">Funcionalidades</a>
            <a href="#benefits" className="hover:text-brand-600 transition-colors">Vantagens</a>
            <a 
              href="https://pay.kiwify.com.br/a61mlFc"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2 rounded-full transition-all flex items-center gap-2 group shadow-lg shadow-brand-500/30"
            >
              Comprar Agora
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </nav>

      {showDemo ? (
        <InteractiveDemo onClose={() => setShowDemo(false)} />
      ) : (
        <>
          {/* Hero Section */}
          <section className="pt-32 pb-20 relative px-6 overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/2 w-[800px] h-[800px] bg-brand-50/50 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 translate-y-24 -translate-x-1/3 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-3xl -z-10" />
            
            <div className="container mx-auto text-center max-w-5xl relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-100 rounded-full px-4 py-1.5 mb-8">
                  <span className="flex h-2 w-2 rounded-full bg-brand-600 animate-pulse"></span>
                  <span className="text-sm font-medium text-brand-700">Sistema completo para seu negócio</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-slate-900 tracking-tight">
                  Controle total da sua loja <br />
                  <span className="text-brand-600">
                    simples e eficiente.
                  </span>
                </h1>

                {/* Price Highlight */}
                <div className="flex justify-center mb-8">
                  <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 flex flex-col items-center shadow-lg shadow-emerald-500/10 transform hover:scale-105 transition-transform duration-300">
                     <span className="text-slate-500 text-sm font-medium uppercase tracking-wide mb-1">Oferta Especial</span>
                     <div className="flex items-end gap-2 text-emerald-600 mb-1">
                       <span className="text-2xl font-bold mb-1">R$</span>
                       <span className="text-6xl font-black tracking-tighter">120</span>
                       <span className="text-xl font-bold mb-1">,00</span>
                     </div>
                     <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                       Pagamento Único
                     </span>
                  </div>
                </div>
                
                <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Sistema completo de PDV, Gestão de Estoque e Finanças. 
                  <br />
                  <span className="font-bold text-slate-800">Funciona 100% Offline (Sem Internet).</span> 
                  <br />
                  Sem mensalidades. Compre uma vez e use para sempre.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                  <a 
                    href="https://pay.kiwify.com.br/a61mlFc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-xl shadow-green-500/20 hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-6 h-6" />
                    Comprar Agora
                  </a>
                  <button 
                    onClick={() => setShowDemo(true)}
                    className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all border border-transparent shadow-lg shadow-brand-600/20 hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <Zap className="w-5 h-5 fill-current" />
                    Testar Grátis
                  </button>
                </div>
              </motion.div>

              {/* Static Preview Image (Placeholder for now, but cleaner) */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative mx-auto max-w-6xl shadow-2xl rounded-2xl overflow-hidden border border-slate-200"
              >
               <div className="bg-slate-100 p-2 border-b border-slate-200 flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-red-400"></div>
                 <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                 <div className="w-3 h-3 rounded-full bg-green-400"></div>
               </div>
               <div className="aspect-video bg-white relative flex items-center justify-center group cursor-pointer" onClick={() => setShowDemo(true)}>
                 <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-slate-900/10 transition-colors z-10" />
                 <img 
                   src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=2000" 
                   alt="Dashboard Preview" 
                   className="w-full h-full object-cover opacity-90 blur-[2px] group-hover:blur-sm transition-all duration-500 scale-100 group-hover:scale-105"
                 />
                 <div className="absolute z-20 bg-white/90 backdrop-blur px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 transform transition-transform group-hover:scale-110">
                   <div className="bg-brand-600 p-2 rounded-full text-white">
                     <Zap className="w-6 h-6 fill-current" />
                   </div>
                   <span className="text-xl font-bold text-slate-900">Clique para Abrir o Sistema</span>
                 </div>
                 
                 {/* Offline Badge on Preview */}
                 <div className="absolute bottom-6 right-6 z-20 bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 shadow-lg">
                   <ShieldCheck className="w-4 h-4 text-emerald-400" />
                   Funciona Offline
                 </div>
               </div>
              </motion.div>
            </div>
          </section>

          {/* Partners / Logos */}
          <section className="py-10 border-y border-slate-100 bg-slate-50/50">
            <div className="container mx-auto px-6 text-center">
              <p className="text-sm font-medium text-slate-500 mb-8 uppercase tracking-wider">A escolha inteligente para seu negócio</p>
              <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                 {['MiniMercado', 'PadariaCentral', 'LojaDeRoupas', 'TechInfo', 'PetShopAmigo'].map(name => (
                   <span key={name} className="text-xl font-bold font-sans text-slate-800">{name}</span>
                 ))}
              </div>
            </div>
          </section>

          {/* Features Grid */}
          <section id="features" className="py-24 relative overflow-hidden bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Tudo que você precisa</h2>
                <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                  Simplificamos a gestão para você focar em vender.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureCard 
                  icon={<TrendingUp />}
                  title="Dashboard Completo"
                  description="Visualize suas vendas em tempo real, fluxo de caixa e alertas de estoque baixo na tela inicial."
                />
                <FeatureCard 
                  icon={<CreditCard />}
                  title="PDV Ágil"
                  description="Frente de caixa rápido, com suporte a código de barras, PIX, dinheiro e cartões."
                />
                <FeatureCard 
                  icon={<Package />}
                  title="Controle de Estoque"
                  description="Gerencie produtos, categorias, preços de custo e venda. Nunca mais perca uma venda por falta de estoque."
                />
                <FeatureCard 
                  icon={<BarChart3 />}
                  title="Financeiro Integrado"
                  description="Contas a pagar e receber, histórico de transações e relatórios detalhados de lucro."
                />
                <FeatureCard 
                  icon={<ShieldCheck />}
                  title="100% Offline e Seguro"
                  description="Funciona sem internet. Seus dados ficam salvos exclusivamente no seu computador."
                />
                <FeatureCard 
                  icon={<Zap />}
                  title="Fácil de Usar"
                  description="Interface intuitiva e moderna. Sem necessidade de treinamentos complexos."
                />
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                    Otimize seu tempo e maximize seus lucros
                  </h2>
                  <div className="space-y-6">
                    {[
                      "Acompanhamento de métricas vitais em tempo real",
                      "Redução de 30% no tempo de fechamento de caixa",
                      "Eliminação de erros de estoque e precificação",
                      "Relatórios que ajudam na tomada de decisão",
                      "Sem mensalidades - Pagamento Único"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="bg-brand-100 p-2 rounded-full">
                          <CheckCircle2 className="w-5 h-5 text-brand-600" />
                        </div>
                        <span className="text-lg text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-200 blur-[100px] rounded-full opacity-50" />
                  <div className="relative bg-white border border-slate-100 p-8 rounded-2xl shadow-xl">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-center">
                        <div className="text-4xl font-bold text-brand-600 mb-2">30%</div>
                        <div className="text-sm text-slate-500">Mais Vendas</div>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-center">
                        <div className="text-4xl font-bold text-emerald-500 mb-2">2h</div>
                        <div className="text-sm text-slate-500">Economia Diária</div>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-center col-span-2">
                        <div className="text-4xl font-bold text-indigo-500 mb-2">100%</div>
                        <div className="text-sm text-slate-500">Controle Financeiro</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 relative overflow-hidden bg-brand-600">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <div className="container mx-auto px-6 text-center relative z-10 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Pronto para transformar sua loja?
              </h2>
              <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto">
                Tenha o controle total do seu negócio hoje mesmo por apenas R$ 120,00.
              </p>
              <div className="flex justify-center gap-4">
                 <a 
                   href="https://pay.kiwify.com.br/a61mlFc"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="bg-white text-green-600 hover:bg-slate-50 px-10 py-5 rounded-xl text-lg font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-2"
                 >
                   <CheckCircle2 className="w-5 h-5" />
                   Garantir Minha Cópia
                 </a>
              </div>
              <p className="mt-6 text-sm text-brand-200 opacity-80">
                *Pagamento único, sem mensalidades. Suporte incluso na instalação.
              </p>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-slate-50 border-t border-slate-200 py-12">
            <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="bg-brand-600 p-1.5 rounded-lg">
                    <Store className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-slate-800">MicroERP</span>
                </div>
                <div className="flex gap-8 text-sm text-slate-500">
                  <a href="#" className="hover:text-brand-600 transition-colors">Termos</a>
                  <a href="#" className="hover:text-brand-600 transition-colors">Privacidade</a>
                  <a href="#" className="hover:text-brand-600 transition-colors">Contato</a>
                </div>
                <div className="text-slate-500 text-sm">
                  © 2026 MicroERP Varejo.
                </div>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 transition-all hover:-translate-y-1 hover:shadow-lg group">
      <div className="bg-white shadow w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <div className="text-brand-600">
          {React.cloneElement(icon as React.ReactElement<{ size?: number }>, { size: 28 })}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-brand-700 transition-colors">{title}</h3>
      <p className="text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

// ---- Mini System Demo Component ----

// Types
interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: string;
  color: string;
}

interface Sale {
  id: number;
  total: number;
  date: Date;
  items: { name: string; quantity: number; price: number }[];
}

function InteractiveDemo({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'pdv' | 'products'>('dashboard');
  
  // App State
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: 'Refrigerante Cola', price: 8.50, stock: 100, category: 'Bebidas', color: 'bg-red-100 text-red-700' },
    { id: 2, name: 'Água Mineral', price: 3.00, stock: 150, category: 'Bebidas', color: 'bg-blue-100 text-blue-700' },
    { id: 3, name: 'Salgado Assado', price: 6.50, stock: 40, category: 'Lanches', color: 'bg-orange-100 text-orange-700' },
    { id: 4, name: 'Chocolate Barra', price: 5.90, stock: 80, category: 'Doces', color: 'bg-purple-100 text-purple-700' },
    { id: 5, name: 'Biscoito Recheado', price: 4.20, stock: 60, category: 'Mercearia', color: 'bg-yellow-100 text-yellow-700' },
    { id: 6, name: 'Suco Natural', price: 7.00, stock: 30, category: 'Bebidas', color: 'bg-green-100 text-green-700' },
  ]);
  
  const [items, setItems] = useState<Sale[]>([]); // Sales history
  const [todaySales, setTodaySales] = useState(1250.00); // Initial fake value
  const [salesCount, setSalesCount] = useState(23); // Initial fake value

  // PDV State
  const [cart, setCart] = useState<{product: Product, quantity: number}[]>([]); 
  const [searchTerm, setSearchTerm] = useState('');
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  // Products State
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', stock: '', category: '' });

  // Dashboard Calculations
  const activeProductsCount = products.filter(p => p.stock > 0).length;
  const lowStockCount = products.filter(p => p.stock < 10).length;

  // Actions
  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: number, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.product.id === productId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const cartTotal = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

  const handleFinalizeSale = () => {
    setShowPaymentModal(true);
  };

  const confirmSale = () => {
    // Update Stock
    setProducts(prev => prev.map(p => {
      const inCart = cart.find(c => c.product.id === p.id);
      if (inCart) {
        return { ...p, stock: Math.max(0, p.stock - inCart.quantity) };
      }
      return p;
    }));

    // Update Stats
    setTodaySales(prev => prev + cartTotal);
    setSalesCount(prev => prev + 1);
    
    // Add to history (simple version)
    setItems(prev => [...prev, {
      id: Date.now(),
      total: cartTotal,
      date: new Date(),
      items: cart.map(c => ({ name: c.product.name, quantity: c.quantity, price: c.product.price }))
    }]);

    setCart([]);
    setShowPaymentModal(false);
    alert('Venda realizada com sucesso! O estoque foi atualizado e o valor entrou no caixa.');
    setActiveTab('dashboard'); // Redirect to dashboard to see changes
  };

  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price) return;

    const product: Product = {
      id: Date.now(),
      name: newProduct.name,
      price: Number(newProduct.price),
      stock: Number(newProduct.stock) || 0,
      category: newProduct.category || 'Geral',
      color: 'bg-slate-100 text-slate-700' // Default color
    };

    setProducts(prev => [...prev, product]);
    setShowAddProduct(false);
    setNewProduct({ name: '', price: '', stock: '', category: '' });
    alert('Produto cadastrado com sucesso!');
  };

  return (
    <div className="fixed inset-0 z-[100] bg-slate-100 flex flex-col animate-fade-in font-sans">
      {/* Top Bar */}
      <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shadow-sm z-20">
        <div className="flex items-center gap-3">
          <div className="bg-brand-600 p-2 rounded-lg">
            <Store className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold text-slate-800">Sistema PDV <span className="text-xs font-normal text-slate-500 ml-2 bg-slate-100 px-2 py-1 rounded-full border border-slate-200">Modo Teste</span></span>
        </div>
        <div className="flex items-center gap-4">
           <div className="bg-brand-50 text-brand-700 px-3 py-1 rounded-full text-sm font-bold border border-brand-100">
             Caixa Aberto
           </div>
           <button 
             onClick={onClose}
             className="text-slate-500 hover:text-red-600 font-medium text-sm flex items-center gap-2 px-4 py-2 hover:bg-slate-50 rounded-full transition-colors"
           >
             <X className="w-4 h-4" />
             Sair da Demo
           </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-slate-200 flex flex-col">
          <div className="p-4 space-y-2">
            <SidebarItem icon={<BarChart3 />} label="Dashboard" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
            <SidebarItem icon={<ShoppingCart />} label="PDV / Caixa" active={activeTab === 'pdv'} onClick={() => setActiveTab('pdv')} />
            <SidebarItem icon={<Package />} label="Produtos" active={activeTab === 'products'} onClick={() => setActiveTab('products')} />
            <div className="h-px bg-slate-100 my-2" />
            <SidebarItem icon={<DollarSign />} label="Financeiro" active={false} onClick={() => {}} />
            <SidebarItem icon={<TrendingUp />} label="Relatórios" active={false} onClick={() => {}} />
          </div>
          <div className="mt-auto p-4 border-t border-slate-100">
            <div className="bg-slate-50 rounded-xl p-4 text-center border border-slate-200">
              <p className="text-xs text-slate-500 mb-1">Total em Caixa</p>
              <p className="font-bold text-brand-600 text-lg">R$ {todaySales.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-slate-50 p-8 overflow-y-auto">
          {activeTab === 'dashboard' && (
            <div className="space-y-8 animate-fade-in">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-slate-800">Visão Geral</h2>
                <button 
                  onClick={() => setActiveTab('pdv')}
                  className="bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-lg shadow-brand-500/20"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Nova Venda
                </button>
              </div>

              <div className="grid grid-cols-4 gap-6">
                <StatCard 
                  title="Vendas Hoje" 
                  value={`R$ ${todaySales.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`} 
                  icon={<DollarSign className="text-emerald-500" />} 
                  trend="+12%" 
                />
                <StatCard 
                  title="Total Pedidos" 
                  value={salesCount.toString()} 
                  icon={<ShoppingCart className="text-blue-500" />} 
                  trend="+5" 
                />
                <StatCard 
                  title="Produtos Ativos" 
                  value={activeProductsCount.toString()} 
                  icon={<Package className="text-purple-500" />} 
                  trend="Normal" 
                />
                <StatCard 
                  title="Estoque Baixo" 
                  value={lowStockCount.toString()} 
                  icon={<TrendingUp className="text-orange-500" />} 
                  trend={lowStockCount > 0 ? "Atenção" : "Ok"}
                />
              </div>

              <div className="grid grid-cols-3 gap-6 h-96">
                <div className="col-span-2 bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col">
                  <h3 className="font-bold text-slate-700 mb-6">Desempenho Semanal</h3>
                  <div className="flex-1 flex items-end justify-between gap-4 px-4 pb-2">
                    {[40, 65, 45, 80, 55, 90, (todaySales / 2000) * 100].map((h, i) => (
                      <div key={i} className="w-full bg-slate-100 rounded-t-lg relative group h-full flex items-end overflow-hidden">
                         <div 
                           className="w-full bg-brand-500 rounded-t-lg transition-all duration-1000 group-hover:bg-brand-600 relative"
                           style={{ height: `${Math.min(100, Math.max(5, h))}%` }}
                         >
                           <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                             {i === 6 ? 'Hoje' : ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex'][i]}
                           </div>
                         </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-4 text-xs text-slate-400 font-medium px-2">
                    <span>Dom</span><span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Hoje</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm overflow-hidden flex flex-col">
                  <h3 className="font-bold text-slate-700 mb-4">Últimas Vendas</h3>
                  <div className="space-y-0 divide-y divide-slate-50 overflow-y-auto flex-1 -mx-4 px-4">
                    {[
                      ...items.map(sale => ({ name: `Venda #${sale.id.toString().slice(-4)}`, val: `R$ ${sale.total.toFixed(2)}`, time: 'Agora' })),
                      { name: 'Venda #9032', val: 'R$ 45,00', time: '10:30' },
                      { name: 'Venda #9031', val: 'R$ 12,50', time: '10:15' },
                      { name: 'Venda #9030', val: 'R$ 89,90', time: '09:45' },
                    ].slice(0, 6).map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-3 hover:bg-slate-50 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="bg-green-100 p-2 rounded-full">
                            <DollarSign className="w-3 h-3 text-green-600" />
                          </div>
                          <div>
                            <p className="font-medium text-slate-800 text-sm">{item.name}</p>
                            <p className="text-xs text-slate-400">{item.time}</p>
                          </div>
                        </div>
                        <span className="font-bold text-slate-700 text-sm">{item.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'pdv' && (
            <div className="flex h-full gap-6 animate-fade-in">
              <div className="flex-1 flex flex-col gap-6">
                {/* Search Bar */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      type="text" 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Buscar produto por nome..." 
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all font-medium"
                      autoFocus
                    />
                  </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-auto pb-4 content-start">
                  {products
                    .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map((prod) => (
                    <button 
                      key={prod.id} 
                      onClick={() => addToCart(prod)}
                      className="bg-white p-4 rounded-xl border border-slate-200 hover:border-brand-500 hover:shadow-md transition-all flex flex-col items-start gap-2 min-h-[140px] justify-between group text-left relative overflow-hidden"
                    >
                      <div className={`w-12 h-12 rounded-lg ${prod.color} flex items-center justify-center font-bold text-lg opacity-80 group-hover:opacity-100 mb-2`}>
                        {prod.name.charAt(0)}
                      </div>
                      <div className="w-full relative z-10">
                        <p className="font-bold text-slate-800 text-sm line-clamp-2 leading-tight mb-1">{prod.name}</p>
                        <div className="flex justify-between items-end w-full">
                          <p className="text-brand-600 font-bold">R$ {prod.price.toFixed(2)}</p>
                          <p className="text-xs text-slate-400">Est: {prod.stock}</p>
                        </div>
                      </div>
                      {/* Click effect */}
                      <div className="absolute inset-0 bg-brand-50 opacity-0 group-active:opacity-20 transition-opacity" />
                    </button>
                  ))}
                  {products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase())).length === 0 && (
                     <div className="col-span-full flex flex-col items-center justify-center py-12 text-slate-400">
                       <Package className="w-12 h-12 mb-2 opacity-20" />
                       <p>Nenhum produto encontrado</p>
                     </div>
                  )}
                </div>
              </div>

              {/* Cart / Sidebar */}
              <div className="w-96 bg-white rounded-xl shadow-lg border border-slate-200 flex flex-col overflow-hidden h-[calc(100vh-6rem)]">
                <div className="p-4 bg-slate-50 border-b border-slate-200 font-bold text-slate-700 flex justify-between items-center">
                  <span>Carrinho de Compras</span>
                  <span className="bg-brand-100 text-brand-700 px-2 py-0.5 rounded text-xs">{cart.reduce((a, b) => a + b.quantity, 0)} itens</span>
                </div>
                
                <div className="flex-1 overflow-y-auto p-4 space-y-2">
                  {cart.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-slate-400 opacity-60">
                      <ShoppingCart className="w-12 h-12 mb-2" />
                      <p>Carrinho vazio</p>
                      <p className="text-xs">Clique nos produtos para adicionar</p>
                    </div>
                  ) : (
                    cart.map((item) => (
                      <div key={item.product.id} className="flex justify-between items-center p-3 border border-slate-100 rounded-lg bg-slate-50 animate-slide-up group hover:border-brand-200 transition-colors">
                         <div className="flex-1">
                           <p className="font-medium text-slate-800 text-sm line-clamp-1">{item.product.name}</p>
                           <p className="text-xs text-slate-500">{item.quantity}x R$ {item.product.price.toFixed(2)}</p>
                         </div>
                         <div className="flex items-center gap-3">
                           <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-lg px-1">
                             <button onClick={() => updateQuantity(item.product.id, -1)} className="w-6 h-6 flex items-center justify-center hover:bg-slate-100 rounded text-slate-600">-</button>
                             <span className="text-xs w-4 text-center font-medium">{item.quantity}</span>
                             <button onClick={() => updateQuantity(item.product.id, 1)} className="w-6 h-6 flex items-center justify-center hover:bg-slate-100 rounded text-slate-600">+</button>
                           </div>
                           <button onClick={() => removeFromCart(item.product.id)} className="text-slate-300 hover:text-red-500 transition-colors">
                             <Trash2 className="w-4 h-4" />
                           </button>
                         </div>
                      </div>
                    ))
                  )}
                  {/* Anchor for auto scroll */}
                  <div />
                </div>

                <div className="p-6 bg-slate-50 border-t border-slate-200 space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-slate-500">
                      <span>Subtotal</span>
                      <span>R$ {cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center text-lg">
                      <span className="font-medium text-slate-600">Total a Pagar</span>
                      <span className="font-bold text-2xl text-brand-600">R$ {cartTotal.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={handleFinalizeSale}
                    disabled={cart.length === 0}
                    className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-500/20 transition-all active:scale-95 text-lg flex justify-center items-center gap-2"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    Finalizar Venda
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'products' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-slate-800">Meus Produtos</h2>
                <button 
                  onClick={() => setShowAddProduct(true)}
                  className="bg-brand-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-brand-700 transition-colors shadow-lg shadow-brand-500/20"
                >
                  <Plus className="w-4 h-4" /> Cadastrar Produto
                </button>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-500">
                    <tr>
                      <th className="p-4 font-medium text-sm">Produto</th>
                      <th className="p-4 font-medium text-sm">Categoria</th>
                      <th className="p-4 font-medium text-sm">Estoque</th>
                      <th className="p-4 font-medium text-sm">Preço</th>
                      <th className="p-4 font-medium text-sm">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {products.map((p) => (
                      <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                        <td className="p-4">
                          <div className="font-medium text-slate-800">{p.name}</div>
                          <div className="text-xs text-slate-400">COD: {p.id.toString().padStart(4, '0')}</div>
                        </td>
                        <td className="p-4 text-sm text-slate-600">{p.category}</td>
                        <td className="p-4 text-sm text-slate-600">
                          <span className={`px-2 py-1 rounded text-xs font-bold ${p.stock < 10 ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                            {p.stock} un
                          </span>
                        </td>
                        <td className="p-4 font-medium text-slate-900">R$ {p.price.toFixed(2)}</td>
                        <td className="p-4">
                          <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-1 rounded-full">Ativo</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Payment Success Modal (Fake) */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-[110] bg-black/50 backdrop-blur-sm flex items-center justify-center animate-fade-in">
           <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center">
             <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
               <CheckCircle2 className="w-8 h-8 text-emerald-600" />
             </div>
             <h3 className="text-2xl font-bold text-slate-800 mb-2">Venda Finalizada!</h3>
             <p className="text-slate-500 mb-6">
               Total: <span className="font-bold text-slate-900">R$ {cartTotal.toFixed(2)}</span>
               <br/>
               <span className="text-xs">O estoque foi atualizado automaticamente.</span>
             </p>
             <button onClick={confirmSale} className="w-full bg-emerald-500 text-white font-bold py-3 rounded-xl hover:bg-emerald-600 transition-colors">
               Imprimir Comprovante (Demo)
             </button>
           </div>
        </div>
      )}

      {/* Add Product Modal */}
      {showAddProduct && (
        <div className="fixed inset-0 z-[110] bg-black/50 backdrop-blur-sm flex items-center justify-center animate-fade-in">
           <form onSubmit={handleCreateProduct} className="bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full">
             <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-slate-800">Novo Produto</h3>
                <button type="button" onClick={() => setShowAddProduct(false)}><X className="text-slate-400 hover:text-red-500" /></button>
             </div>
             
             <div className="space-y-4">
               <div>
                  <label className="text-sm font-medium text-slate-700 block mb-1">Nome do Produto</label>
                  <input 
                    required
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none" 
                    placeholder="Ex: Coca Cola 2L"
                    value={newProduct.name}
                    onChange={e => setNewProduct({...newProduct, name: e.target.value})}
                  />
               </div>
               <div className="flex gap-4">
                 <div className="flex-1">
                    <label className="text-sm font-medium text-slate-700 block mb-1">Preço (R$)</label>
                    <input 
                      required
                      type="number"
                      step="0.01"
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none" 
                      placeholder="0,00"
                      value={newProduct.price}
                      onChange={e => setNewProduct({...newProduct, price: e.target.value})}
                    />
                 </div>
                 <div className="flex-1">
                    <label className="text-sm font-medium text-slate-700 block mb-1">Estoque</label>
                    <input 
                      type="number"
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none" 
                      placeholder="0"
                      value={newProduct.stock}
                      onChange={e => setNewProduct({...newProduct, stock: e.target.value})}
                    />
                 </div>
               </div>
               <div>
                  <label className="text-sm font-medium text-slate-700 block mb-1">Categoria</label>
                  <select 
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
                    value={newProduct.category}
                    onChange={e => setNewProduct({...newProduct, category: e.target.value})}
                  >
                    <option value="">Selecione...</option>
                    <option value="Bebidas">Bebidas</option>
                    <option value="Alimentos">Alimentos</option>
                    <option value="Diversos">Diversos</option>
                  </select>
               </div>
             </div>

             <div className="mt-8">
               <button type="submit" className="w-full bg-brand-600 text-white font-bold py-3 rounded-xl hover:bg-brand-700 transition-colors">
                 Salvar Produto
               </button>
             </div>
           </form>
        </div>
      )}
    </div>
  );
}

function SidebarItem({ icon, label, active, onClick }: { icon: any, label: string, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm ${
        active 
          ? 'bg-brand-50 text-brand-700 shadow-sm' 
          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
      }`}
    >
      {React.cloneElement(icon, { size: 20, className: active ? 'text-brand-600' : 'text-slate-400' })}
      {label}
    </button>
  );
}

function StatCard({ title, value, icon, trend }: { title: string, value: string, icon: any, trend: string }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-slate-50 rounded-lg">{icon}</div>
        <span className={`text-xs font-bold px-2 py-1 rounded-full ${trend.includes('+') ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
          {trend}
        </span>
      </div>
      <div>
        <p className="text-slate-500 text-sm mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
      </div>
    </div>
  );
}

export default App;
