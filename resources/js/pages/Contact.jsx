import ContactCard from "../components/ContactCard";

const Contact = () => {
  return (
    <section
      id="Contact"
      className="min-h-screen bg-gradient-to-b from-[#Fffff] to-[#F4F2DD]/20 py-16 px-6 sm:px-8 lg:px-12 xl:px-16 relative"
    >
      <div className="max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-[#97B9B5]">
            Contact
          </h1>
          <ContactCard>

          </ContactCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;
