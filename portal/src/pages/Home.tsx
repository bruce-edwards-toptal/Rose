import { useRef, useState, useEffect } from "react";
import { HomeImage } from "./HomeImage";
export const Home: React.FC = () => {
  const parent = useRef<HTMLDivElement>(null);
  const [parentDimensions, setParentDimensions] = useState<{
    height: number;
    width: number;
  } | null>(null);

  const [image, setImage] = useState<number>(0);
  const numberimages: number = 21;

  useEffect(() => {
    if (parent.current) {
      const box = parent.current.getBoundingClientRect();
      setParentDimensions({ height: box.height, width: box.width });
    }
  }, [parent]);

  const parentheight = parentDimensions ? parentDimensions.height - 0 : 0;
  return (
    <div
      ref={parent}
      onClick={() => setImage(image === numberimages - 1 ? 0 : image + 1)}
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#000000",
      }}
    >
      <div
        style={{
          color: "#ffffff",
          position: "absolute",
          // display: "flex",
          // justifyContent: "End",
          // left: 0,
        }}
      >
        {image + 1}
      </div>
      {parentDimensions && (
        <HomeImage parentheight={parentheight} selection={image} />
      )}
    </div>
  );
};
