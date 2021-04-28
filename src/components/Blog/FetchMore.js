import React, { useEffect, useMemo, useRef } from 'react';
import styled from 'styled-components';

const FetchMore = ({ loading, isNoMore, setOffset }) => {
  const observerTarget = useRef(null);
  const observer = useMemo(
    () =>
      new IntersectionObserver(([{ isIntersecting }]) => {
        if (isIntersecting && !loading && !isNoMore)
          setOffset((offset) => offset + 5);
      }),
    [loading, isNoMore, setOffset]
  );

  useEffect(() => {
    const target = observerTarget.current;
    observer.observe(target);
    return () => observer.unobserve(target);
  }, [observer]);

  return (
    <FetchMoreTarget
      id="fetchMore"
      className={loading ? 'loading' : ''}
      ref={observerTarget}
      style={{ height: '1px' }}
    />
  );
};

const FetchMoreTarget = styled.div`
  &.loading {
    :after {
      content: 'LOADING';
      position: fixed;
      bottom: 0;
      left: 0;
      padding: 0.5rem;
      width: 100%;
      text-align: center;
      color: #fff;
      background: #777;
      font-size: 1rem;
      font-weight: bold;
    }
  }
`;

export default React.memo(FetchMore);
