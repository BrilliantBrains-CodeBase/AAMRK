import './App.css'
import { Route,Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import ImpactCad from './pages/products/ImpactCad/ImpactCad'
import StudioRip from './pages/products/StudioRIP/StudioRip'
import ERPPack from './pages/products/ERPPack/ERPPack'
import TopCNC from './pages/products/TopCNC/TopCNC'
import NotFound from './pages/NotFound/NotFound'
import PrivacyPolicy from './pages/legal/PrivacyPolicy'
import ThankYou from './pages/Thankyou/ThankYou'

function App() {
  return (
      <Routes>
        {/* Layout wrapper */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact-us2" element={<Contact />} />
          <Route path='impact-cad' element={<ImpactCad />} />
          <Route path='studiorip' element={<StudioRip />} />
          <Route path='erp-pack' element={<ERPPack />} />
          <Route path='top-cnc' element={<TopCNC />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
        </Route>

        <Route path='/thank-you' element={<ThankYou />} />
        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
  )
}

export default App
