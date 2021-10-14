// import { useState, useEffect } from 'react';

// export default function useWindowDimensions() {
//   const hasWindow = typeof window !== 'undefined';

//   function getWindowDimensions() {
//     const width = hasWindow ? window.innerWidth : null;
//     const height = hasWindow ? window.innerHeight : null;
//     return {
//       width,
//       height
//     };
//   }

//   const [ windowDimensions, setWindowDimensions ] = useState(getWindowDimensions());

//   useEffect(
//     () => {
//       if (hasWindow) {
//         function handleResize() {
//           setWindowDimensions(getWindowDimensions());
//         }

//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//       }
//     },
//     [ hasWindow ]
//   );

//   return windowDimensions;
// }
// import { useState, useEffect } from 'react';

// function getWindowDimensions() {
//   if( typeof window !== undefined)

//   const { innerWidth: width, innerHeight: height } = window;
//   return {
//     width,
//     height
//   };
// }

// export default function useWindowDimensions() {
//   const [ windowDimensions, setWindowDimensions ] = useState(getWindowDimensions());

//   useEffect(() => {
//     function handleResize() {
//       setWindowDimensions(getWindowDimensions());
//     }

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return windowDimensions;
// }
