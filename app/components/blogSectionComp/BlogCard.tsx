import React from "react";
interface jv {
  image: string;
  heading: string;
  text: string;
}
const BlogCard = ({ image, heading, text }: jv) => {
  return (
    <>
      <section className="col-span-6 blogCardSec">
        <div
          className="w-[610px] h-[334px] rounded-sm  bg-[url('/blog1.jpg')] bg-cover bg-center relative blogCardSec"
          style={{ backgroundImage: `url(${image})` }}>
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, #000000F2, #9D9C9C00)",
              // zIndex: 10,
            }}>
            {/* Text Content */}
            <div className="absolute bottom-0 left-0 p-5 w-[510px] text-white z-20">
              <h3 className="text-2xl font-bold">{heading}</h3>
              <p className="font-normal text-sm">{text}</p>
            </div>
          </div>
          <div className="text-center w-full flex items-center justify-center h-full btn-Container ">
            <button className="w-[30%]  cursor-pointer  border border-white  text-[16px] text-[#FFFFFF] py-[5px] uppercase ">
              REad More
            </button>
          </div>
        </div>
      </section>
      {/* <section>

        <div className='w-[610px] h-[334px] rounded-[5px] bg-[url("/blog1.jpg")] relative ' >
          <div style={{
        background: 'linear-gradient(to top, #000000F2, #9D9C9C00 absolute z-10 )',

      }}>
          <div className='w-[610px]' >
            <div className='absolute bottom-0 left-0 p-5 w-[510px] text-white'>
              <h3 className='text-2xl font-bold '>Learn about this week's top author</h3>
              <p className='font-normal text-sm'>Jump start your book reading by quickly check through the popular book categories...</p>
            </div>
          </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default BlogCard;
