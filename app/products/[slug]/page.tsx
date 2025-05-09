import Breadcrumb from "@/app/components/BreadCrumb";
import Footer from "@/app/components/Footer";
import BottomFooter from "@/app/components/footerComp/BottomFooter";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import { notFound } from "next/navigation";

const productData = [
  {
    slug: "item1",
    name: "Simple way of peace life",
    description: "A fantasy novel by J.K. Rowling.",
    price: "$15",
    image: "/book1.png",
  },
  {
    slug: "item2",
    name: "Great travel at desert",
    description: "A fantasy novel by J.K. Rowling.",
    price: "$15",
    image: "/book2.png",
  },
  {
    slug: "item3",
    name: "The lady beauty Scarlett",
    description: "A fantasy novel by J.K. Rowling.",
    price: "$15",
    image: "/book3.png",
  },
  {
    slug: "item4",
    name: "Once upon a time",
    description: "A fantasy novel by J.K. Rowling.",
    price: "$15",
    image: "/book4.png",
  },
  {
    slug: "item5",
    name: "Simple way of piece life",
    description: "A fantasy novel by J.K. Rowling.",
    price: "$15",
    image: "/book1.png",
  },
  {
    slug: "item6",
    name: "Great travel at desert",
    description: "A fantasy novel by J.K. Rowling.",
    price: "$15",
    image: "/book2.png",
  },
  {
    slug: "item7",
    name: "The lady beauty Scarlett",
    description: "A fantasy novel by J.K. Rowling.",
    price: "$15",
    image: "/book3.png",
  },
  {
    slug: "item8",
    name: "Once upon a time",
    description: "A fantasy novel by J.K. Rowling.",
    price: "$15",
    image: "/book4.png",
  },
];

// type ProductPageProps = {
//   params: {
//     slug: string;
//   };
// };

export async function generateStaticParams() {
  return productData.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productData.find((p) => p.slug === slug);

  if (!product) return notFound();

  return (
    <>
      <Navbar />
      <Breadcrumb />
      <section className="w-full flex justify-center items-center py-[32px]">
        <div className="p-6 container px-[62px] flex justify-center items-center">
          <div>
            <Image
              src={product.image}
              alt={product.name}
              className="my-4"
              height={300}
              width={300}
            />
          </div>
          <div className="relative">
            <h1 className="text-3xl font-bold text-blue">{product.name}</h1>
            <p className="text-lg text-dark-gray">{product.description}</p>
            <p className="text-xl font-semibold text-red">{product.price}</p>
            <button className="w-[180px] cursor-pointer bg-[#ED553B] text-[16px] text-[#FFFFFF] py-[5px] uppercase mt-4">
              Buy Now
            </button>
          </div>
        </div>
      </section>
      <Footer />
      <BottomFooter />
    </>
  );
}
