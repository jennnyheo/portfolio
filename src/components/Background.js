import { lazy, Suspense } from "react";
import React, { useEffect, useRef } from "react";
import "./../App.css";
import { useHistory } from "react-router-dom";
const Background = () => {
  useEffect(() => {
    const element = document.querySelector(".backgroundContainer");
    element.style.width = "97%";
    element.style.height = "95vh";
    element.style.transform = "translateY(20px)";
    element.style.transition = "all 1s ease";
  });
  const LazyTitle = lazy(() => {
    return new Promise((resolve) => setTimeout(resolve, 1000)).then(() =>
      import("./Title")
    );
  });
  const history = useHistory();
  setTimeout(() => {
    history.push("/main");
  }, 5000);
  return (
    <div className="backgroundContainer">
      <Suspense fallback={""}>
        <LazyTitle />
      </Suspense>
    </div>
  );
};

export default Background;
