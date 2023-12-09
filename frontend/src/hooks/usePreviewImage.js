import React, { useState } from "react";

const usePreviewImage = () => {
  const [imgUrl, setImgUrl] = useState();

  const handdleImageChange = (e) => {
    //getting the image metadata
    const file = e.target.files[0];
    console.log(file);
  };
  return { handdleImageChange, imgUrl };
};

export default usePreviewImage;
