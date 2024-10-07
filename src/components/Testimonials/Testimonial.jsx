import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "The project exceeded all expectations. Every feature works seamlessly, and the attention to detail is truly remarkable. Absolutely thrilled with the final result and collaboration!",
    },
    {
      img: profilePic2,
      review:
        "High-quality development delivered on time. Every detail was carefully crafted, ensuring a smooth user experience. The dedication and skill are evident in the end product.",
    },
    {
      img: profilePic3,
      review:
        "The work provided was nothing short of outstanding. Every requirement was met with precision, and the outcome is exactly what we envisioned. Couldn’t be more pleased!",
    },
    {
      img: profilePic4,
      review:
        "Exceptional service from start to finish. The development process was smooth, and the final product is both functional and visually appealing. Truly a great experience overall!",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
