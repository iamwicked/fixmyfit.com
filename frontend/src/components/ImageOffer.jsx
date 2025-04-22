import offerImage from '../assets/image.png';

export default function ImageOfferSection() {
  return (
    <section className="w-full flex justify-center mt-10 mb-10">
      <div className="w-11/12 md:w-9/10 h-[320px] bg-gray-300 border-2 border-blue-400 overflow-hidden">
        <img
          src={offerImage}
          alt="Offer or How it Works"
          className="w-full h-full object-cover object-center opacity-80"
        />
      </div>
    </section>
  );
}
