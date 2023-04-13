import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function loadingStateSkeleton({ cardsNum }) {
  return (
    <SkeletonTheme
      baseColor="hsl(209 23% 22%)"
      highlightColor="hsl(0 0% 100% / .1)"
    >
      {/* <div className="cardskeleton">
        <div>
          <Skeleton style={{ height: "12rem" }} />
        </div>
        <div>
          <Skeleton style={{ marginTop: "2rem", marginBottom: "1.5rem" }} />
          <Skeleton
            count={3}
            style={{ marginTop: "1rem" }}
          />
        </div>
      </div> */}

      {Array(cardsNum)
        .fill(0)
        .map((_, idx) => {
          return (
            <div
              className="cardskeleton"
              key={idx}
            >
              <div>
                <Skeleton style={{ height: "12rem" }} />
              </div>
              <div>
                <Skeleton style={{ marginTop: "2rem", marginBottom: "1.5rem" }} />
                <Skeleton
                  count={3}
                  style={{ marginTop: "1rem" }}
                />
              </div>
            </div>
          );
        })}
    </SkeletonTheme>
  );
}

export default loadingStateSkeleton;
