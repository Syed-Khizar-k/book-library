import React from "react";
interface cardType {
  image: string;
  title: string;
  description: string;
  date: string;
}

const LatestBlog = ({ image, title, description, date }: cardType) => {
  return (
    <aside className="flex gap-3.5 py-3">
      <div
        className="img-sec h-[90px] w-[100px] rounded-lg bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}></div>
      <div className="text-sec">
        <h3 className="text-[18px] font-[500] text-[#ED553B]">{title}</h3>
        <p className="text-[12px] text-[#011627] leading-relaxed">
          {description}
        </p>
        <p className="date text-[10px] text-[#f3be00] pt-2">• {date}</p>
      </div>
    </aside>
  );
};

export default LatestBlog;
