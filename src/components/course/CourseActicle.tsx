import React from "react";
import NextImg from "../common/next-img";

type Props = {};
const articles = [
  {
    title: "Ba điều cần làm trước khi bạn bắt đầu đầu tư",
    icon: "/assets/icons/document-text2.svg",
  },
  {
    title: "Quy tắc 6 túi là gì và cách áp dụng chúng vào đầu tư hiệu quả",
    icon: "/assets/icons/document-text2.svg",
  },
  {
    title: "Mở tài khoản UPS qua ứng dụng điện thoại nhanh nhất",
    icon: "/assets/icons/document-text2.svg",
  },
];

const CourseActicle = (props: Props) => {
  return (
    <div
      className="max-w-[1024px] mx-auto mt-10 lg:mt-20"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="flex flex-col">
        {articles.map((article, index) => (
          <a
            key={index}
            href=""
            className={`flex items-center justify-between gap-[30px] border-[#60606B] border-opacity-65 py-3 lg:py-6 ${
              index === 0 ? "border-y" : "border-b"
            } `}
          >
            <div className="flex items-center gap-3 lg:gap-5">
              <div className="relative min-w-6 w-[24px] h-[24px]">
                <NextImg src={article.icon} alt="Capi" objectFit="cover" />
              </div>
              <p className="text-[#15171E] text-[14px] lg:text-[24px] lg:leading-normal leading-[22px] font-medium">
                {article.title}
              </p>
            </div>
            <div className="relative w-[24px] h-[24px] lg:w-[32px] lg:h-[32px] cursor-pointer">
              <NextImg
                src="/assets/icons/chevron-down.svg"
                alt="Capi"
                objectFit="cover"
                className="rotate-90"
              />
            </div>
          </a>
        ))}
      </div>
      <button className="!bg-[#15171E] !text-[#FFF] btn active1 mt-6 lg:mt-[50px] mx-auto">
        Xem tất cả bài viết
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25 24"
          fill="none"
          className="w-4 h-4 lg:w-6 lg:h-6"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.2594 5.98952C19.2594 5.7906 19.1804 5.59984 19.0398 5.45919C18.8991 5.31853 18.7083 5.23952 18.5094 5.23952L9.92515 5.23952C9.51093 5.23952 9.17515 5.5753 9.17515 5.98952C9.17515 6.40373 9.51093 6.73952 9.92515 6.73952L16.6992 6.73952L5.95855 17.4802C5.66566 17.7731 5.66566 18.2479 5.95855 18.5408C6.25145 18.8337 6.72632 18.8337 7.01921 18.5408L17.7594 7.80062V14.5738C17.7594 14.988 18.0952 15.3238 18.5094 15.3238C18.9236 15.3238 19.2594 14.988 19.2594 14.5738L19.2594 5.98952Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default CourseActicle;
