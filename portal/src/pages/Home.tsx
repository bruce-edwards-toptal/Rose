import { useRef, useState, useEffect } from "react";
import Rose from "../images/svg/Rose";
export const Home: React.FC = () => {
  const parent = useRef<HTMLDivElement>(null);
  const [parentDimensions, setParentDimensions] = useState<{
    height: number;
    width: number;
  } | null>(null);

  useEffect(() => {
    if (parent.current) {
      const box = parent.current.getBoundingClientRect();
      setParentDimensions({ height: box.height, width: box.width });
    }
  }, [parent]);

  const sh = parentDimensions ? parentDimensions.height - 0 : 0;
  return (
    <div
      ref={parent}
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {parentDimensions && <Rose height={sh} width={(169 / 231) * sh} />}
    </div>
  );
};
