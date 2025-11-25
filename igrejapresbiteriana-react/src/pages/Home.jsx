import React from 'react';
import AgendaSection from '../components/AgendaSection/AgendaSection';
import DizimosSection from '../components/DizimosSection/DizimosSection';
import Hero from '../components/Hero/Hero';
import MapSection from '../components/MapSection/MapSection';
import MinisterioSection from '../components/MinisterioSection/MinisterioSection';
import PastorSection from '../components/PastorSection/PastorSection';
import ReformaSection from '../components/ReformaSection/ReformaSection';

const Home = () => {
  return (
    <>
      <Hero />
      <section id="pastor" aria-labelledby="pastor-heading">
        <PastorSection />
      </section>
      <section id="reforma" aria-labelledby="reforma-heading">
        <ReformaSection />
      </section>
      <section id="agenda" aria-labelledby="agenda-heading">
        <AgendaSection />
      </section>
      <section id="ministerio" aria-labelledby="ministerio-heading">
        <MinisterioSection />
      </section>
      <section id="localizacao" aria-labelledby="localizacao-heading">
        <MapSection />
      </section>
      <section id="dizimos" aria-labelledby="dizimos-heading">
        <DizimosSection />
      </section>
    </>
  );
};

export default Home;
