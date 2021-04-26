import React, { useEffect, useMemo, useRef } from "react";

const FetchMore = ({ loading, isNoMore, setOffset }) => {
  const observerTarget = useRef(null);
  const observer = useMemo(
    () =>
      new IntersectionObserver(([{ isIntersecting }]) => {
        if (isIntersecting && !isNoMore) setOffset((offset) => offset + 5);
      }),
    [isNoMore, setOffset]
  );

  useEffect(() => {
    const target = observerTarget.current;
    observer.observe(target);
    return () => observer.unobserve(target);
  }, [observer]);

  return (
    <div
      id="fetchMore"
      className={loading ? "loading" : ""}
      ref={observerTarget}
      style={{ background: "red", height: "5rem" }}
    />
  );
};

export default React.memo(FetchMore);
