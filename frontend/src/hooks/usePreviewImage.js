import React, { useState } from "react";
import useShowToast from "./useShowToast";
const usePreviewImage = () => {
  const [imgUrl, setImgUrl] = useState();
  const showToast = useShowToast();
  const handdleImageChange = (e) => {
    //getting the image metadata
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImgUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      showToast("invalid file type", "error", "please select an image file");
      setImgUrl(null);
    }
  };

  console.log(imgUrl);
  return { handdleImageChange, imgUrl };
};

export default usePreviewImage;
