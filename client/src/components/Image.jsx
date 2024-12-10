import { IKImage } from "imagekitio-react";
const Image = ({src, className, w, h, alt}) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      path={src}
      className={className}
      loading="lazy"
      lqip={{ active: true, quality: 50 }}
      width={w}
      height={h}
      alt={alt}
      transformation={[
        {
          height: h,
          width: w,
          crop: "fill",
          dpr: "auto",
        },
      ]}
    />
  );
}

export default Image