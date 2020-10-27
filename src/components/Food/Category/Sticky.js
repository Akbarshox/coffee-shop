import React, { useEffect, useRef, useState } from 'react';
import style from './category.module.css';

export default (props) => {
   const [isSticky, setSticky] = useState(false);
   const ref = useRef(null);
   const handleScroll = () => {
      if (ref.current) {
         setSticky(ref.current.getBoundingClientRect().top <= 0);
      }
   };

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', () => handleScroll);
      };
   }, []);

   return (
      <>
         <div className={isSticky ? style.sticky : style.stickyWrapper} ref={ref}>
            {props.children}
         </div>
      </>
   );
};