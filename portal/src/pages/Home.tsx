import { useRef, useState, useEffect } from "react";
import Rose from "../images/svg/Rose";
import RoseStem from "../images/svg/RoseStem";
export const Home: React.FC = () => {
  const parent = useRef<HTMLDivElement>(null);
  const [parentDimensions, setParentDimensions] = useState<{
    height: number;
    width: number;
  } | null>(null);

  const [imageStem, setImageStem] = useState<boolean>(false);

  useEffect(() => {
    if (parent.current) {
      const box = parent.current.getBoundingClientRect();
      setParentDimensions({ height: box.height, width: box.width });
    }
  }, [parent]);

  const homeImage = () => {
    if (imageStem) {
      return <RoseStem height={sh} width={(192 / 272) * sh} />;
    } else {
      return <Rose height={sh} width={(169 / 231) * sh} />;
    }
  };

  const sh = parentDimensions ? parentDimensions.height - 0 : 0;
  return (
    <div
      ref={parent}
      onClick={() => setImageStem(!imageStem)}
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {parentDimensions && homeImage()}
    </div>
  );
};
