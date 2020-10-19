import React from 'react';
import style from './category.module.css';
import {StickyContainer, Sticky} from 'react-sticky';

export default function Category() {
   return (
      <StickyContainer>
         {/* Other elements can be in between `StickyContainer` and `Sticky`,
        but certain styles can break the positioning logic used. */}
         <Sticky isSticky={true}>
            { props => (<h1>React</h1>) }
         </Sticky>
         {/* ... */}
      </StickyContainer>
   )
}