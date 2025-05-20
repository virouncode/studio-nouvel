const GoogleMap = () => {
  return (
    <div className="w-full lg:w-1/2 h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg transform translate-y-4 opacity-0 animate-fade-in-up">
      <iframe
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Studio+Nouvel,Paris+France&zoom=17"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
