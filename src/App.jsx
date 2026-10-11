import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookingFlow from "./components/BookingFlow";
import PromotionPopup from "./components/PromotionPopup";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Masters from "./sections/Masters";
import Gallery from "./sections/Gallery";
import WhyUs from "./sections/WhyUs";
import Reviews from "./sections/Reviews";
import CTA from "./sections/CTA";
import Contacts from "./sections/Contacts";

export default function App() {
  const [booking, setBooking] = useState(null); // null | { service, master }

  const openBooking = (prefill = {}) => setBooking(prefill);
  const closeBooking = () => setBooking(null);

  return (
    <>
      <Header onBookClick={() => openBooking()} />

      <main>
        <Hero onBookClick={() => openBooking()} />
        <About />
        <Services onSelectService={(service) => openBooking({ service })} />
        <Masters onSelectMaster={(master) => openBooking({ master })} />
        <Gallery />
        <WhyUs />
        <Reviews />
        <CTA onBookClick={() => openBooking()} />
        <Contacts />
      </main>

      <Footer />

      {booking && (
        <BookingFlow
          initialService={booking.service}
          initialMaster={booking.master}
          onClose={closeBooking}
        />
      )}

      <PromotionPopup onBookClick={() => openBooking()} />
    </>
  );
}
