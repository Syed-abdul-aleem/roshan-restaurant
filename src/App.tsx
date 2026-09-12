import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { MobileBottomNav } from './components/MobileBottomNav';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { CheckoutPage } from './pages/CheckoutPage';

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const location = useLocation();
  const isCheckout = location.pathname === '/checkout';

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar onOpenCart={() => setCartOpen(true)} />

      <main className="flex-1 pb-16 md:pb-0">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </main>

      <Footer />

      {!isCheckout && <WhatsAppFloatingButton />}
      <MobileBottomNav onOpenCart={() => setCartOpen(true)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}
