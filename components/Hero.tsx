const Hero = () => {
    return (
      <section className="hero-section relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img className="w-full h-full object-cover" src="/hero-bg2.png" alt="Hero Background" />
        </div>
        <div className="z-10 text-white-10 text-center mt-80">
          <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold text-white-10 mb-2 bg-black" style={{ fontFamily: 'variex, sans-serif' }}>
            Viser plus loin
          </h1>
          <p className="text-md md:text-sm lg:text-md sm:text-sm text-xs sm:text-xs md:text-md lg:text-3xl" style={{ fontFamily: 'poppins, sans-serif' }}>
            Votre associé de l'idée à la réalisation de vos projets
          </p>
        </div>
        <div className="z-10 absolute bottom-0 left-0 right-0 flex justify-evenly p-4 backdrop-filter-blur-md hidden md:flex">
          <ul className="flex items-center space-x-12 text-white-10 flex-wrap md:flex-nowrap" style={{ fontFamily: 'bello-caps, sans-serif' }}>
            <li className="hidden md:block text-lg lg:text-xl">identité visuelle</li>
            <li className="hidden md:block text-lg lg:text-xl">web & mobile design</li>
            <li className="hidden md:block text-lg lg:text-xl">développement web</li>
            <li className="hidden md:block text-lg lg:text-xl">communication</li>
            <li className="hidden md:block text-lg lg:text-xl">supports marketing</li>
            <li className="hidden md:block text-lg lg:text-xl">référencement</li>
            <li className="hidden md:block text-lg lg:text-xl">stratégie et marketing</li>
          </ul>
        </div>
      </section>
    );
  };
  
  export default Hero;
  