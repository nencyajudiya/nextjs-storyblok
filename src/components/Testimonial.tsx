// src/components/Testimonial.tsx
export const Testimonial = ({ blok }: any) => {
  return (
    <section className='bg-white p-8 rounded-sm shado'>
      <p className='text-xl leading-relaxed text-gray-700'> {blok.comment}</p>
      <p className='text-lg font-semibold mt-6'>{blok.name}</p>
    </section>
  );
};
