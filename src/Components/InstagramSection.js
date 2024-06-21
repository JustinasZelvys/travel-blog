import React from "react";
import "./InstagramSection.css";

const InstagramSection = () => {
  const instagramImages = [
    "https://www.tourcompass.co.uk/wp-content/uploads/2022/09/Hero-thailand-720-540.webp",
    "https://www.dovolena-vietnam-go2.cz/sites/all/themes/go2/img/custom_nodes/pruvodce/01-sapa-hory-severu.jpg",
    "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/10/13/tokyo-main.jpg",
    "https://www.discovabali.com/wp-content/uploads/2022/06/c4fedab1-4041-4db5-9245-97439472cf2c.jpg",
    "https://cdn.adventure-life.com/17/97/56/rafik-wahba-LkyYLdL3WxE-unsplash/1300x820.webp",
    "https://www.newzealand.com/assets/Job-2189_TNZ_Autumn_R52_5812_Final_HR__aWxvdmVrZWxseQo_FocalPointCropWzQzMCw2MzAsNDQsNDUsNzUsImpwZyIsNjUsMi41XQ.jpg",
  ];

  return (
    <div className="instagram-section">
      <h2>
        <i class="fa fa-instagram"></i>Instagram
      </h2>
      <div className="instagram-images">
        {instagramImages.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Instagram ${index}`}
            className="instagram-image"
          />
        ))}
      </div>
    </div>
  );
};

export default InstagramSection;
