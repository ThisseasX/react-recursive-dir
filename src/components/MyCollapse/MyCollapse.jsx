import React, { useEffect, useRef } from 'react';
import classes from './style.module.css';

const MyCollapse = ({ isOpen, children }) => {
  const collapseRef = useRef();

  useEffect(() => {
    collapseRef.current.style.marginTop = !isOpen
      ? `-${collapseRef.current.offsetHeight}px`
      : '0px';
  }, [isOpen]);

  return (
    <div className={classes.collapseContainer}>
      <div
        ref={(el) => {
          if (!collapseRef.current) {
            collapseRef.current = el;
            collapseRef.current.style.marginTop = `-${el.offsetHeight}px`;

            setTimeout(() => {
              collapseRef.current.style.transition =
                'margin-top 0.3s ease-in-out';
            }, 0);
          }
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default MyCollapse;
